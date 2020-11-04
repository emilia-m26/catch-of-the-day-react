//same as import { Component } from 'react';
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import "./css/style.css";


//takes two things - first JSX, second mounting point
render(<App />, document.querySelector('#main'));

