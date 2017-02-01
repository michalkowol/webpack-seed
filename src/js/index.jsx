import React from 'react';
import ReactDOM from 'react-dom';
import Repo from 'js/Repo';

const rootEl = document.getElementById('app');
ReactDOM.render(<Repo userName="michalkowol" repoName='webpack-seed' />, rootEl);

require('css/main.scss');
require('file-loader?name=[name].[ext]!index.html');