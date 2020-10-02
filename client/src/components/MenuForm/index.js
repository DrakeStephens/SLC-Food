import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_MENU_ITEM } from '../../utils/mutations';

const MenuForm = ({ resturauntId }) => {
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [characterCountDescription, setCharacterCountDescription] = useState(0);
const [characterCountPrice, setCharacterCountPrice] = useState(0);
const [addMenuItem, { error }] = useMutation(ADD_MENU_ITEM);

const handleChangeDescription = event => {
  if (event.target.value.length <= 280) {
    setDescription(event.target.value);
    setCharacterCountDescription(event.target.value.length);
  }
};

const handleChangePrice = event => {
  if (event.target.value.length <= 280) {
    setPrice(event.target.value);
    setCharacterCountPrice(event.target.value.length);
  }
};

const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add menuItem to database
      await addMenuItem({
        variables: { description, price, resturauntId }
      });
  
      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
        <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
        >
        <p className={`m-0 ${characterCountDescription === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountDescription}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Add a new menu item?..."
            value={description}
            className="form-input col-12 col-md-9"
            onChange={handleChangeDescription}
        ></textarea>
        <p className={`m-0 ${characterCountPrice === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountPrice}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="enter ther price?..."
            value={price}
            className="form-input col-12 col-md-9"
            onChange={handleChangePrice}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MenuForm;