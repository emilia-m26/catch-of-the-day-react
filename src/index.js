//same as import { Component } from 'react';
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';



//takes two things - first JSX, second mounting point
render(<StorePicker />, document.querySelector('#main'));

