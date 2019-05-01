import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "",
      entries: []
    }
  }
  fetchEntries = () => {
    fetch('https://blogginspot.herokuapp.com/entry')
    .then((data) => {
      return data.json()
    })
    .then((jData) => {
      console.log(jData);
      this.sortEntryData(jData);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  sortEntryData = (entries) => {
    let entryData = []
    entries.forEach((entry) => {
      entryData.push(entry)
    })
    this.setEntries(entryData)
  }
  setEntries = (entry) => {
    this.setState({
      entries: entry
    })
  }

  postEntry = (entry) => {
    fetch('https://blogginspot.herokuapp.com/entry', {
      body: JSON.stringify(entry),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then((createdEntry) => {
      return createdEntry.json()
    })
    .then((jData) => {
      this.updateArray(jData, 'entries')
      this.fetchEntries()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateArray = (entry, array) => {
    this.setState((prevState) => {
      prevState[array].push(entry)
      return {
        [array]: prevState[array]
      }
    })
  }

  componentDidMount(){
    this.fetchEntries()
  }
  render(){
    return(
      <div>
        <Form
          postEntry={this.postEntry}
        />
      </div>
    )
  }
}

export default App;
