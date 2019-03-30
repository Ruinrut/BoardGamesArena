import React from 'react'
import 'react-dom'
import { format } from 'date-fns'

const Timer = (props) => <span data-testid="timer" className="timer">{format(props.time, 'mm:ss')}</span>;

export default Timer;