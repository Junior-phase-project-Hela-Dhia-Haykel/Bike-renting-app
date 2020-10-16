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
        this.setState({
            quantity: e.target.value,
        })
        this.setState((prevState) => ({
            total: this.props.bike.price * prevState.quantity
        }))
    }
    handleEventOnClick() {
        this.props.changeView('info');
        this.props.setTotal(this.state.total);
    }
    updateTotal() {
        
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
                <div className="bike-data">Bike image</div>
                <div className="bike-data">Quantity</div>
                <div className="bike-data">Price</div>
                <div className="bike-data">Model</div>
                </div>
                </div>
                </div>
                 
                    <div  className="bike-row">
                    <div className="bike-data"><img src={this.props.bike.imageUrl} className="bikePreview"/></div>
                    <div className="bike-data"><input className="input" type='number' min='1' max={String(this.props.bike.quantity)} name="quantity" onChange={this.handleEventOnChange}/></div>
                    <div className="bike-data">{this.props.bike.price}</div>
                    <div className="bike-data">{this.props.bike.model}</div>
                    </div>
                
                <div>Total/24h: {this.state.total}</div>
                <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Proceed</button>
            </div>
        )
    }
}
export default Choice;
