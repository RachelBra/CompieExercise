import { colors } from "@/consts/elementConsts";
import React from "react";
import { useState } from "react";

interface IProps {
  gameState: number;
  gameOver: boolean;
  setGameOver: (val: boolean) => void;
  sequence: number[];
  setSequence: (val: number[]) => void;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
}
export function LightBulbs({ gameState, setGameOver, sequence, setSequence, setCurrentScore }: IProps) {
  const [clickState, setClickState] = useState(-1); //which button is clicked
  const [clickIndex, setClickIndex] = useState(0); //which number click is it
  const [showThumbsUp, setShowThumbsUp] = useState(false);

  const clickLightBulb = (index: number) => {
    setClickState(index);
    if (sequence[clickIndex] == index) {
      setCurrentScore((prevCurrentScore: number) => prevCurrentScore + 10);
    } else {
      setGameOver(true);
    }
    if (clickIndex == sequence.length - 1) {
      //if succeeded show it and enter to next level
      setShowThumbsUp(true);
      setTimeout(() => {
        setShowThumbsUp(false);
      }, 500);
      setClickIndex(0);
      addItemToList();
    } else setClickIndex((prevIndex) => prevIndex + 1);
  };

  const addItemToList = () => {
    const newItem = Math.floor(Math.random() * 6);
    setSequence([...sequence, newItem]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className="rounded-full w-24 h-24 m-4 cursor-pointer border-2 border-gray-300 " //add hover garey
          style={{
            backgroundColor: gameState === index || clickState === index ? color : "#ffffff",
            pointerEvents: gameState != -1 ? "none" : "auto",
          }}
          onMouseDown={() => clickLightBulb(index)}
          onMouseLeave={() => setClickState(-1)}
        ></div>
      ))}
      {showThumbsUp && ( //if succeeded
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "100px", zIndex: 1000 }}>👍🏽</div>
      )}
    </div>
  );
}
