import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickup: '',
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
        console.log(typeof this.state.return)
        this.props.setPeriod(this.state.pickup, this.state.return);
    }

    render() {
        return (
            <div>
                <div className="add">
                    <h2>Pickup and Return Dates </h2>
                    <form>
                        Pickup <input className="input" type='date' name="pickup" onChange={this.handleEventOnChange}/>
                        Return <input className="input" type="date" name="return" onChange={this.handleEventOnChange}/>
                        <button className="btn btn-primary" type="submit" onClick={this.handleEventOnClick}>Select Bike</button>
                    </form>
                    <div className='rules'>
                        <h3>Rental Rules and Safety Guidelines</h3> PLEASE DO:
                        <ul>
                            <li>Ride in designated bike lanes and/or paved bike trails when available.</li>
                            <li>Ride in the same direction of traffic, not against the direction of traffic.</li>
                            <li>Be aware of parked cars as doors may open into street.</li>
                            <li>Always look over shoulder before making turns or changing lanes.</li>
                            <li>The bike rental starts when you receive the bike and ends when you return it. (We don’t calculate
                                the actual days used, but the period that the bike is at your disposal).</li>
                            <li>When you stop somewhere, please pay attention on how you park the bike. We ask that you be
                                careful when you lean it on walls, sidewalks, poles etc…the frames can easily be ruined if parked
                                negligently, or fall because of poor parking.</li>
                            <li>Please respect road traffic rules, follow general principles of prudence and diligence, and
                                safeguard other people’s rights while riding and using the bike.</li>
                            <li>Please - we ask that you treat our bikes like they are your own, and take proper care of them both
                                while riding and storing the bike. We will give you the bike in excellent condition, and we expect it
                                to come back in that same condition.</li>
                            <li>You are responsible for any loss or damage to the equipment which, at all times.</li>
                        </ul>    
                        PLEASE DO NOT:
                        <ul>
                            <li>Make any modifications to the components of the bike on your own. All adjustments
                                to the bike must only be made by our staff.</li>
                            <li>Operate a Bike while carrying any item that impedes Rider’s ability to safely operate the Bike.</li>
                            <li>Operate a Bike while attempting to exercise your pet (IE Walk the dog).</li>
                            <li>Operate a Bike while under the influence of alcohol, drugs, or any other substance that impair Rider’s ability to safely operate the Bike.</li>
                            <li>Use any cell phone or mobile electronic device that could distracts rider from the safe operation of the Bike.</li>
                            <li>Allow any other person to use the Items or allow more than one person to be carried on the Bike.</li>
                            <li>Operate or use a Bike in any manner during adverse weather conditions, including but not limited to: hail, dust storms, fog, heavy rains, or lightning storms.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Date;
