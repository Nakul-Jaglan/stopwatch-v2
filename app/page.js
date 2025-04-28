'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  let [hour, minute, second, millisecond] = [0,0,0,0];

  const handlereset = () => {
    setIsRunning(false);
    setTime(0);
  };
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }
  , [isRunning, time]);

  hour = Math.floor((time / (1000 * 60 * 60)) % 24);
  minute = Math.floor((time / (1000 * 60)) % 60);
  second = Math.floor((time / 1000) % 60);
  millisecond = Math.floor((time % 1000) / 10);
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  millisecond = millisecond < 10 ? '00' + millisecond : millisecond < 100 ? '0' + millisecond : millisecond;

  return (
    <>
      <main>
        <section className="title">
          <h1>Stopwatch</h1>
          <p>Simple Stopwatch made using React.js and Next.js</p>
        </section>

        <section className="stopwatch">
          <section className="stopwatch-display">
            <h1>{hour}:{minute}:{second}:{millisecond}</h1>
          </section>
          <section className="stopwatch-controls">
            <button className="btn start" onClick={handleStart}>Start</button>
            <button className="btn reset" onClick={handlereset}>Reset</button>
            <button className="btn stop" onClick={handleStop}>Stop</button>
          </section>
        </section>
      </main>
      <footer>
        <p className='footer-text'>Made with ❤️ by <a href="https://www.linkedin.com/in/nakuljaglan/" target="_blank">Nakul</a></p>
        <p className='footer-text'>Source code available on <a href="https://github.com/Nakul-Jaglan/stopwatch-v2" target="_blank">GitHub</a></p>
        <p className='footer-text'>Check out my other projects on <a href="https://my.newtonschool.co/user/jaat" target="_blank">My Profile</a></p>
      </footer>
    </>
  );
}
