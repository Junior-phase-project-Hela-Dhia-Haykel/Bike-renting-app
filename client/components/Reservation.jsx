import React from 'react';

const Reservation = (props) => (
    <div>
        <h2>🛒Your reservation :</h2>
        <div>
        <p>{props.userName}</p>
        <p>☎️{props.phone}</p>
        </div>
        <div>
            <p> 📆 From : {props.pickup} to ⏳ {props.return}</p>
        </div>
        <div>
        <p>{props.model}</p>
        <span> 💰 Your Total is : {props.total} DT</span><br/>
        <button className="btn btn-primary" type="submit" onClick={()=>props.changeView('home')}>Done !</button>
        </div>
     
    </div>
)
export default Reservation;