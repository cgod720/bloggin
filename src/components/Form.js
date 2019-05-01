import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      author: '',
      body: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  handleBodyChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postEntry(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      title: '',
      author: '',
      body: ''
    })
  }

  render(){
    return(
      <div>
      <h1>Bloggin' Spot</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="Author"
            onChange={this.handleAuthorChange}
            value={this.state.author}
          />
          <input
            type="text"
            className="big"
            placeholder="Body"
            onChange={this.handleBodyChange}
            value={this.state.body}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
