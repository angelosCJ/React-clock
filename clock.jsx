import React, { useState, useEffect } from "react";
import './App.css';

export default function DigitalClock() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [ap, setAp] = useState("AM");

  useEffect(() => {
    const displayTime = () => {
      const dateTime = new Date();
      setHours(dateTime.getHours());
      setMinutes(dateTime.getMinutes());
      setSeconds(dateTime.getSeconds());

      if (hours >= 12) {
        setAp('AM');
      } else {
        setAp('PM');
      }

   if (hours>12) {
    setHours(dateTime.getHours() - 12);
   }

    };

    const intervalId = setInterval(displayTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Face">
      <div className="panel">
        <div className="hours">{hours} :</div>
        <div className="minutes">{minutes} :</div>
        <div className="seconds">{seconds} :</div>
        <div className="ap">{ap}</div>
      </div>
    </div>
  );
}
