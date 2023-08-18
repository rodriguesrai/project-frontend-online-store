import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

type HeaderProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>)=> void,
  handleSearch: ()=> void,
  inputValue: string,
};

export default function Header({
  handleInputChange,
  inputValue,
  handleSearch,
}: HeaderProps) {
  return (
    <section>
      <div>
        <input
          type="text"
          value={ inputValue }
          onChange={ (event) => handleInputChange(event) }
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          onClick={ handleSearch }
        >
          enviar
        </button>
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
