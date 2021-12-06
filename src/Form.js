import React, { Component } from "react";
import './Form.css';
class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'pizza'
        }
    }
    handleUsernameChange = event =>{
        this.setState({
            username:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    render() {
        return (
            <form class="login-form" onSubmit={this.handleSubmit}>
                <h1> test form</h1>
                <div class="form-input-material">
                    <input type="text" name="username" id="username" placeholder="Username" autocomplete="off" class="form-control-material" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <button type="submit" class="btn btn-primary btn-ghost">Submit</button>
            </form>
        )
    }
}

export default Form