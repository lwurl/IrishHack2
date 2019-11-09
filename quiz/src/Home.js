import React from 'react';
import char from './images/char.jpg'
import './home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <img src={char} alt="char"/>
        <p className="p1">Don’t know which candidate to vote for?</p>
        <p className="p2">Decide which quotes you agree with most on many topics topics in this dynamically generated quiz to discern which candidate represents your views best.</p>
        <Link to='/topics'> 
          <div className="center_div"><button type="button" className="button"><b>Start Quiz</b></button></div>
        </Link>
        </div>

    )
  }
}

export default Home;