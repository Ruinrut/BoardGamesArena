import React from 'react'
import 'react-dom'
import { format } from 'date-fns'

const Timer = (props) => <div data-testid="timer" className="timer">{format(props.time, 'mm:ss')}</div>;

export default Timer;