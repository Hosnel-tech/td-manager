"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delayBetweenCycles?: number;
}

export default function Typewriter({
  text,
  speed = 80,
  delayBetweenCycles = 1000,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? speed / 2 : speed; // Effacement plus rapide

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Phase d'écriture
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        if (currentIndex === text.length) {
          // Pause à la fin de l'écriture
          setTimeout(() => setIsDeleting(true), delayBetweenCycles);
        }
      } else {
        // Phase d'effacement
        setDisplayedText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);

        if (currentIndex === 0) {
          // Pause au début avant de recommencer
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, speed, delayBetweenCycles]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse"></span>
    </span>
  );
}
