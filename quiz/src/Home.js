import React from 'react';
import logo from './images/logoBig.svg'
import './home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo"/>



        <p className="p1a"><b>4 out of 10 eligible voters do not vote.</b></p>
        <p className="p1b">How can we motivate the uninformed voter to find a candidate that represents them in quick, easy, and engaging way?</p>
        <p className="p1a"><b>There are currently over 20 major party candidates running for president in the 2020 election.</b> </p>
        <p className="p1b">How can we discern which candidate best represents our views on the issues that are most important to us? </p>
        <p className="p1a"><b>Over 2 million articles are published on the web everyday and with the election being one of the hottest topics. </b></p>
        <p className="p1b">How can we avoid the bias of media summaries and look directly at what candidates are saying? </p>
        <hr></hr>
        <p className="p2">Welcome to Quote Vote, a web app that helps you understand what candidates you align with. Reflect on what issues are most important to you and get a customized, dynamically generated quiz where you rank anonymized quotes from candidates. Afterwards, see who said what and view your results to discern  which candidate best represents your views. </p>
        <Link to='/topics'> 
          <div className="center_div_home"><button type="button" className="buttonMain"><b>Start Quiz</b></button></div>
        </Link>
        </div>

    )
  }
}

export default Home;