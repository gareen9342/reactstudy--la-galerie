import React, { useEffect } from "react";
import "./Clock.css";
import { useClockContext } from '../../context/ClockContext';

const Clock = () => {
  // 1. clock context 를 만드세요
  // 현재 시간, 분, 초 필요.
  const {
    hours, minutes, seconds, setHours, setMinutes, setSeconds
  } = useClockContext();

  // 2. 1초 마다 시간이 갱신되게 하고, 시계에 렌더하세요
  // + 15 시 -> 1 5 로 표기
  // + 5 시 -> 0 5 로 표기
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((seconds + 1) % 60);
      if (seconds === 59) {
        setMinutes((minutes + 1) % 60);
      }
      if (seconds === 59 && minutes === 59) {
        setHours((hours + 1) % 24);
      }
    }, 1000)
    return () => clearInterval(id);
  }, [hours, minutes, seconds])

  // 3. hour, divider, minute, divider, second 순으로 표기
  //   필요한 스타일은 정의 되어 있음.

  return (
    <div className="Gallery__Clock">
      <span className="Gallery__clock__card">
        <span className="Gallery__clock__digit">
          {hours / 10 ? Math.floor(hours / 10) : 0}
        </span>
        <span className="Gallery__clock__digit">
          {`${hours % 10}`}
        </span>
      </span>
      <span className="Gallery__Clock__divider"> : </span>
      <span className="Gallery__clock__card">
        <span className="Gallery__clock__digit">
          {minutes / 10 ? Math.floor(minutes / 10) : 0}
        </span>
        <span className="Gallery__clock__digit">
          {`${minutes % 10}`}
        </span>
      </span>
      <span className="Gallery__Clock__divider"> : </span>
      <span className="Gallery__clock__card">
        <span className="Gallery__clock__digit">
          {seconds / 10 ? Math.floor(seconds / 10) : 0}
        </span>
        <span className="Gallery__clock__digit">
          {`${seconds % 10}`}
        </span>
      </span>
    </div>
  );
};

export default Clock;
