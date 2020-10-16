import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Bike from './components/Bike.jsx';
import Admin from './components/Admin.jsx';
import Date from './components/Date.jsx'
import Choice from './components/Choice.jsx';
import Info from './components/Info.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            view: 'home',
            chosenModel: ''
        }
        this.changeView = this.changeView.bind(this);
    }
    componentDidMount() {
        $.get('/app/store').then(results => {
            this.setState({
                data: results
            })
        })
    }
    changeView(option) {
        this.setState({
            view: option
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
                    <div className="input-group choose-bike">
                        <select className="custom-select" id="bikes" name="bikes" defaultValue='Choose a bike model...'>
                            {/* <option selected>Choose a bike model...</option> */}
                            {this.state.data.map(bike => <option key={bike.id} value={bike.model}>{bike.model}</option>)}
                        </select>
                        <button className="btn btn-outline-secondary" onClick={() => this.changeView('date')}>Check</button>
                    </div>
                    </div>
                    : this.state.view === 'admin' ?
                    <Admin />
                    : this.state.view === 'date' ?
                    <Date changeView= {this.changeView} />
                    : this.state.view === 'choice' ?
                    <Choice changeView= {this.changeView} />
                    : this.state.view === 'info' ?
                    <Info changeView= {this.changeView} />
                    : this.state.view === 'reservation' ?
                    <Reservation changeView= {this.changeView} />
                    :null
                }
                    
                
                
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'))