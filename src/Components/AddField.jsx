import React from 'react'

function AddField() {
    return (
        <div className="col-md-offset-7 col-md-5">
        <form action method="POST" className="form-inline">
            <div className="form-group">
                <label className="sr-only" htmlFor>label</label>
                <input type="text" className="form-control" placeholder="Task Name" />
            </div>
            <div className="form-group">
                <label className="sr-only" htmlFor>label</label>
                <select name="ds" id="inputDs" className="form-control" required="required">
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-default">Cancel</button>
        </form>
    </div>
    )
}

export default AddField
