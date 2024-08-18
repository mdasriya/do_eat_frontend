import React, { useState, useEffect } from 'react';

const AppPromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before starting the fade-in (0.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`bg-yellow-400 p-6 text-center absolute z-[99] top-[40%] left-[0%] border-4 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-2xl font-bold">Our App is Now Live on the Play Store!</h2>
      <p className="mt-2">Download now for a better experience</p>
      <a
        href="https://play.google.com/store/apps/details?id=com.codedeals.doeats"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-lg transition-all hover:bg-red-700"
      >
        Download Now
      </a>
      <button
        className="absolute top-2 right-2 text-black hover:text-gray-700"
        onClick={closeBanner}
      >
        &times;
      </button>
    </div>
  );
};

export default AppPromoBanner;
