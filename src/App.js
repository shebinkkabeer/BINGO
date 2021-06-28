import React, { useState, useEffect, useRef } from "react";
import shuffle from "shuffle-array";
import GameBoard from "./components/GameBoard";
import Reward from "react-rewards";

const dialogs = [
  "Noices in the background",
  "Hello?",
  "I need to jump in another call",
  "Can anyone go on mute",
  "Could you please get closer to mic",
  "load Painful echo",
  "Next Slide Please",
  "Can we take this offline?",
  "Is _____ on the call?",
  "Could you share this slides afterwards?",
  "Can somebody grant presenter rights?",
  "Can you email that to everyone",
  "Sorry,I had problems in logging in",
  "Animal noices in the background",
  "sorry, I didn't found the conference id",
  "I was having connection issues",
  "I will have to get back to you",
  "who just joined",
  "Am I audible?",
  "Do you see my screen",
  "lets wait for _____",
  "sorry,I was on mute",
  "can you repeat please?",
  "You will send the minutes?",
];

const App = () => {
  const [board, setBoard] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [victory, setVictory] = useState(false);
  const [bingoSelector, setBingoSelector] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    initialize();
  }, []);

  // useEffect(() => {
  //   isWinner();
  //   // eslint-disable-next-line
  // }, [board]);

  const initialize = () => {
    let data = shuffle(dialogs);
    data = [...[...data].splice(0, 12), `BINGO 😎`, ...[...data].splice(12)];
    data = data.reduce(
      (data, value, index) => [
        ...data,
        { value, selected: index !== 12 ? false : true },
      ],
      []
    );
    setBoard(data);
    setBingoSelector(new Array(12).fill(false));
    setVictory(false);
    setGameWon(false);
  };

  const isWinner = () => {
    console.log(bingoSelector);
    if (!board.length) return;
    if (
      board[0].selected &&
      board[1].selected &&
      board[2].selected &&
      board[3].selected &&
      board[4].selected &&
      !bingoSelector[0]
    ) {
      bingoSelector[0] = true;

      setGameWon(true);

      ref.current.rewardMe();
      console.log(board[0].selected);
      console.log(bingoSelector[0]);
    }

    if (
      board[5].selected &&
      board[6].selected &&
      board[7].selected &&
      board[8].selected &&
      board[9].selected &&
      !bingoSelector[1]
    ) {
      bingoSelector[1] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[10].selected &&
      board[11].selected &&
      board[12].selected &&
      board[13].selected &&
      board[14].selected &&
      !bingoSelector[2]
    ) {
      bingoSelector[2] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[15].selected &&
      board[16].selected &&
      board[17].selected &&
      board[18].selected &&
      board[19].selected &&
      !bingoSelector[3]
    ) {
      bingoSelector[3] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }

    if (
      board[20].selected &&
      board[21].selected &&
      board[22].selected &&
      board[23].selected &&
      board[24].selected &&
      !bingoSelector[4]
    ) {
      bingoSelector[4] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[0].selected &&
      board[5].selected &&
      board[10].selected &&
      board[15].selected &&
      board[20].selected &&
      !bingoSelector[5]
    ) {
      bingoSelector[5] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[1].selected &&
      board[6].selected &&
      board[11].selected &&
      board[16].selected &&
      board[21].selected &&
      !bingoSelector[6]
    ) {
      bingoSelector[6] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[2].selected &&
      board[7].selected &&
      board[12].selected &&
      board[17].selected &&
      board[22].selected &&
      !bingoSelector[7]
    ) {
      bingoSelector[7] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[3].selected &&
      board[8].selected &&
      board[13].selected &&
      board[18].selected &&
      board[23].selected &&
      !bingoSelector[8]
    ) {
      bingoSelector[8] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[4].selected &&
      board[9].selected &&
      board[14].selected &&
      board[19].selected &&
      board[24].selected &&
      !bingoSelector[9]
    ) {
      bingoSelector[9] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[0].selected &&
      board[6].selected &&
      board[12].selected &&
      board[18].selected &&
      board[24].selected &&
      !bingoSelector[10]
    ) {
      bingoSelector[10] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }
    if (
      board[4].selected &&
      board[8].selected &&
      board[12].selected &&
      board[16].selected &&
      board[20].selected &&
      !bingoSelector[11]
    ) {
      bingoSelector[11] = true;
      setGameWon(true);
      ref.current.rewardMe();
    }

    if (board.every((val) => val.selected === true)) {
      setVictory(true);
    }
    // else {
    //   setGameWon(false);
    // }
  };

  const selectCell = (index) => {
    // if (gameWon) return;
    let newBoard = [...board];
    newBoard[index].selected = index !== 12 ? !board[index].selected : true;
    setBoard(newBoard);
    isWinner();
  };

  return (
    <div className="container">
      <Reward
        ref={ref}
        type="emoji"
        lifetime={500}
        config={{
          spread: 150,
          emoji: ["💰", "💰", "👏", "💴", "👏", "💵", "💰", "💰"],
          colors: ["#000000", "#F25555", "#55D8F2", "#499DF2", "#F2CB30"],
        }}
      ></Reward>
      {victory ? (
        <h1 className="header">VICTORY 🥳🥳🥳🥳 </h1>
      ) : (
        <h1 className="header">Let's BINGO</h1>
      )}
      <GameBoard data={board} selectCell={selectCell} />
      {gameWon && (
        <button className="reload" onClick={initialize}>
          Reload Game 🥳
        </button>
      )}
      <span className="footer">
        Made By Shebin |{" "}
        <a href="https://github.com/shebinkkabeer/bingo">Source Code</a>
      </span>
    </div>
  );
};

export default App;
