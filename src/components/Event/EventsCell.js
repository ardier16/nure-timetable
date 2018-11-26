import React, { Component } from "react";
import Event from "./Event";

const SCROLL_COEFF = 1.2;

class EventsCell extends Component {
    constructor(props) {
        super(props);

        this.isScrolled = false;

        this.onWheel = this.onWheel.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver() {
        this.isScrolled = true;
    }

    onMouseOut() {
        this.isScrolled = false;
    }


    onWheel(e) {
        if (!this.isScrolled) {
            document.getElementById("timetable-block").scrollLeft += SCROLL_COEFF * e.deltaY;
        }
    }

    render() {
        const events = this.props.events;
        const elems = events.map((e, i) => <Event key={e.id} event={e} />);
        
        if (elems.length > 1) {
            return (
                <div 
                    className='pairs-block multiple'
                    onWheel={this.onWheel}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                >
                    {elems}
                </div>
            );
        }

        return (
            <div 
                className='pairs-block'
                onWheel={this.onWheel}
            >
                {elems}
            </div>
        );
    }
}

export default EventsCell;