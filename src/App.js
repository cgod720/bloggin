import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import EntriesList from './components/EntriesList';

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

  entryDelete = (elementId, arrayIndex, currentArray) => {
    fetch(`https://blogginspot.herokuapp.com/entry/${elementId}`, {
      method: 'DELETE'
    })
    .then((data) => {
      this.removeFromArray(currentArray, arrayIndex)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  removeFromArray =(array, arrayIndex) => {
    this.setState((prevState) => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  incrementMe = (entry, arrayIndex) => {
    this.setState({
      // entries[arrayIndex].meta.favs:
    })
  }

  componentDidMount(){
    this.fetchEntries()
  }
  render(){
    console.table(this.state.entries);
    return(
      <div>
        <h1>Bloggin' Spot</h1>
        <EntriesList
          entries={this.state.entries}
          entryDelete={this.entryDelete}
        />
        <Form
          postEntry={this.postEntry}
        />
      </div>
    )
  }
}

export default App;
