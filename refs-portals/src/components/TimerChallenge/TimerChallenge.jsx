import React, { useRef, useState } from "react";
import ResultModal from "../ResultModal/ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const dialogRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
  }

  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result={"lost"} />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
