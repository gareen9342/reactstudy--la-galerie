import "./Clock.css";

import React, { useState, useEffect } from "react";

const Clock = () => {
  const initDate = new Date();
  const [hour, setHour] = useState(initDate.getHours());
  const [minutes, setMinutes] = useState(initDate.getMinutes());
  const [seconds, setSeconds] = useState(initDate.getSeconds());

  useEffect(() => {

    const id = setInterval(() => {
      setSeconds((seconds + 1) % 60);
      if (seconds === 59) {
        setMinutes((minutes + 1) % 60);
      }
      if (seconds === 59 && minutes === 59) {
        setHour((hour + 1) % 24);
      }

    }, 1000);

    return () => {
      clearInterval(id);
    }

  }, [hour, minutes, seconds])

  return <div className="Gallery__Clock">{`${hour}시 ${minutes}분 ${seconds}초`}</div>;
};

export default Clock;
