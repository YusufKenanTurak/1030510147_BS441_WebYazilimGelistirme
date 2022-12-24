import React, { useState } from 'react';

const Game = () => {
  const [oyuncuSecimi, oyuncuSeciminiAta] = useState(null);
  const [bilgisayarSecimi, bilgisayarSeciminiAta] = useState(null);
  const [sonuc, sonucuAyarla] = useState(null);

  const secenekler = ['Taş', 'Kağıt', 'Makas'];

  const play = choice => {
    const bilgisayarSecimi = secenekler[Math.floor(Math.random() * 3)];
    oyuncuSeciminiAta(choice);
    bilgisayarSeciminiAta(bilgisayarSecimi);

    if (choice === bilgisayarSecimi) {
      sonucuAyarla('Berabere.');
    } else if (
      (choice === 'Taş' && bilgisayarSecimi === 'Makas') 
    ) {
      sonucuAyarla('Kazandın.');
    } 
    else if (
      (choice === 'Kağıt' && bilgisayarSecimi === 'Taş') 
    ) {
      sonucuAyarla('Kazandın.');
    } 
    else if (
      (choice === 'Makas' && bilgisayarSecimi === 'Kağıt')
    ) {
      sonucuAyarla('Kazandın.');
    }          
    else {
      sonucuAyarla('Kaybettin.');
    }
  };

  return (
    <div>
      <h1>React ile Taş, Kağıt, Makas Oyunu</h1>
      <div>
        <p>Hoşgeldiniz.</p>
        <p>Başlamak için seçim yapmanız bekleniyor...</p>
        <button onClick={() => play('Taş')}><img src="https://i.hizliresim.com/b3phf3f.png" border="0" /></button>
        <button onClick={() => play('Kağıt')}><img src="https://i.hizliresim.com/t8a8a7f.png" border="0" /></button>
        <button onClick={() => play('Makas')}><img src="https://i.hizliresim.com/ckk0pmw.png" border="0" /></button>
      </div>
      {oyuncuSecimi && (
        <div>
          <p>{oyuncuSecimi} seçtin.</p>
          <p>Bilgisayar ise {bilgisayarSecimi} seçti.</p>
          <p>Sonuç: {sonuc}</p>
        </div>
      )}
    </div>
  );
  //Burada resimleri kendim çizip projenin çevrimiçi bağlantılı olması adına hızlıresim sitesinden çekmesi için upload ettim. İyi çalışmalar.
};

export default Game;
