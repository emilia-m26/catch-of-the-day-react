//same as import { Component } from 'react';
import React from 'react';

//same as - extendes Component
class StorePicker extends React.Component {
    render() {
        return (
        <form className="store-selector">
            <h2>Please Enter A Store Name</h2>
            <input type="text" required placeholder="Store Name"></input>
            <button type="submit"> Visit Store ➡ </button>
        </form>
        )
    }
}

export default StorePicker;