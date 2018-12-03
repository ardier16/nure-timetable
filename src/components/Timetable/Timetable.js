import React, { Component } from "react";
import TimetableInfo from './TimetableInfo';
import EventsTable from '../EventsTable/EventsTable';


class Timetable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filterText: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            filterText: e.target.value
        });
    }
    

    render() {
        return (
            <div className="Timetable">
                <TimetableInfo />
                <input 
                    type="text" 
                    value={this.state.filterText}
                    onChange={this.handleInput}
                    />
                <EventsTable filterText={this.state.filterText} />
            </div>
        );
    }
}

export default Timetable;