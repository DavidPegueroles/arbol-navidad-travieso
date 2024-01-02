import React, { useState } from "react";
import "./TraviesoChristmasTree.css";

interface TreePositionInterface {
  left: number;
  top: number;
}

const TraviesoChristmasTree: React.FC = () => {
  const [hoverCount, setHoverCount] = useState<number>(0);
  const [position, setPosition] = useState<TreePositionInterface>({
    left: 90,
    top: 90,
  });

  const moveTree = () => {
    const newPosition = {
      left: Math.random() * 100,
      top: Math.random() * 100,
    };
    setPosition(newPosition);
  };

  const handleMouseEnter = () => {
    if (hoverCount < 9) {
      setHoverCount(hoverCount + 1);
      moveTree();
    } else if (hoverCount === 9) {
      setHoverCount(hoverCount + 1);
    }
  };

  const handleClick = () => {
    if (hoverCount >= 10) {
      window.location.href = "https://www.youtube.com/watch?v=ALj9FPvyFUU";
    }
  };

  return (
    <div
      id="travieso"
      className="travieso"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        position: "fixed",
        left: `${position.left}%`,
        top: `${position.top}%`,
      }}
    >
      <div className="travieso__tree">
        <div className="travieso__tree-details"></div>
      </div>
      <div className="travieso__lights">
        <div className="travieso__lights-row-one"></div>
        <div className="travieso__lights-row-two"></div>
      </div>
      <div className="travieso__balls"></div>
      <div className="travieso__star"></div>
      <div className="travieso__shadow"></div>
    </div>
  );
};

export default TraviesoChristmasTree;
