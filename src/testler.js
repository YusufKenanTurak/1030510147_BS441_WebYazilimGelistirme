import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

test('Oyun başlığının oluşturulması', () => {
  const { getByText } = render(<Game />);
  const titleElement = getByText(/Taş, Kağıt, Makas/i);
  expect(titleElement).toBeInTheDocument();
});

test('Oyuncunun taş, kağıt veya makas seçebilmesi', () => {
  const { getByText } = render(<Game />);
  const rockButton = getByText(/Taş/i);
  const paperButton = getByText(/Kağıt/i);
  const scissorsButton = getByText(/Makas/i);
  expect(rockButton).toBeInTheDocument();
  expect(paperButton).toBeInTheDocument();
  expect(scissorsButton).toBeInTheDocument();
});

test('Oyuncu bir seçim yaptıktan sonra ekrana sonucun gösterilmesi', () => {
  const { getByText } = render(<Game />);
  const rockButton = getByText(/Taş/i);
  fireEvent.click(rockButton);
  const resultElement = getByText(/Sonuç/i);
  expect(resultElement).toBeInTheDocument();
});
