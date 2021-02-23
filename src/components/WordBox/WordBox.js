import React from 'react';

export default function WordBox(props) {
    return (
        <div className='WordBox'>
            <h4>{props.original}</h4>
            <p>{`correct answer count: ${props.correct_count}`}</p>
            <p>{`incorrect answer count: ${props.incorrect_count}`}</p>
        </div>
    )
}