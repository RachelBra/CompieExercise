import "./App.css";
import { useEffect, useState } from "react";
import { LogIn } from "./components/LogIn";
import { GameState } from "./components/GameState";
import { LightBulbs } from "./components/LightBulbs";
import { Button } from "./components/ui/button";

const App = () => {
  const [playerName, setPlayerName] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [gameState, setGameState] = useState(-1);

  useEffect(() => {
    // setTimeout(() => {}, 1000);
    sequence.forEach((item, index) => {
      setTimeout(() => {
        if (index > 0 && item === sequence[index - 1]) {
          // In case of duplication - a short break
          setGameState(-1);
          setTimeout(() => {
            setGameState(item);
          }, 250);
        } else {
          setGameState(item);
        }
      }, (index + 1) * 1000);
    });
    setGameState(-1);
    setTimeout(() => {
      setGameState(-1);
    }, (sequence.length + 1) * 1000);
  }, [sequence]);
  useEffect(() => {
    if (bestScore < currentScore) setBestScore(currentScore);
  }, [gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setCurrentScore(0);
    setSequence([Math.floor(Math.random() * 6)]);
    setGameState(-1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        {!gameStarted ? (
          <LogIn playerName={playerName} setPlayerName={setPlayerName} startGame={startGame} />
        ) : (
          <div>
            <GameState playerName={playerName} currentScore={currentScore} bestScore={bestScore} gameOver={gameOver} gameState={gameState} />
            {gameOver ? (
              <Button className="h-[35px] w-[100px]" onClick={startGame}>
                restart game
              </Button>
            ) : (
              <LightBulbs gameState={gameState} setGameOver={setGameOver} sequence={sequence} setSequence={setSequence} gameOver={gameOver} setCurrentScore={setCurrentScore} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
