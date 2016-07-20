import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'js/Greeting';

const rootEl = document.getElementById('app');
ReactDOM.render(<Greeting name='Michał' />, rootEl);

require('file?name=[name].[ext]!index.html');
require('file?name=[name].[ext]!bootstrap/dist/css/bootstrap.min.css');
require('css/main.css');

