import React from 'react';

function EventInfo(props) {
    const event = props.event;
    const className = 'modal_div ' + event.type.type + 
        (props.isVisible ? ' modal_visible' : ' modal_hidden');

    return (
        <div className={className}>
            <span 
                className='modal_close'
                onClick={props.onClose}
            >X</span>
            <p className='pair-title'>{event.subject.title}</p>
            <hr />
            <div className='pair-desc'>
                <p>Тип</p>
                <p>Аудитория</p>
                <p>Преподаватель</p>
                <p>Группы</p>
            </div>
            <div className='pair-info'>
                <p>{event.type.full_name}</p>
                <p>{event.auditory}</p>
                <p>{(event.teacher && event.teacher.full_name) || '-'}</p>
                <p>{event.groups.map(g => g.name).join(', ')}</p>
            </div>
        </div>
    );
}

export default EventInfo;