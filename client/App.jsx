import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Bike from './components/Bike.jsx';
import Admin from './components/Admin.jsx';
import Date from './components/Date.jsx'
import Choice from './components/Choice.jsx';
import Info from './components/Info.jsx';
import Reservation from './components/Reservation.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            view: 'home',
            chosenModel: {},
            pickupDate: 0,
            returnDate: 0,
            period: 0,
            total: 0,
            userName: '',
            userPhone: 0
        }
        this.changeView = this.changeView.bind(this);
        this.handleEventSelect = this.handleEventSelect.bind(this);
        this.setTotal = this.setTotal.bind(this);
        this.setPeriod = this.setPeriod.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);

    }
    componentDidMount() {
        $.get("/api/bike").then(results => {
            this.setState({
                data: results
            })
            console.log(results);
        })
    }
    changeView(option) {
        this.setState({
            view: option
        })
    }
    setTotal(total) {
        console.log(total)
        this.setState({
            total: Number(total) * this.state.period
        })
    }
    setPeriod(pickupDate, returnDate) {
        var period =  (Number(returnDate.split('-')[1]) - Number(pickupDate.split('-')[1]))*30 + (Number(returnDate.split('-')[2]) - Number(pickupDate.split('-')[2]))
        console.log(period, pickupDate, returnDate)
        this.setState({
            pickupDate: pickupDate,
            returnDate: returnDate,
            period: period
        })
    }
    getUserInfo(firstName, lastName, phone) {
        this.setState({
            userName: firstName + lastName,
            userPhone: phone
        })
    }
    handleEventSelect(e) {
        var model = e.target.value;
        var currentModel = this.state.data.filter(bike => bike.model === model)
        this.setState({
            chosenModel: currentModel[0]
        })
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <span className="app-label">Rental Bike</span>
                    <span className={this.state.view === 'home'
                        ? 'selected'
                        : 'unselected'}
                    onClick={() => this.changeView('home')}>
                        Home
                    </span>
                    <span className={this.state.view === 'admin'
                        ? 'selected'
                        : 'unselected'}
                    onClick={() => this.changeView('admin')}>
                        Admin
                    </span>
                </div>

                    {this.state.view === 'home' ?
                    <div>
                        {/* description for the services of the company */}
                    <div className="input-group choose-bike">
                        <select className="custom-select" id="bikes" name="bikes" onChange={this.handleEventSelect}>
                            <option defaultValue>Choose a bike model...</option>
                            {this.state.data.map(bike => <option key={bike._id} value={bike.model}>{bike.model}</option>)}
                        </select>
                        <button className="btn btn-outline-secondary" onClick={() => this.changeView('date')}>Check</button>
                    </div>
                    </div>
                    : this.state.view === 'admin' ?
                    <Admin />
                    : this.state.view === 'date' ?
                    <Date changeView= {this.changeView} setPeriod={this.setPeriod} />
                    : this.state.view === 'choice' ?
                    <Choice bike = {this.state.chosenModel} changeView= {this.changeView} setTotal={this.setTotal} />
                    : this.state.view === 'info' ?
                    <Info changeView= {this.changeView} setInfo={this.getUserInfo} />
                    : this.state.view === 'reservation' ?
                    <Reservation userName= {this.state.userName} phone = {this.state.userPhone} pickup = {this.state.pickupDate} return = {this.state.returnDate} model = {this.state.chosenModel.model} total = {this.state.total} changeView= {this.changeView} />
                    :null
                }
                    
                
                
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'))