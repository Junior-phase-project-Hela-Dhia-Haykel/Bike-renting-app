import React from 'react';


class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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
        this.props.changeView('reservation');
    }



    render() {
        return (
            <div>
			
			<h1>Your information</h1>
			Use the following form to complete your reservation.<br/><br/>
			E-mail<input type="email" name="email" required="required" className="input" onChange={this.handleEventOnChange}/>
			First name<input type="text" name="firstname" required="required" maxlength="100" className="input" onChange={this.handleEventOnChange}/>
			Last name<input type="text" name="lastname" required="required" maxlength="100" className="input" onChange={this.handleEventOnChange}/>
			Address<input type="text" name="address" required="required" maxlength="100" className="input" onChange={this.handleEventOnChange}/>
			Zipcode<input type="text" name="zipcode" maxlength="32" className="input" onChange={this.handleEventOnChange}/>
			City<input type="text"  name="city" required="required" maxlength="100" className="input" onChange={this.handleEventOnChange}/>
			{/* Country<select className="selectpicker countrypicker" data-default="TN"></select> */}
            Phone<input type="text" name="phone" required="required" maxlength="32" className="input" onChange={this.handleEventOnChange}/>
            <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Confirm</button>
			</div>
        )
    }
}

export default Info;