//same as import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

//same as - extendes Component
class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();
    goToStore = (event) => {
         //stop form from submitting
        event.preventDefault();
        //get text from input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        //change page to /store/whatever-input with react-router
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store Name</h2>
            <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}></input>
            <button type="submit"> Visit Store ➡ </button>
        </form>
        )
    }
}

export default StorePicker;