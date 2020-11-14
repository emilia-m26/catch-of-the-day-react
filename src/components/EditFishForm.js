import React from 'react';

class EditFishForm extends React.Component {
    render(){
        return (
        <div className="fish-edit">
            <input name="name" type="text" value={this.props.fish.name} />
                <input name="price" type="text" value={this.props.fish.price} />
                <select name="status" value={this.props.fish.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc"value={this.props.fish.desc} ></textarea>
                <input name="image" type="text" value={this.props.fish.image} />
                <button type="submit">+ Edit Fish</button>
        </div>
        );
    }
}

export default EditFishForm;
