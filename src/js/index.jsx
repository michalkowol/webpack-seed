import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'js/Greeting.jsx';

const rootEl = document.getElementById('app');
ReactDOM.render(<Greeting name='Michał Kowol' />, rootEl);

require('css/main.scss');
require('file-loader?name=[name].[ext]!index.html');