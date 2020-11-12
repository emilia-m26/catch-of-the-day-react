import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { object } from 'prop-types';


class App extends React.Component {
    //initial state being set as property
    state = {
       fishes: {},
       order: {}
    };
    //passing to inventory then to the form as prop
    addFish = fish => {
        //console.log("adding a fish")
        //take copy of existing state
        const fishes = {...this.state.fishes};
        //add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //set new fishes object to state -pass it piece of state you want to update
        this.setState({
            fishes: fishes
        });
    };
    loadSampleFishes = () => {
        //alert('loading sample');
        this.setState({ fishes: sampleFishes})
    };

    addToOrder = (key) => {
        //take copy of state
        const order = {...this.state.order};
        //add to order or update number in order
        order.fish1 = order.fish1 + 1 || 1;
        //setState to update state object
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />    
            </div>
        );
    }
}

export default App;