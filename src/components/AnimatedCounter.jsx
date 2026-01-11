import React, { useState, useEffect } from "react";
import { counterItems } from "../constants";

function AnimatedCounter() {
  const [displayedValues, setDisplayedValues] = useState(
    counterItems.map(() => "")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= counterItems.length) return;

    const currentItem = counterItems[currentIndex];
    const currentValue = currentItem.value;

    if (charIndex < currentValue.length) {
      const timer = setTimeout(() => {
        setDisplayedValues(prev => {
          const newValues = [...prev];
          newValues[currentIndex] = currentValue.substring(0, charIndex + 1);
          return newValues;
        });
        setCharIndex(charIndex + 1);
      }, 100); // Geschwindigkeit des Typing-Effekts

      return () => clearTimeout(timer);
    } else {
      // Nächstes Item starten
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setCharIndex(0);
      }, 500); // Pause zwischen den Items
    }
  }, [currentIndex, charIndex]);

  // Rainbow-Farben für den Text
  const rainbowColors = [
    '#ff0000', // Rot
    '#ff8000', // Orange
    '#ffff00', // Gelb
    '#00ff00', // Grün
    '#0080ff', // Blau
    '#8000ff', // Violett
    '#ff0080'  // Pink
  ];

  // Funktion um Rainbow-Text zu rendern
  const renderRainbowText = (text, index) => {
    if (!text) return null;
    
    return text.split('').map((char, charIndex) => (
      <span
        key={charIndex}
        style={{
          color: rainbowColors[(charIndex + index) % rainbowColors.length],
          animationDelay: `${charIndex * 0.1}s`
        }}
        className="rainbow-char"
      >
        {char}
      </span>
    ));
  };

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <span className="typing-text">
                {renderRainbowText(displayedValues[index], index)}
                <span className="typing-cursor">|</span>
              </span>
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter;
