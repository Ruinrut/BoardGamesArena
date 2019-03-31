import React from 'react'
import 'react-dom'
import { format } from 'date-fns'

const getTime = time => {
    console.log(typeof time)
    const result = Date.parse(time) - new Date();
    return result > 0 ? result : 0; 
}

const Timer = ({ time }) => (
    <span data-testid="timer" className="timer">
        {format(getTime(time), 'mm:ss')}
    </span>
);

export default Timer;