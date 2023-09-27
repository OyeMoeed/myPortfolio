import React, { useEffect, useState } from "react";

const SplashScreen = ({ onVanish }) => {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  // Use useEffect to increment the count every 100ms
  useEffect(() => {
    const timer = setInterval(incrementCount, 30);

    // Clear the timer when the count reaches 100
    if (count === 100) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [count]);

  // Calculate the width of the loader bar based on the count
  const loaderWidth = `${(count / 100) * 100}%`;

  // Hide the splash screen when count reaches 100
  const splashScreenStyle = count === 100 ? onVanish() : {};

  return (
    <div className="flex flex-col justify-center overflow-hidden h-screen font-all max-w-screen">
      <div className="text-white text-[3em] absolute top-4 right-4">
        {count}
      </div>
      <div className="flex flex-col items-center ">
        <div className=" flex h-screen max-w-screen items-center justify-center">
          <h1 className=" mb-4 w-[30em] text-center text-[#797979] text-[1em] lg:text-[1.5em] p-4 justify-center flex">
            An artist inspired to be a developer, and a developer inspired to be
            an artist
          </h1>
        </div>
        <div
          className=" absolute lg:h-[2em] h-[1em] bottom-[5em] "
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <div
            className="h-full w-screen bg-[#f1f1f1]"
            style={{ width: loaderWidth }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
