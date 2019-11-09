import React from 'react';
import './topics.css';
import {Link} from 'react-router-dom';
import gun from './images/gun.svg'
import econ from './images/economy.svg'
import edu from './images/education.svg'
import hc from './images/hc.svg'
import env from './images/env.svg'



class Topics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      percentages: {},
      value = 0
    };
    handleChange: function(event) {
      this.setState({value: event.target.value});
    };
  }

  async componentDidMount() {
    await this.getSliders();
  }

  getSliders = async () => {
    var percentages = {};
    percentages['economy'] = document.getElementById("economy").value;
    this.setState({ percentages });

    console.log(this.state.percentages);
  }

  render() {
    return (
      <div>
        <h1>Topics</h1>

        <img src={econ} alt="gun" className='icon'/>
        <h2 class="topic_title">Economy</h2>
        <div class="slidecontainer">
        <input id="economy" type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange1" step="25" list="range-labels" value={this.state.value} onChange={this.handleChange}/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <img src={edu} alt="gun" className='icon'/>
        <h2 class="topic_title">Education</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange2" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <img src={env} alt="gun" className='icon'/>
        <h2 class="topic_title">Environment</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange3" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <img src={gun} alt="gun" className='icon'/>
        <h2 class="topic_title">Gun Control</h2>
        <div class="slidecontainer">
        <input type="range" min="1" max="101" defaultValue="50" class="slider" id="myRange4" step="25" list="range-labels"/>
        <div class="label_div not">Not at all important</div>
        <div class="label_div low">Low importance</div>
        <div class="label_div neutral">Neutral</div>
        <div class="label_div important">Important</div>
        <div class="label_div very">Very important</div> 
        </div>

        <img src={hc} alt="gun" className='icon'/>
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
          <div className="center_div"><button type="button" className="buttonTop"><b>Take Quiz</b></button></div>
        </Link>
      </div>
    )
  }
}

export default Topics;