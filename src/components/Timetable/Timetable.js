import React, { Component } from "react";
import TimetableInfo from './TimetableInfo';
import EventsTable from '../EventsTable/EventsTable';


class Timetable extends Component {
    render() {
        return (
            <div className="Timetable">
                <TimetableInfo />
                <EventsTable />
            </div>
        );
    }
}

export default Timetable;