import React from 'react';
import $ from 'jquery';

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            zipCode: 0,
            city: '',
            phone: 0

        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.handleEventOnClick = this.handleEventOnClick.bind(this);
    }
    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
        })
    }
    handleEventOnClick() {
        if(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.address === ''
           || this.state.zipCode === 0 || this.state.city === '' || this.state.phone === 0) return;
        var user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            zipCode: this.state.zipCode,
            city: this.state.city,
            phone: this.state.phone
        }
        $.post('/user', user,'json').then(result => console.log(result))
        this.props.changeView('reservation');
        this.props.setInfo(this.state.firstName, this.state.lastName, this.state.phone)
    }



    render() {
        return (
            <div className='choose-bike'>
			<h3>Use the following form to complete your reservation.</h3>
            <form>
			First name<input type="text" name="firstName" className="input" onChange={this.handleEventOnChange} required/>
			Last name<input type="text" name="lastName" className="input" onChange={this.handleEventOnChange} required/>
			E-mail<input type="email" name="email" className="input" onChange={this.handleEventOnChange} required/>
			Address<input type="text" name="address" className="input" onChange={this.handleEventOnChange} required/>
			Zipcode<input type="number" name="zipCode" className="input" onChange={this.handleEventOnChange} required/>
			City<input type="text"  name="city" className="input" onChange={this.handleEventOnChange} required/>
            Phone<input type="tel" name="phone" className="input" onChange={this.handleEventOnChange} required/>
            <button className="btn btn-primary" onClick={this.handleEventOnClick}>Confirm</button>
            </form>
			</div>
        )
    }
}

export default Info;