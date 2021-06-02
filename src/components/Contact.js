import React, { Component } from 'react';



class Contact extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: 'mreisdorf9717@gmail.com',
            subject: '',
            text: '',
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

       


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
                        <form action = '../../public/files/php/index.php' method = 'post'>
                            <div className = 'form-group'>
                                <label name = 'name'>Full Name</label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    name = 'name' 
                                    value = {this.state.subject}
                                    onChange = {event => this.setState({
                                        subject: event.target.value
                                    })}
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label name = 'email'>Email</label>
                                <input 
                                    type = 'email' 
                                    className = 'form-control'
                                    name = 'email'
                                    value = {this.state.from}
                                    onChange = {event => this.setState({
                                        from: event.target.value
                                    })}/>
                            </div>
                            <div className = 'form-group'>
                                <label name = 'message'>Message</label>
                                <input 
                                    type = 'text'
                                    name = 'message'
                                    className = 'form-control'
                                    value = {this.state.text}
                                    onChange = {event => this.setState({
                                        text: event.target.value
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