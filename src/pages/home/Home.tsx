import React from 'react';

export default function Home() {
  // const [changeText, setChangeText] = useState(true);
  // const [inputValue, setInputValue] = useState('');
  // const handleText = () => {
  //   setChangeText(!changeText);
  // };
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <div>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
      /> */}
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}