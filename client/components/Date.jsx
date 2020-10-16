import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pikup: '',
            return: ''
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
        this.props.changeView('choice');
    }

    render() {
        return (
            <div className="add">
                <div className="add-bike">
                    <h2>Pickup and Return Date </h2>
            <form>
                Pickup: <input className="input" type='date' name="pickup" onChange={this.handleEventOnChange}/>
                return: <input className="input" type="date" name="return" onChange={this.handleEventOnChange}/>
                <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Add Bike</button>
            </form>
            </div>
            </div>
        )
    }
}
export default Date;
