import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        //copy of current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value 
        };
    }
    render(){
        return (
        <div className="fish-edit">
            <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name} />
                <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} ></textarea>
                <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image} />
                <button type="submit">+ Edit Fish</button>
        </div>
        );
    }
}

export default EditFishForm;
