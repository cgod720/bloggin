import React, { Component } from 'react'

class Entry extends Component {
  render(){
    return(
      <div>
      <h4>{this.props.entry.title}</h4>
      <h5>By: {this.props.entry.author}</h5>
      <p>{this.props.entry.body}</p>
      <span>
        <li>Votes: {this.props.entry.meta.votes}</li>
        <li>Favs: {this.props.entry.meta.favs}</li>
      </span>
      <button onClick={() => {
        this.props.entryDelete(this.props.entry._id, this.props.arrayIndex, this.props.currentArray)
      }}>Delete</button>
      </div>
    )
  }
}

export default Entry;
