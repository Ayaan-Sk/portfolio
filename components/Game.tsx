"use client";
import { montserrat_alternates } from "@/lib/fonts";
import clsx from "clsx";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const GameState = createContext(null);

function Game() {
  const initializeState = () => {
    return {
      playersMoves:
        JSON.parse(localStorage.getItem("moves")) ||
        Array.from({ length: 9 }).fill(null),
      moveCount: Number(localStorage.getItem("moveCount")) || 0,
      playerTurn: localStorage.getItem("playerTurn") || "X",
      gameOver: JSON.parse(localStorage.getItem("gameOver")) || false,
      winner: JSON.parse(localStorage.getItem("winner")) || null,
      scores: JSON.parse(localStorage.getItem("scores")) || { X: 0, O: 0 },
    };
  };

  const [playerName, setPlayerName] = useState(
    localStorage.getItem("playerName") || "Guest"
  );
  const { playersMoves, moveCount, playerTurn, gameOver, winner, scores } =
    initializeState();

  const [playersMovesState, setPlayersMoves] = useState(playersMoves);
  const [moveCountState, setMoveCount] = useState(moveCount);
  const [playerTurnState, setPlayerTurn] = useState(playerTurn);
  const [gameOverState, setGameOver] = useState(gameOver);
  const [winnerState, setWinner] = useState(winner);
  const [scoresState, setScores] = useState(scores);
  const [winningCombination, setWinningCombination] = useState(null);

  const winningCombinations = useMemo(
    () => [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    []
  );

  const computeWinner = (player) => {
    if (gameOverState) return;

    const winner = winningCombinations.find((combination) =>
      combination.every((index) => playersMovesState[index] === player)
    );

    if (winner) {
      setGameOver(true);
      setWinningCombination(winner);
      setWinner(player);
      setScores((prev) => ({ ...prev, [player]: prev[player] + 1 }));
    } else if (moveCountState === 9) {
      setGameOver(true);
      setWinner("TIE");
    }
  };

  useEffect(() => {
    localStorage.setItem("gameOver", JSON.stringify(gameOverState));
    localStorage.setItem("scores", JSON.stringify(scoresState));
    localStorage.setItem("winner", JSON.stringify(winnerState));
    localStorage.setItem("moves", JSON.stringify(playersMovesState));
    localStorage.setItem("PlayerTurn", playerTurnState);
    localStorage.setItem("moveCount", moveCountState.toString());

    if (moveCountState >= 5) {
      const player = playerTurnState == "X" ? "O" : "X";
      computeWinner(player);
    }
  }, [
    gameOverState,
    scoresState,
    winnerState,
    playersMovesState,
    playerTurnState,
    moveCountState,
  ]);

  function startGame() {
    if (localStorage.getItem("playerName")) return;

    let playerName = prompt(
      "Enter your preferred player name, or cancel to use default -> Guest"
    );
    if (playerName) {
      setPlayerName(playerName);
      localStorage.setItem("playerName", playerName);
    } else {
      localStorage.setItem("playerName", "Guest");
    }
  }

  function checkOutcome(board: any[]) {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every((cell) => cell !== null)) {
      return "TIE";
    }
    return null;
  }

  const minimax = (board: any[], depth: number, isMaximizing: boolean) => {
    const scores = { X: -1, O: 1, TIE: 0 };
    const winner = checkOutcome(board);
    if (winner !== null) {
      return scores[winner];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          let score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          let score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const bestMove = () => {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < playersMovesState.length; i++) {
      if (playersMovesState[i] === null) {
        playersMovesState[i] = "O";
        let score = minimax(playersMovesState, 0, false);
        playersMovesState[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const gameOverClass = gameOverState && "opacity-0";

  return (
    <>
      <div
        className="w-[300px] aspect-square border border-[#61cc9c]/[.2] rounded-md mx-auto overflow-hidden"
        onClick={startGame}
      >
        <GameState.Provider
          value={{
            playerTurnState,
            setPlayerTurn,
            playersMovesState,
            setPlayersMoves,
            setMoveCount,
            computeWinner,
            gameOverState,
            setGameOver,
            winnerState,
            winningCombination,
            setWinningCombination,
            scoresState,
            bestMove,
          }}
        >
          <Board />
        </GameState.Provider>
      </div>

      <div
        className={`${gameOverClass} w-full mt-2 flex flex-col items-center text-base transition-opacity`}
      >
        <span>
          {playerTurnState == "X" ? "🔥It's Your turn" : "🤔Thinking..."}
        </span>
        <div
          className={`${montserrat_alternates.className} w-full flex justify-between`}
        >
          <span>
            🧠{playerName} {"{"} X {"}"}: {scoresState.X || "_"}
          </span>
          <span>
            🤖 {"{"} O {"}"}: {scoresState.O || "_"}
          </span>
        </div>
      </div>
    </>
  );
}

export default Game;

function Board() {
  const {
    playerTurnState,
    gameOverState,
    setGameOver,
    winnerState,
    setPlayerTurn,
    setPlayersMoves,
    setMoveCount,
    scoresState,
    setWinningCombination,
    bestMove,
  }: {
    playerTurnState: string;
    gameOverState: boolean;
    setGameOver: (arg0: boolean) => void;
    winnerState: string | null;
    setPlayerTurn: (arg0: string) => void;
    setPlayersMoves: (arg0: any) => void;
    setMoveCount: (arg0: any) => number;
    scoresState: { X: number; O: number };
    setWinningCombination: any;
    bestMove: () => any;
  } = useContext(GameState);

  const resetBoard = () => {
    setGameOver(false);
    localStorage.removeItem("PlayerTurn");
    localStorage.removeItem("moves");
    setPlayerTurn("X");
    setPlayersMoves(Array.from({ length: 9 }).fill(null));
    setMoveCount(0);
    setWinningCombination(null);
  };

  useEffect(() => {
    if (playerTurnState === "O" && !gameOverState) {
      setTimeout(() => {
        const aiMove = bestMove();

        setPlayersMoves((prev) => {
          const moves = [...prev];
          moves[aiMove] = "O";
          return moves;
        });

        setMoveCount((prev: number) => prev + 1);

        if (!gameOverState) {
          setPlayerTurn("X");
        }
      }, 2500);
    }
  }, [playerTurnState]);

  const gameOverClass =
    gameOverState &&
    "opacity-100 pointer-events-auto transition-[1s] delay-1000";

  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <div
        className={`opacity-0 pointer-events-none absolute w-full h-full bg-black/[0.9] z-10 flex flex-col items-center justify-center cursor-default ${gameOverClass}`}
      >
        <span className="mt-8">Game Over!</span>
        {winnerState == "X" || winnerState == "O" ? (
          winnerState == "X" ? (
            <span>You won! 😃🥳</span>
          ) : (
            <span className={`text-lg mt-auto`}>
              🤖 <b className="text-[#61cc9c]">{winnerState}</b> wins!
            </span>
          )
        ) : (
          <b className="text-[#61cc9c] mt-auto">TIE!</b>
        )}

        <button
          onClick={resetBoard}
          className="mt-4 bg-[#61cc9c] px-6 py-2 rounded-md"
        >
          <span className="text-black font-medium active:scale-75 transition-transform">
            Play Again
          </span>
        </button>

        <div className="mt-auto mb-12 flex flex-col gap-2 items-center">
          <span>
            Guest{"{"}X{"}"}: {scoresState.X}
            <span className="text-lg mx-4">vs</span> ca.io{"{"}O{"}"}:{" "}
            {scoresState.O}
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
    playerTurnState,
    setPlayerTurn,
    playersMovesState,
    setPlayersMoves,
    setMoveCount,
    gameOverState,
    winningCombination,
  } = useContext(GameState);

  const [winningCombinationClassName, setWinningCombinationClassName] =
    useState("");

  function handleMove() {
    if (playersMovesState[id] || gameOverState) return;

    setPlayersMoves((prev) => {
      const moves = [...prev];
      moves[id] = "X";
      return moves;
    });

    setMoveCount((prev: number) => prev + 1);

    if (!gameOverState) {
      setPlayerTurn("O");
    }
  }

  useEffect(() => {
    if (winningCombination && id !== undefined) {
      let isWinningCell = false;

      for (let index = 0; index < winningCombination.length; index++) {
        if (id === winningCombination[index]) {
          isWinningCell = true;
          break;
        }
      }

      if (isWinningCell) {
        setWinningCombinationClassName(
          "bg-[#61cc9c] text-black font-bold border-2 border-black"
        );
      } else {
        setWinningCombinationClassName("");
      }
    } else {
      setWinningCombinationClassName("");
    }
  }, [winningCombination, id, gameOverState]);

  return (
    <div
      className={clsx(
        `${winningCombinationClassName} size-[100px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors rounded-lg`,
        playerTurnState == "O" && "pointer-events-none cursor-not-allowed"
      )}
      onClick={handleMove}
    >
      <span className={`text-4xl`}>{playersMovesState[id]}</span>
    </div>
  );
}
