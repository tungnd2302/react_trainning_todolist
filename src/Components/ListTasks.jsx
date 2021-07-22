import React from 'react'
import ItemTask from './ItemTask'

function ListTasks(props) {
    let tasks = props.tasks;
    // {tasks} = props
    return (
        <table className="table table-hover ">
        <thead>
            <tr>
                <th style={{ width: '10%' }} className="text-center">#</th>
                <th>Task</th>
                <th style={{ width: '20%' }} className="text-center">Level</th>
                <th style={{ width: '20%' }}>Action</th>
            </tr>
        </thead>
        <tbody>
            { tasks.map((value,index) => {
                return  <ItemTask index={value.id} title={value.name} level = {value.level} />
            }) }
        </tbody>
    </table>
    )
}

export default ListTasks
