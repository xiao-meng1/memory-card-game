import React, { useState } from 'react';
import Card from './components/Card';
import styles from './styles/app.module.css';
import marioImg from './images/500px-Mario_SSBU.webp';
import donkeyKongImg from './images/500px-Donkey_Kong_SSBU.webp';
import linkImg from './images/500px-Link_SSBU.webp';
import samusImg from './images/500px-Samus_SSBU.webp';
import yoshiImg from './images/500px-Yoshi_SSBU.webp';
import kirbyImg from './images/500px-Kirby_SSBU.webp';
import foxImg from './images/500px-Fox_SSBU.webp';
import pikachuImg from './images/500px-Pikachu_SSBU.webp';
import luigiImg from './images/500px-Luigi_SSBU.webp';
import nessImg from './images/500px-Ness_SSBU.webp';
import captainFalconImg from './images/500px-Captain_Falcon_SSBU.webp';
import jigglypuffImg from './images/500px-Jigglypuff_SSBU.webp';

const cardItems = [
  {
    name: 'Mario',
    URL: marioImg,
  },
  {
    name: 'Donkey Kong',
    URL: donkeyKongImg,
  },
  {
    name: 'Link',
    URL: linkImg,
  },
  {
    name: 'Samus',
    URL: samusImg,
  },
  {
    name: 'Yoshi',
    URL: yoshiImg,
  },
  {
    name: 'Kirby',
    URL: kirbyImg,
  },
  {
    name: 'Fox',
    URL: foxImg,
  },
  {
    name: 'Pikachu',
    URL: pikachuImg,
  },
  {
    name: 'Luigi',
    URL: luigiImg,
  },
  {
    name: 'Ness',
    URL: nessImg,
  },
  {
    name: 'Captain Falcon',
    URL: captainFalconImg,
  },
  {
    name: 'Jigglypuff',
    URL: jigglypuffImg,
  },
];

const generateRandomOrder = () => {
  const remainingNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const randomOrder = [];

  for (let i = 0; i < 12; i += 1) {
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    randomOrder.push(remainingNumbers.splice(randomIndex, 1));
  }

  return randomOrder;
};

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedNames, setClickedNames] = useState([]);
  const [cardsOrder, setCardsOrder] = useState(generateRandomOrder());

  const onCardClick = (e) => {
    const clickedName = e.currentTarget.dataset.name;

    setCardsOrder(generateRandomOrder());

    if (clickedNames.includes(clickedName)) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }

      setCurrentScore(0);
      setClickedNames([]);

      return;
    }

    setCurrentScore(currentScore + 1);
    setClickedNames([...clickedNames, clickedName]);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>Memory Card Game</h1>
          <p className={styles.p}>
            Instructions: Click on cards but don&apos;t repeat yourself!
          </p>
        </div>
        <div className={styles.right}>
          <p className={styles.p}>High Score: {highScore}</p>
          <p className={styles.p}>Current Score: {currentScore}</p>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          {cardsOrder.map((indexItem) => (
            <Card
              key={cardItems[indexItem].name}
              name={cardItems[indexItem].name}
              imgURL={cardItems[indexItem].URL}
              clickEvent={onCardClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
