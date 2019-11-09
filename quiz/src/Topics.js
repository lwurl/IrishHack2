import React from 'react';
import './topics.css';
import {Link} from 'react-router-dom';


class Topics extends React.Component {
  render() {
    return (
      <div>
        <h1>Topics</h1>

        <h2 class="topic_title">Economy</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange1" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <h2 class="topic_title">Education</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange2" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <h2 class="topic_title">Environment</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange3" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <h2 class="topic_title">Gun Control</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange4" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <h2 class="topic_title">Health Care</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange5" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <Link to='/quiz'> 
          <div className="center_div"><button type="button" className="button"><b>Take Quiz</b></button></div>
        </Link>
      </div>
    )
  }
}

export default Topics;