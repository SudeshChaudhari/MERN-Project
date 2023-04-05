import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        
        <div className="col-md-3">
            <div className="card border-primary mb-3 my-3 mx-3">
                <div className="card-header bg-transparent border-dark" style={{ "--bs-border-opacity": "0"}}>{note.title}</div>
                <div className="card-body text-success">
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer bg-transparent border-dark" style={{ "--bs-border-opacity": "0"}}>
                    <div className="btn-wrapper text-center clearfix">
                        <button type="button" className="btn btn-info btn-sm float-start" onClick={() => { updateNote(note) }}>Update</button>
                        <button type="button" className="btn btn-danger btn-sm float-end" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Noteitem
