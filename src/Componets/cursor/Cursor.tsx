import React, { useState, useEffect } from "react";
import "./cursor.css";
import { emojiCursor } from "cursor-effects";
new emojiCursor({ emoji: ["👋", "👍", "🔥"] });

function Cursor() {
  const [cursorStyles, setCursorStyles] = useState({
    top: "0px",
    left: "0px",
    opacity: 0,
    scale: 1,
  });

  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  let timeout: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newCursorStyles = {
        top: `${e.clientY - 15}px`,
        left: `${e.clientX - 15}px`,
        opacity: 1,
        scale: cursorStyles.scale,
      };
      setCursorStyles(newCursorStyles);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setCursorStyles((prevStyles) => ({
          ...prevStyles,
          opacity: 0,
        }));
      }, 1000);
    };

    const handleBackgroundColor = () => {
      const bgColor = window.getComputedStyle(document.body).backgroundColor;
      setIsWhiteBackground(bgColor === "rgb(255, 255, 255)");
    };

    document.addEventListener("mousemove", handleMouseMove);
    handleBackgroundColor();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorStyles.scale]);

  const handleMouseDown = () => {
    setCursorStyles((prevStyles) => ({
      ...prevStyles,
      scale: 1.3,
    }));
  };

  const handleMouseUp = () => {
    setCursorStyles((prevStyles) => ({
      ...prevStyles,
      scale: 1,
    }));
  };

  return (
    <div
      className={`cursor ${isWhiteBackground ? "white-bg" : ""}`}
      style={{
        top: cursorStyles.top,
        left: cursorStyles.left,
        transform: `scale(${cursorStyles.scale})`,
        opacity: cursorStyles.opacity,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
}

export default Cursor;
