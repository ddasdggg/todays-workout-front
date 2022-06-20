import React from 'react';
import propTypes from 'prop-types';
import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return <Component></Component>;
};

App.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default App;
