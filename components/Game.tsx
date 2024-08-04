"use client";
import { montserrat_alternates } from "@/lib/fonts";
import { createContext, useContext, useEffect, useState } from "react";
const GameState = createContext(null);
function Game() {
  const [moveCount, setMoveCount] = useState(0);
  const [PlayerTurn, setPlayerTurn] = useState("X");
  const [playersMoves, setPlayersMoves] = useState(
    Array.from({ length: 9 }).fill(null)
  );
  const [gameOver, setGameOver] = useState(false);
  const [Winner, setWinner] = useState(null);
  const [WinningCombination, setWinningCombination] = useState(null);
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
  });

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function computeWinner(player: string) {
    if (gameOver) {
      return;
    }

    let winner = winningCombinations.find((moves) => {
      return moves.every((move) => playersMoves[move] == player);
    });

    if (winner) {
      setGameOver(true);
      setWinningCombination(winner);
      setWinner(player);

      setScores((prev: { X: number; O: number }) => ({
        ...prev,
        [player]: prev[player] + 1,
      }));

      return;
    }

    if (moveCount == 9 && !winner) {
      setGameOver(true);
      setWinner("TIE");
    }
  }

  useEffect(() => {
    setMoveCount(Number(localStorage.getItem("moveCount")) || 0);
    setPlayerTurn(localStorage.getItem("PlayerTurn") || "X");
    setPlayersMoves(
      JSON.parse(localStorage.getItem("moves")) ||
        Array.from({ length: 9 }).fill(null)
    );
    setGameOver(JSON.parse(localStorage.getItem("gameOver")) || false);
    setWinner(JSON.parse(localStorage.getItem("winner")) || null);
    setScores(
      JSON.parse(localStorage.getItem("scores")) || {
        X: 0,
        O: 0,
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("gameOver", JSON.stringify(gameOver));
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("winner", JSON.stringify(Winner));
  }, [gameOver]);

  useEffect(() => {
    localStorage.setItem("moves", JSON.stringify(playersMoves));
    localStorage.setItem("PlayerTurn", PlayerTurn);
    localStorage.setItem("moveCount", moveCount.toString());

    if (moveCount >= 5) {
      const player = PlayerTurn == "X" ? "O" : "X";
      computeWinner(player);
    }
  }, [moveCount]);

  const gameOverClass = gameOver && "opacity-0";

  return (
    <>
      <div className="w-[300px] aspect-square border border-[#61cc9c]/[.2] rounded-md mx-auto overflow-hidden">
        <GameState.Provider
          value={{
            PlayerTurn,
            setPlayerTurn,
            playersMoves,
            setPlayersMoves,
            setMoveCount,
            computeWinner,
            gameOver,
            setGameOver,
            Winner,
            WinningCombination,
            scores,
          }}
        >
          <Board />
        </GameState.Provider>
      </div>

      <div
        className={`${gameOverClass} w-full mt-2 flex flex-col items-center text-base`}
      >
        <span>
          Player turn ~&nbsp;<b className="text-[#61cc9c]">{PlayerTurn}</b>
        </span>
        <div
          className={`${montserrat_alternates.className} w-full flex justify-between`}
        >
          <span>user X: {scores.X || "_"}</span>
          <span>ca: {scores.O || "_"}</span>
        </div>
      </div>
    </>
  );
}

export default Game;

function Board() {
  const {
    gameOver,
    setGameOver,
    Winner,
    setPlayerTurn,
    setPlayersMoves,
    setMoveCount,
    scores,
  }: {
    gameOver: boolean;
    setGameOver: (arg0: boolean) => void;
    Winner: string | null;
    setPlayerTurn: (arg0: string) => void;
    setPlayersMoves: (arg0: any[]) => void;
    setMoveCount: (arg0: number) => void;
    scores: { X: number; O: number };
  } = useContext(GameState);

  const resetBoard = () => {
    setGameOver(false);
    localStorage.removeItem("PlayerTurn");
    localStorage.removeItem("moves");
    setPlayerTurn("X");
    setPlayersMoves(Array.from({ length: 9 }).fill(null));
    setMoveCount(0);
  };

  const gameOverClass =
    gameOver && "opacity-100 pointer-events-auto transition-[1s] delay-1000";

  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <div
        className={`opacity-0 pointer-events-none absolute w-full h-full bg-black/[0.9] z-10 flex flex-col items-center justify-center cursor-default ${gameOverClass}`}
      >
        <span className="mt-8">Game Over!</span>
        {Winner == "X" || Winner == "O" ? (
          <span className={`text-lg mt-auto`}>
            Player <b className="text-[#61cc9c]">{Winner}</b> wins!
          </span>
        ) : (
          <b className="text-[#61cc9c] mt-auto">TIE!</b>
        )}

        <button
          onClick={resetBoard}
          className="mt-4 bg-[#61cc9c] px-6 py-2 rounded-md"
        >
          <span className="text-black font-medium">Play Again</span>
        </button>
        <div className="mt-auto mb-12 flex flex-col gap-2 items-center">
          <span>
            You{"{"}X{"}"}: {scores.X}
            <span className="text-lg mx-4">vs</span> Me{"{"}O{"}"}: {scores.O}
          </span>
        </div>
      </div>

      <div className="flex">
        <Square id={0} />
        <Square id={1} />
        <Square id={2} />
      </div>
      <>
        <hr
          className="pointer-events-none absolute left-[100px] translate-x-[-50%] h-[90%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute left-[200px] translate-x-[-50%] h-[90%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[100px] translate-y-[-50%] w-[90%] border-none h-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #61cc9c, transparent)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[200px] translate-y-[-50%] w-[90%] border-none h-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #61cc9c, transparent)",
          }}
        />
      </>
      <div className="flex">
        <Square id={3} />
        <Square id={4} />
        <Square id={5} />
      </div>
      <div className="flex">
        <Square id={6} />
        <Square id={7} />
        <Square id={8} />
      </div>
    </div>
  );
}

function Square({ id }: { id: number }) {
  const {
    PlayerTurn,
    setPlayerTurn,
    playersMoves,
    setPlayersMoves,
    setMoveCount,
    gameOver,
    WinningCombination,
  } = useContext(GameState);

  const [WinningCombinationClassName, setWinningCombinationClassName] =
    useState("");

  function MakeMove() {
    if (playersMoves[id] || gameOver) {
      return;
    }
    setPlayersMoves((prev) => {
      const moves = [...prev];
      moves[id] = PlayerTurn;
      return moves;
    });
    setMoveCount((prev: number) => prev + 1);

    if (!gameOver) {
      setPlayerTurn(PlayerTurn == "X" ? "O" : "X");
    }
  }

  // useEffect(() => {
  //   for (let index = 0; index < WinningCombination?.length; index++) {
  //     if (id == WinningCombination[index]) {
  //       setWinningCombinationClassName(
  //         "bg-[#61cc9c] text-black font-bold border-2 border-black"
  //       );
  //     }
  //   }
  //   if (!gameOver) {
  //     setWinningCombinationClassName("");
  //   }
  // }, [WinningCombination]);

  return (
    <div
      className={`${WinningCombinationClassName} size-[100px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors rounded-lg`}
      onClick={MakeMove}
    >
      <span className={`text-4xl`}>{playersMoves[id]}</span>
    </div>
  );
}
