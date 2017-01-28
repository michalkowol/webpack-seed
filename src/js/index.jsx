import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'js/Greeting.jsx';

const rootEl = document.getElementById('app');
ReactDOM.render(<Greeting name='Michał' />, rootEl);