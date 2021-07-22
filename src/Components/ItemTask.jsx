import React from 'react'
function ItemTask(props) {
    let { level } = props;
    let levelName = null;
    if(level == 0) {
        levelName = "easy";
    }else if(level == 1) {
        levelName = "medium";
    }else{
        levelName = "hard";
    }
    return (
        <tr>
                <td className="text-center">{props.index}</td>
                <td>{props.title}</td>
                <td className="text-center"><span className="label label-default">{ levelName }</span></td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
    )
}


export default ItemTask
