import React, { Fragment } from 'react';
import Search from '../../components/search';
import Users from '../../components/users';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;