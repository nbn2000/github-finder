import axios from 'axios';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT, 
  REMOVE_ALERT
} from '../../types';


/* -----GITHUB ACTIONS----- */

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// Search Users
export const searchUsers = text => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  } catch (error) {
    console.error(error);
  }
};

// Get User
export const getUser = username => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Get Repos
export const getUserRepos = username => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Clear Users
export const clearUsers = () => ({ type: CLEAR_USERS });

// Set Loading
export const setLoading = () => ({ type: SET_LOADING });


/* -----ALERT ACTIONS----- */

export const setAlert = (msg, type) => (dispatch) => {
   dispatch({
     type: SET_ALERT,
     payload: { msg, type }
   });

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
};