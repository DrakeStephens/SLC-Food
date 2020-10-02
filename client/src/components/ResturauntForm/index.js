import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
//import { ADD_RESTURAUNT } from '../../utils/mutations';
//import { QUERY_RESTURAUNTS, QUERY_ME } from '../../utils/queries';

const ThoughtForm = () => {
  const [resturauntName, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  
  const [characterCountName, setCharacterCountName] = useState(0);
  const [characterCountDescription, setCharacterCountDescription] = useState(0);
  const [characterCountUrl, setCharacterCountUrl] = useState(0);
  
  const [addResturaunt, { error }] = useMutation(ADD_RESTURAUNT, {
    update(cache, { data: { addResturaunt } }) {
      try {
        
        const { resturaunts } = cache.readQuery({ query: QUERY_RESTURAUNTS });
        cache.writeQuery({
          query: QUERY_RESTURAUNTS,
          data: { resturaunts: [addResturaunt, ...resturaunts] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, resturaunts: [...me.resturaunts, addResturaunt] } }
      });
    }
  });

  const handleChangeName = event => {
    if (event.target.value.length <= 280) {
      setName(event.target.value);
      setCharacterCountName(event.target.value.length);
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
      // add thought to database
      await addResturaunt({
        variables: { resturauntName, description }
      });
  
      // clear form value
      setText('');
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
        <p className={`m-0 ${characterCountName === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountName}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter Your Resturaunt's name..."
            value={resturauntName}
            className="form-input col-12 col-md-9"
            onChange={handleChangeName}
        ></textarea>
        <p className={`m-0 ${characterCountDescription === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountDescription}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter a quick description of your website..."
            value={description}
            className="form-input col-12 col-md-9"
            onChange={handleChangeDescription}
        ></textarea>
        <p className={`m-0 ${characterCountUrl === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCountUrl}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <textarea
            placeholder="Enter a quick description of your website..."
            value={url}
            className="form-input col-12 col-md-9"
            onChange={handleChangeUrl}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;