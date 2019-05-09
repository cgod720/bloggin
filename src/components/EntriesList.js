import React, { Component } from 'react'
import Entry from './Entry'

class EntriesList extends Component {
  render(){
    return(
      <div>
        {this.props.entries.map((entry, index) => {
          return(
            <Entry
              key={index}
              arrayIndex={index}
              entry={entry}
              entryDelete={this.props.entryDelete}
              currentArray='entries'
            />
          )
        })}
      </div>
    )
  }
}

export default EntriesList;
