import React, { useState } from 'react'

function AddField(props) {
    let { visileButton,onToggleButton,addItem } = props
    const [ name, setName ] = useState('');
    const [ level, setLevel ] = useState(0);


    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        if(name == "name") {
            setName(target.value);
        }

        if(name == "level") {
            setLevel(target.value);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = {
            name : name,
            level : level,
        }

        addItem(form);
    }

      
    return (
        (visileButton) ? 
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Task Name" value={name}  onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <select name="level" name="level" className="form-control" value={level}  onChange={handleChange}>
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <input type="submit"  className="btn btn-primary" value="Submit" />
                    {/* <button type="button" className="btn btn-primary" onClick={(visible) => onToggleButton(false)}>Submit</button> */}
                    <button type="button" className="btn btn-default" onClick={(visible) => onToggleButton(false)}>Cancel</button>
                </form>
            </div>
        : ""
    )
}

export default AddField
