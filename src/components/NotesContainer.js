import React from 'react';

import Note from './Note';

function NotesContainer(){

    return(
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <Note />
                </div>
                <div className="col-6">
                    <Note />
                </div>
            </div>
            
        </div>
    )
}

export default NotesContainer;