//same as import { Component } from 'react';
import React from 'react';
import { render } from 'react-dom';

import "./css/style.css";
import Router from "./components/Router";


//takes two things - first JSX, second mounting point
render(<Router />, document.querySelector('#main'));

