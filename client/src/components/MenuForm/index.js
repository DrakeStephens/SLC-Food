import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { ADD_MENU_ITEM } from '../../utils/mutations';

const MenuForm = ({ restaurantId }) => {
const [item, setMenuItem] = useState('');
const [description, setMenuDescription] = useState('');
const [price, setMenuPrice] = useState('');

const [CcMenuItem, setCcMenuItem] = useState(0);
const [CcMenuDescription, setCcMenuDescription] = useState(0);
const [CcMenuPrice, setCcMenuPrice] = useState(0);

const [addMenu, { error }] = useMutation(ADD_MENU_ITEM);

const handleChangeItem = event => {
  if (event.target.value.length <= 280) {
    setMenuItem(event.target.value);
    setCcMenuItem(event.target.value.length);
  }
};

const handleChangeDescription = event => {
  if (event.target.value.length <= 280) {
    setMenuDescription(event.target.value);
    setCcMenuDescription(event.target.value.length);
  }
};

const handleChangePrice = event => {
  if (event.target.value.length <= 280) {
    setMenuPrice(event.target.value);
    setCcMenuPrice(event.target.value.length);
  }
};

const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      await addMenu({
        variables: { restaurantId, item, description, price }
      });
  
      setMenuItem('');
      setMenuDescription('');
      setMenuPrice('');

      setCcMenuItem(0);
      setCcMenuDescription(0);
      setCcMenuPrice(0);
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
        <p className={`m-0 ${CcMenuItem === 280 || error ? 'text-error' : ''}`}>
            Character Count: {CcMenuItem}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Add a new menu item..."
            value={item}
            className="form-input col-12 col-md-9"
            onChange={handleChangeItem}
        ></textarea>
        <p className={`m-0 ${CcMenuDescription === 280 || error ? 'text-error' : ''}`}>
            Character Count: {CcMenuDescription}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter your items description..."
            value={description}
            className="form-input col-12 col-md-9"
            onChange={handleChangeDescription}
        ></textarea>
                <p className={`m-0 ${CcMenuPrice === 280 || error ? 'text-error' : ''}`}>
            Character Count: {CcMenuPrice}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter your item's price..."
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

