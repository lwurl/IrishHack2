import React from 'react';
import './topics.css';

class Topics extends React.Component {
  render() {
    return (
      <div>
        <div>Topics</div>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange" step="25" list="range-labels"/>
        <div class="1">Not at all important Low Importance</div>
        <div class="id2">Low importance</div>
          <datalist id="range-labels" class="dl">
          <option value="0" label="Not at all important" />
          <option value="20" label="Low importance" />
          <option value="45" label="Neutral" />
          <option value="75" label="Important" />
          <option value="100" label="Very Important" />    
        </datalist>
        </div>
      </div>
    )
  }
}

export default Topics;