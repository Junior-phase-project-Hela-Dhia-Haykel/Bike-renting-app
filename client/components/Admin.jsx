import React from 'react';
import $ from 'jquery';

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin:'',
            password: '',
            model: '',
            price: 0,
            imageUrl: '',
            quantity:0,
            description: '',
            select: 'login',
            removeModel: '',
            confirm: false,
            response: ''
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
        if(this.state.model === '' || this.state.price === 0 || this.state.imageUrl === '' || this.state.description === ''
           || this.state.quantity === 0) return;
        var newBike = {model: this.state.model, price: this.state.price, imageUrl: this.state.imageUrl, description: this.state.description, quantity: this.state.quantity};
        $.post('/admin/addmodel', newBike, (err,results) => {
            if(err) console.log(err);
            else {
                console.log(results);
            }
        })
    }
    selectAction(option) {
        this.setState({
            select: option
        })
    }
    login() {
        if(this.state.admin === 'admin' && this.state.password === 'admin') {
            this.selectAction('access')
        } else {
            alert('Wrong username or/and password!!')
        }
    }
    confirmRemove() {
        $.post('/admin/removemodel', {removeModel: this.state.removeModel}, (err,results) => {
            if(err) console.log(err);
            else {
                console.log(results);
            }
        })
        this.setState({
            confirm: true
        })
    }

    render() {
        return (
            this.state.select === 'access' ?
            <div className="choose-bike">
                <button type="button" className="btn btn-primary btn-lg" onClick = {() => this.selectAction('add')}>Add New Model</button><br/><br/>
                <button type="button" className="btn btn-danger btn-lg" onClick = {() => this.selectAction('remove')}>Remove Model</button>
            </div>
            : this.state.select === 'add' ?
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
                <button className="btn btn-success" onClick={this.handleEventOnClick}>Add Bike</button>
            </form>
            </div>
            </div>
            </div>
            : this.state.select === 'remove' ?
            <div className="choose-bike">
                <h3>Enter a bike model to remove:</h3>
                <form>
                <input type="text" name="removeModel" className= 'input' onChange={this.handleEventOnChange} required/>
                <button className="btn btn-warning" onClick = {() => this.selectAction('confirm')}>Remove</button>
                </form>
            </div>
            : this.state.select === 'confirm' ?
            <div className="choose-bike">
                Confirm removing {this.state.removeModel} <button className="btn btn-danger" onClick = {() => this.confirmRemove()}>Confirm</button>
                {this.state.confirm ? <p>{this.state.response}</p>:null}
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
