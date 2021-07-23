import React from 'react'

function ButtonAddTask(props) {
    let { onToggleButton,visileButton } = props
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block" onClick={(visible) => onToggleButton(!visileButton)}>
               { !visileButton ? 'Add Task' : 'Close' }
            </button>
        </div>
    )
}

export default ButtonAddTask
