import React, { Component } from "react";
import axios from 'axios';
import './Form.css';

const backend_url="http://form-bff1-form-ui-test.mycluster-fra05-b3-382931-f8656339b93feef0fdd8e60603bc7a7f-0000.eu-de.containers.appdomain.cloud/addBook";

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            book_name: '',
            author: ''
        }
    }
    handlebookNameChange = event =>{
        this.setState({
            book_name:event.target.value
        })
    }
    handleAuthorChange = event =>{
        this.setState({
            author:event.target.value
        })
    }

    handleSubmit = event =>{
        //alert(`${this.state.bookName} ${this.state.author}`)
        event.preventDefault()
        //console.log(this.state)
        //here will connect to the expresjs backend and make an api call
        // let's try to make a fetch request first
        //axios.post("http://localhost:3000/addBook", this.state)
        axios.post(backend_url, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <form class="login-form" onSubmit={this.handleSubmit}>
                <h1>Add new book</h1>
                <div class="form-input-material">
                    <input type="text" name="bookName" id="bookName" placeholder="Book Title" autocomplete="off" class="form-control-material" value={this.state.book_name} onChange={this.handlebookNameChange} />
                    <br></br><input type="text" name="author" id="author" placeholder="Author" autocomplete="off" class="form-control-material" value={this.state.author} onChange={this.handleAuthorChange} />

                </div>
                <button type="submit" class="btn btn-primary btn-ghost">Submit</button>
            </form>
        )
    }
}

export default Form