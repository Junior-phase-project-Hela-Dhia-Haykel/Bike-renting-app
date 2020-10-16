import React from 'react';
import $ from 'jquery';

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin:'',
            password: '',
            access: false,
            model: '',
            price: 0,
            imageUrl: '',
            quantity:0,
            description: '',
            bikeModel: ''
        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.handleEventOnClick = this.handleEventOnClick.bind(this);
        this.login = this.login.bind(this);
    }
    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleEventOnClick() {
        var newBike = {model: this.state.model, price: this.state.price, imageUrl: this.state.imageUrl, description: this.state.description, quantity: this.state.quantity};
        $.post('/admin/addmodel', newBike, (err,results) => {
            if(err) console.log(err);
            else {
                console.log(results);
            }
        })
        console.log(this.state)
    }
    login() {
        if(this.state.admin === 'admin' && this.state.password === 'admin') {
            this.setState({
                access: true
            })
        } else {
            alert('Wrong username or/and password!!')
        }
    }

    render() {
        return (
            this.state.access ?
            <div>
            <div className="add">
                <div className="add-bike">
                    <h3>Enter information for the new bike model</h3>
            <form>
                Model: <input className="input" type="text" name="model" onChange={this.handleEventOnChange} required/>
                Price: <input className="input" type="number" name="price" min ='0' max = '100' onChange={this.handleEventOnChange}required/>
                Image: <input className="input" type="text" name="imageUrl" onChange={this.handleEventOnChange}/>
                Quantity: <input className="input" type="number" name="quantity" min ='1' max = '100' onChange={this.handleEventOnChange}required/>
                Description: <textarea className="textarea" name="description" cols="30" rows="10" onChange={this.handleEventOnChange}required></textarea>
                <button className="btn btn-success" type="submit" onClick={this.handleEventOnClick}>Add Bike</button>
            </form>
            </div>
            </div>
            </div>
            :
            <div className='choose-bike'>
                Username: <input type="text" name="admin" className="input" onChange={this.handleEventOnChange}/>
                Password: <input type="password" name="password" className="input" onChange={this.handleEventOnChange}/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Admin;
