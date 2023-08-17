import React, { useState } from 'react';

export default function Home() {
  const [changeText, setChangeText] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const handleText = () => {
    setChangeText(!changeText);
  };
  const hanbleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={ inputValue }
        onChange={ (event) => hanbleInputChange(event) }
      />
      {changeText && (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </div>
  );
}
