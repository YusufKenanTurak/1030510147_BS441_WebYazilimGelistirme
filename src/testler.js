import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TasKagitMakas from './TasKagitMakas';

describe('TasKagitMakas', () => {
  it('Oyun modu seçim düğmelerini test eder.', () => {
    const { getByText } = render(<TasKagitMakas />);
    expect(getByText('Bilgisayara Karşı')).toBeInTheDocument();
    expect(getByText('İki Oyuncu')).toBeInTheDocument();
  });

  it('Oyuncu 1 ve oyuncu 2 için seçim düğmelerini ve iki oyuncu moduna ait butonları test eder.', () => {
    const { getByText } = render(<TasKagitMakas />);
    fireEvent.click(getByText('İki Oyuncu')); // set game mode to two player
    expect(getByText('Oyuncu 1')).toBeInTheDocument();
    expect(getByText('Oyuncu 2')).toBeInTheDocument();
    expect(getByText('Taş')).toBeInTheDocument();
    expect(getByText('Kağıt')).toBeInTheDocument();
    expect(getByText('Makas')).toBeInTheDocument();
  });
  
  it('İki oyuncu modunda kazananı doğruluğunu test eder.', () => {
    const { getByText } = render(<TasKagitMakas />);
    fireEvent.click(getByText('İki Oyuncu')); // set game mode to two player
    fireEvent.click(getByText('Taş')); // player 1 selects Rock
    fireEvent.click(getByText('Kağıt')); // player 2 selects Paper
    expect(getByText('Oyuncu 2 kazandı!')).toBeInTheDocument();
  });
});
