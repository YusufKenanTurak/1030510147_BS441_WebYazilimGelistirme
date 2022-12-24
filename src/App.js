import React, { useState } from 'react';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Taş', 'Kağıt', 'Makas'];

  const play = choice => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('Berabere.');
    } else if (
      (choice === 'Taş' && computerChoice === 'Makas') ||
      (choice === 'Kağıt' && computerChoice === 'Taş') ||
      (choice === 'Makas' && computerChoice === 'Kağıt')
    ) {
      setResult('Kazandın.');
    } else {
      setResult('Kaybettin.');
    }
  };

  return (
    <div>
      <h1>Taş, Kağıt, Makas</h1>
      <div>
        <button onClick={() => play('Taş')}><img src="https://i.hizliresim.com/b3phf3f.png" border="0" /></button>
        <button onClick={() => play('Kağıt')}><img src="https://i.hizliresim.com/t8a8a7f.png" border="0" /></button>
        <button onClick={() => play('Makas')}><img src="https://i.hizliresim.com/ckk0pmw.png" border="0" /></button>
      </div>
      {playerChoice && (
        <div>
          <p>Sen {playerChoice} seçtin.</p>
          <p>Bilgisayar {computerChoice} seçti.</p>
          <p>Sonuç: {result}</p>
        </div>
      )}
    </div>
  );
  //Burada resimleri kendim çizip projenin çevrimiçi bağlantılı olması adına hızlıresim sitesinden çekmesi için upload ettim. İyi çalışmalar.
};

export default Game;
