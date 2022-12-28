import React, { useState } from 'react';

const TasKagitMakas = () => {
  // Seçimleri tutmak için iki değişken tanımlayın
  const [oyuncu1Secimi, oyuncu1SeciminiAyarla] = useState(null);
  const [oyuncu2Secimi, oyuncu2SeciminiAyarla] = useState(null);
  const secenekler = ['Taş', 'Kağıt', 'Makas'];
  const rastgeleSec = () => {
      return secenekler[Math.floor(Math.random() * secenekler.length)];
    };
  // Modu tutmak için bir değişken tanımlayın
  const [mod, moduAyarla] = useState(null);

  // Oyun modlarını render etmek için bir fonksiyon oluşturun
  const modlariRenderla = () => (
    <div>
      <button onClick={() => moduAyarla('tekKisilik')}>Bilgisayara Karşı</button>
      <button onClick={() => moduAyarla('ikiKisilik')}>İki Oyuncu</button>
    </div>
  );

  // Seçimleri render etmek için bir fonksiyon oluşturun
  const secimleriRenderla = () => (
    <div>
      {mod === 'tekKisilik' && (
        <div>
          <button onClick={() => oyuncu1SeciminiAyarla('Taş')}><img src="https://i.hizliresim.com/b3phf3f.png" border="0" /></button>
          <button onClick={() => oyuncu1SeciminiAyarla('Kağıt')}><img src="https://i.hizliresim.com/t8a8a7f.png" border="0" /></button>
          <button onClick={() => oyuncu1SeciminiAyarla('Makas')}><img src="https://i.hizliresim.com/ckk0pmw.png" border="0" /></button>
        </div>
      )}
      {mod === 'ikiKisilik' && (
        <div>
          <div>
            <p>Oyuncu 1</p>
            <button onClick={() => oyuncu1SeciminiAyarla('Taş')}><img src="https://i.hizliresim.com/b3phf3f.png" border="0" /></button>
            <button onClick={() => oyuncu1SeciminiAyarla('Kağıt')}><img src="https://i.hizliresim.com/t8a8a7f.png" border="0" /></button>
            <button onClick={() => oyuncu1SeciminiAyarla('Makas')}><img src="https://i.hizliresim.com/ckk0pmw.png" border="0" /></button>
          </div>
          <div>
            <p>Oyuncu 2</p>
            <button onClick={() => oyuncu2SeciminiAyarla('Taş')}><img src="https://i.hizliresim.com/b3phf3f.png" border="0" /></button>
            <button onClick={() => oyuncu2SeciminiAyarla('Kağıt')}><img src="https://i.hizliresim.com/t8a8a7f.png" border="0" /></button>
            <button onClick={() => oyuncu2SeciminiAyarla('Makas')}><img src="https://i.hizliresim.com/ckk0pmw.png" border="0" /></button>
          </div>
        </div>
      )}
    </div>
  );

  // Kazananı hesaplamak için bir fonksiyon oluşturun
  const kazananiBul = () => {
    if(mod==='ikiKisilik'){
      if (
        (oyuncu1Secimi === 'Taş' && oyuncu2Secimi === 'Makas') ||
        (oyuncu1Secimi === 'Kağıt' && oyuncu2Secimi === 'Taş') ||
        (oyuncu1Secimi === 'Makas' && oyuncu2Secimi === 'Kağıt')
      ) {
          return 'Oyuncu 1 '+oyuncu1Secimi+' seçti, Oyuncu 2 ise '+oyuncu2Secimi+' seçti, Sonuç: Oyuncu 1 kazandı!';
        } 
        else if (oyuncu1Secimi === oyuncu2Secimi) {
          return 'Berabere'
        }
        else {
          return 'Oyuncu 1 '+oyuncu1Secimi+' seçti, Oyuncu 2 ise '+oyuncu2Secimi+' seçti, Sonuç: Oyuncu 2 kazandı!';
        }
    }
    else{
      const oyuncu2Secimi = secenekler[Math.floor(Math.random() * 3)];
      if (
        (oyuncu1Secimi === 'Taş' && oyuncu2Secimi === 'Makas') ||
        (oyuncu1Secimi === 'Kağıt' && oyuncu2Secimi === 'Taş') ||
        (oyuncu1Secimi === 'Makas' && oyuncu2Secimi === 'Kağıt')
      ) {
          return 'Oyuncu 1 '+oyuncu1Secimi+' seçti, Bilgisayar ise '+oyuncu2Secimi+' seçti, Sonuç: Oyuncu 1 kazandı!';
        } 
        else if (oyuncu1Secimi === oyuncu2Secimi) {
          return 'Oyuncu 1 '+oyuncu1Secimi+' seçti, Bilgisayar ise '+oyuncu2Secimi+' seçti, Sonuç: Berabere!';
        }
        else {
          return 'Oyuncu 1 '+oyuncu1Secimi+' seçti, Bilgisayar ise '+oyuncu2Secimi+' seçti, Sonuç: Bilgisayar kazandı!';
        }
      
    }
  };
  // Kazananı render etmek için bir fonksiyon oluşturun
  const kazananirenderla = () => {
    if (mod === 'ikiKisilik' && oyuncu1Secimi && oyuncu2Secimi) {
      return <p>{kazananiBul()}</p>;
    }
    if (mod === 'tekKisilik' && oyuncu1Secimi && oyuncu2Secimi) {
      return <p>{kazananiBul()}</p>;
    }
    return null;
  };
  
  const oyunBaslangici = () => (
    <div>
    <h1>React ile Taş, Kağıt, Makas Oyunu</h1>
      <button onClick={() => oyuncu2SeciminiAyarla(rastgeleSec)}>Oyuna Başla</button>
    </div>
  );


  // Componenti render etmek için bir fonksiyon oluşturun
  const oyunuRenderla = () => (
    <div>
      {oyunBaslangici()}
      {oyuncu2Secimi && modlariRenderla()}
      {secimleriRenderla()}
      {kazananirenderla()}
    </div>
  );

  // Componenti döndürün

  return oyunuRenderla();
};

export default TasKagitMakas;
  