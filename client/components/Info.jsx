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
        $.post('/user', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            zipCode: this.state.zipCode,
            city: this.state.city,
            phone: this.state.phone
        },'json')
        this.props.changeView('reservation');
    }



    render() {
        return (
            <div>
			
			<h1>Your information</h1>
			Use the following form to complete your reservation.<br/><br/>
			First name<input type="text" name="firstName" required="required" maxLength="100" className="input" onChange={this.handleEventOnChange}/>
			Last name<input type="text" name="lastName" required="required" maxLength="100" className="input" onChange={this.handleEventOnChange}/>
			E-mail<input type="email" name="email" required="required" className="input" onChange={this.handleEventOnChange}/>
			Address<input type="text" name="address" required="required" maxLength="100" className="input" onChange={this.handleEventOnChange}/>
			Zipcode<input type="text" name="zipcode" maxLength="32" className="input" onChange={this.handleEventOnChange}/>
			City<input type="text"  name="city" required="required" maxLength="100" className="input" onChange={this.handleEventOnChange}/>
            Phone<input type="text" name="phone" required="required" maxLength="32" className="input" onChange={this.handleEventOnChange}/>
            <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Confirm</button>
			</div>
        )
    }
}

export default Info;