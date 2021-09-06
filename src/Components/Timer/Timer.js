import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    //TODO: Set the countdown date here
    const countdownDate = new Date("Sept 10, 2021 20:00:00").getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = countdownDate - currentTime;

      const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setDays((daysLeft > 9 ? "" : "0") + daysLeft);
      setHours((hoursLeft > 9 ? "" : "0") + hoursLeft);
      setMinutes((minutesLeft > 9 ? "" : "0") + minutesLeft);
      setSeconds((secondsLeft > 9 ? "" : "0") + secondsLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);
  }, []);

  return (
    <div className="timer-container white">
      <div className="timer-item">
        <div className="timer-title">Days</div>
        <div className="timer-subtitle">{days}</div>
      </div>
      <div className="timer-item">
        <div className="timer-title">Hours</div>
        <div className="timer-subtitle">{hours}</div>
      </div>
      <div className="timer-item">
        <div className="timer-title">Minutes</div>
        <div className="timer-subtitle">{minutes}</div>
      </div>
      <div className="timer-item">
        <div className="timer-title">Seconds</div>
        <div className="timer-subtitle">{seconds}</div>
      </div>
    </div>
  );
}

export default Timer;
