import React, { Component } from "react";
import axios from 'axios';
import './Form.css';
class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            book_id: 0 ,
            bookName: '',
            author: ''
        }
    }
    handlebookNameChange = event =>{
        this.setState({
            bookName:event.target.value
        })
    }
    handleAuthorChange = event =>{
        this.setState({
            author:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.bookName} ${this.state.author}`)
        this.state.book_id = Math.floor(Math.random() * 3000);
        event.preventDefault()
        console.log(this.state)
        //here will connect to the expresjs backend and make an api call
        // let's try to make a fetch request first
        axios.post("http://" + process.env.backend_service_host + ":" + process.env.backend_service_port + "/addBook", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        
        event.preventDefault()
    }
    render() {
        return (
            <form class="login-form" onSubmit={this.handleSubmit}>
                <h1>Add new book</h1>
                <div class="form-input-material">
                    <input type="text" name="bookName" id="bookName" placeholder="Book Title" autocomplete="off" class="form-control-material" value={this.state.bookName} onChange={this.handlebookNameChange} />
                    <br></br><input type="text" name="author" id="author" placeholder="Author" autocomplete="off" class="form-control-material" value={this.state.author} onChange={this.handleAuthorChange} />

                </div>
                <button type="submit" class="btn btn-primary btn-ghost">Submit</button>
            </form>
        )
    }
}

export default Form