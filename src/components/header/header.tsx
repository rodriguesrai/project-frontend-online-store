import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={ inputValue }
          onChange={ (event) => handleInputChange(event) }
        />
      </div>
      <div>
        <h1>Front-End</h1>
        <h3>Online Store</h3>
      </div>
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </section>
  );
}
