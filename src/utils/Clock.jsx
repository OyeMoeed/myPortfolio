// src/Clock.js
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    let formattedHours = hours % 12;
    if (formattedHours === 0) {
      formattedHours = 12; // 12 AM or 12 PM
    }

    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  return (
    <div className="px-2 text-[#f1f1f1] border border-[#383838] py-2 rounded-2xl">
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Clock;
