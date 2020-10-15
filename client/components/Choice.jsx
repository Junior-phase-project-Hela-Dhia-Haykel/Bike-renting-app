import React from 'react';

class Choice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            total: 0,
            gender: ''
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
        this.props.changeView('info');
    }
    updateTotal(price) {
        this.setState({
            total: price * this.state.quantity
        })
    }

    render() {
        return (
            <div>
                <h2>Make your Choice.</h2>
                <div className="bikes">
                <div className="bike-table">
                <div className="bike-header bike-row">
                <div className="bike-data">Bike type</div>
                <div className="bike-data">Quantity</div>
                <div className="bike-data">Price</div>
                <div className="bike-data">Gender</div>
                </div>
                </div>
                </div>
                {this.props.bikes.map(bike => 
                    <div key={bike.id} className="bike-row">
                    <div className="bike-data"><img src={bike.imageUrl} className=""/></div>
                    <div className="bike-data"><input className="input" type='number' min='0' max='20' name="quantity" onChange={() => {this.handleEventOnChange
                                                                                                                                        this.updateTotal(bike.price)
                    }}/></div>
                    <div className="bike-data">{bike.price}</div>
                    <div className="bike-data">
                        <form>
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label htmlFor="male"> Male</label><br/>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="female"> Female</label>
                        </form>
                    </div>
                    </div>
                )}
                <div>Total: {this.state.total}</div>
                <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Proceed</button>
            </div>
        )
    }
}
export default Choice;
