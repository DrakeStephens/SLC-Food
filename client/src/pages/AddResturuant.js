import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RESTAURANT } from '../utils/mutations';
import { QUERY_RESTAURANTS, QUERY_ME } from '../utils/queries';

const RestaurantForm = () => {
  const [restaurantName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  
  const [characterCountName, setCharacterCountName] = useState(0);
  const [setCharacterCountAddress, setCharacterCountAddress] = useState(0);
  const [setCharacterCountPhone, setCharacterCountPhone] = useState(0);
  const [characterCountDescription, setCharacterCountDescription] = useState(0);
  const [characterCountUrl, setCharacterCountUrl] = useState(0);
  
  const [addRestaurant, { error }] = useMutation(ADD_RESTAURANT, {
    update(cache, { data: { addRestaurant } }) {
      try {
        
        const { restaurants } = cache.readQuery({ query: QUERY_RESTAURANTS });
        cache.writeQuery({
          query: QUERY_RESTAURANTS,
          data: { restaurants: [addRestaurant, ...restaurants] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, restaurants: [...me.restaurants, addRestaurant] } }
      });
    }
  });

  const handleChangeName = event => {
    if (event.target.value.length <= 280) {
      setName(event.target.value);
      setCharacterCountName(event.target.value.length);
    }
  };
  const handleChangeAddress = event => {
    if (event.target.value.length <= 280) {
      setAddress(event.target.value);
      setCharacterCountAddress(event.target.value.length);
    }
  };
  const handleChangePhone = event => {
    if (event.target.value.length <= 15) {
      setPhone(event.target.value);
      setCharacterCountPhone(event.target.value.length);
    }
  };

  const handleChangeDescription = event => {
    if (event.target.value.length <= 280) {
      setDescription(event.target.value);
      setCharacterCountDescription(event.target.value.length);
    }
  };

  const handleChangeUrl = event => {
    if (event.target.value.length <= 280) {
      setUrl(event.target.value);
      setCharacterCountUrl(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add restaurant to database
      await addRestaurant({
        variables: { restaurantName, address, phone, description, url }
      });
  
      // clear form value
      setName('');
      setAddress('');
      setPhone('');
      setDescription('');
      setUrl('');
      
      
      setCharacterCountName(0);      
      setCharacterCountAddress(0);
      setCharacterCountPhone(0);
      setCharacterCountDescription(0);
      setCharacterCountUrl(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3 col-lg-8">
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
        >
        <h2>Add A Restaurant!</h2>
        <p className={`m-0 ${characterCountName === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountName}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter Your restaurant's name..."
            value={restaurantName}
            className="form-input col-12 col-md-9"
            onChange={handleChangeName}
        ></textarea>
        <p className={`m-0 ${characterCountDescription === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountDescription}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <p className={`m-0 ${setCharacterCountAddress === 280 || error ? 'text-error' : ''}`}>
            Character Count: {setCharacterCountAddress}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter Your restaurant's Address..."
            value={address}
            className="form-input col-12 col-md-9"
            onChange={handleChangeAddress}
        ></textarea>
        <p className={`m-0 ${setCharacterCountPhone === 280 || error ? 'text-error' : ''}`}>
            Character Count: {setCharacterCountPhone}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter Your restaurant's Phone Number..."
            value={address}
            className="form-input col-12 col-md-9"
            onChange={handleChangePhone}
        ></textarea>
        <p className={`m-0 ${characterCountDescription === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountDescription}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter a quick description of your restaurant..."
            value={description}
            className="form-input col-12 col-md-9"
            onChange={handleChangeDescription}
        ></textarea>
        <p className={`m-0 ${characterCountUrl === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountUrl}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Please enter your restaurant's url (If applicable)..."
            value={url}
            className="form-input col-12 col-md-9"
            onChange={handleChangeUrl}
        ></textarea>
        <div>
        <button className="btn-warning btn" type="submit">
          Submit
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default RestaurantForm;