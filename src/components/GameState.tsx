interface IProps {
  playerName: string;
  currentScore: number;
  bestScore: number;
  gameOver: boolean;
  gameState: number;
}

export const GameState = ({ playerName, currentScore, bestScore, gameOver }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Memory Game</h2>
      <div className="bg-gray-200 p-4 rounded mb-4 w-full text-center">
        <p className="text-lg">
          Player: <span className="font-bold">{playerName}</span>
        </p>
        <p className="text-lg">
          Current Score: <span className="font-bold">{currentScore}</span>
        </p>
        <p className="text-lg">
          Best Score: <span className="font-bold">{bestScore}</span>
        </p>
      </div>
      {gameOver && (
        <div className="bg-red-200 p-4 rounded mb-4 w-full text-center">
          <p className="text-lg">Game Over! Click 'Start Game' to play again.</p>
        </div>
      )}
    </div>
  );
};
