import React from 'react';

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            model: '',
            price: 0,
            imageUrl: '',
            description: ''
        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.handleEventOnClick = this.handleEventOnClick.bind(this);
    }
    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleEventOnClick() {
        console.log(this.state)
    }

    render() {
        return (
            <div className="add">
                <div className="add-bike">
                    <h3>Enter information for the new bike</h3>
            <form>
                Model: <input className="input" type="text" name="model" onChange={this.handleEventOnChange}/>
                Price: <input className="input" type="number" name="price" onChange={this.handleEventOnChange}/>
                Image: <input className="input" type="text" name="imageUrl" onChange={this.handleEventOnChange}/>
                Description: <textarea className="textarea" name="description" cols="30" rows="10" onChange={this.handleEventOnChange}></textarea>
                <button className="btn btn-success" type="submit" onClick={this.handleEventOnClick}>Add Bike</button>
            </form>
            </div>
            </div>
        )
    }
}
export default Admin;
