// clock context 
import { createContext, useContext, useState } from 'react';
const initialValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setHours: newHour => { },
    setMinutes: newMinutes => { },
    setSeconds: newSeconds => { }
}
const ClockContext = createContext(initialValue);

export const ClockContextProviderWrapper = children => {

    const initDate = new Date();

    const [hours, setHours] = useState(initDate.getHours());
    const [minutes, setMinutes] = useState(initDate.getMinutes());
    const [seconds, setSeconds] = useState(initDate.getSeconds());

    return <ClockContext.Provider value={{ hours, minutes, seconds, setHours, setMinutes, setSeconds }}  {...children} />
}
export const useClockContext = () => {
    const context = useContext(ClockContext);
    if (!context) {
        throw new Error("Clock Context isn't valid put a provider");
    }
    return context;
}