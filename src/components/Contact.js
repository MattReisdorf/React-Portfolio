import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'localhost:3000/public/files/php/index.php';

class Contact extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            error: null,
            mailSent: false
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(
                error => this.setState({
                    error: error.message
                })
            )


        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div className = 'container'>
                <div className = 'row' id = 'contact'>
                    <div className = 'col-sm-12'>
                        <p className = 'centered' id = 'contact-title'>Contact</p>
                    </div>
                </div>
                <div className = 'row row-margin-2'>

                    <div className = 'col-sm-12'>
                        <form action = '#'>
                            <div className = 'form-group'>
                                <label name = 'name'>Name</label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    name = 'name' 
                                    value = {this.state.name}
                                    onChange = {event => this.setState({
                                        name: event.target.value
                                    })}
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label name = 'email'>Email</label>
                                <input 
                                    type = 'email' 
                                    className = 'form-control'
                                    name = 'email'
                                    value = {this.state.email}
                                    onChange = {event => this.setState({
                                        email: event.target.value
                                    })}/>
                            </div>
                            <div className = 'form-group'>
                                <label name = 'message'>Message</label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control'
                                    value = {this.state.message}
                                    onChange = {event => this.setState({
                                        message: event.target.value
                                    })}/>
                            </div>
                            <button type = 'submit' className = 'btn btn-primary' onClick = {event => this.handleFormSubmit(event)}>Submit</button>
                    
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Contact;