import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../assets/styles/components/NewNote.css'

class NewNote extends Component {
    render(){
        return(
            <Container className="text-center align-items-center">
                <input type="text" className="input" placeholder="Write something" />
                <Button variant="secondary">+ Add note</Button>
            </Container>
        )
    }
}

export default NewNote;