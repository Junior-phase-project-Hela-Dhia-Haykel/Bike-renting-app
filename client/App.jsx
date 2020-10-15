import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Bike from './components/Bike.jsx';
import Admin from './components/Admin.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            view: 'home'
        }
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
                    <div className="input-group">
                        <label for="bikes">Choose a Model:</label>
                        <select className="custom-select" id="bikes" name="bikes">
                            {this.state.data.map(bike => <option key={bike.id} value={bike.model}>{bike.model}</option>)}
                        </select>
                        <button className="btn btn-outline-secondary" onClick={() => this.changeView('date')}>Check</button>
                    </div>
                    </div>
                    : this.state.view === 'admin' ?
                    <Admin />
                    : null
                }
                    
                
                
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'))