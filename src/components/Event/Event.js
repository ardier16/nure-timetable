import React, { Component } from "react";
import EventInfo from "./EventInfo";


class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isVisible: false
        };

        this.overlay = document.getElementById('overlay');

        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    
    onClick(e) {
        if (!this.state.isVisible) {
            this.overlay.addEventListener('click', this.onClose);
            this.overlay.className = 'modal_visible';
            
            this.setState({isVisible: true});
        }
    }

    onClose(e) {
        this.overlay.removeEventListener('click', this.onClose);
        this.overlay.className = 'modal_hidden';
        
        this.setState({isVisible: false});
    }

    render() {
        const event = this.props.event;

        return (
            <div 
                className={'pair open_modal ' + event.type.type}
                onClick={this.onClick}
            >
                <input type='hidden' value={'#modal' + event.id}></input>
                <p>{event.subject.brief}</p>
                <p>{event.type.short_name} {event.auditory}</p>
                <EventInfo 
                    event={event} 
                    isVisible={this.state.isVisible}
                    onClose={this.onClose}
                />
            </div>
        );
    }
}

export default Event;