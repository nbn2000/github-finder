import "./styles.css";
import {setAlert, searchUsers, clearUsers} from '../../redux/actions/general'
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react'

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mainReducer.users);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      dispatch(setAlert('Please enter something', 'light'));
    } else {
      dispatch(searchUsers(text));
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={() => dispatch(clearUsers())}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;