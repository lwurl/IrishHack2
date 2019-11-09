import React from 'react';
import pete from './images/pete.jpg';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import warren from './images/warren.jpg';
import bernie from './images/bernie.jpg';
import './Results.css'
import {Link} from 'react-router-dom';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: {
        'biden':86,
        'pete':64,
        'bernie':15,
        'trump':15,
        'warren':0
      },
      percentages: {
        'biden':0,
        'pete':0,
        'bernie':0,
        'trump':0,
        'warren':0
      },
      candidates: {
        'biden': {
          'url': 'https://joebiden.com/joes-vision/',
          'img': biden
        },
        'pete': {
          'url': 'https://peteforamerica.com/issues/',
          'img': pete
        },
        'bernie': {
          'url': 'https://berniesanders.com/issues/',
          'img': bernie
        },
        'warren': {
          'url': 'https://elizabethwarren.com/plans',
          'img': warren
        },
        'trump': {
          'url': 'https://www.promiseskept.com/about/',
          'img': trump
        }
      }
    };;
  }

  async componentDidMount() {
    await this.loadResults();
  }

  loadResults = async () => {
    var percentages = {}
    var total_points = this.state.results.biden + this.state.results.pete + this.state.results.bernie + this.state.results.trump + this.state.results.warren;
    var num_questions = total_points/20;
    var high_score = num_questions * 10;
    percentages['biden'] = this.state.results.biden/high_score * 100;
    percentages['pete'] = this.state.results.pete/high_score * 100;
    percentages['bernie'] = this.state.results.bernie/high_score * 100;
    percentages['trump'] = this.state.results.trump/high_score * 100;
    percentages['warren'] = this.state.results.warren/high_score * 100;

    this.setState({ percentages });
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        <p className="c1"><a href={this.state.candidates.pete.url}><img src={this.state.candidates.pete.img} alt="char" className='i1'/></a> {this.state.percentages['pete'].toFixed(2)}% Candidate  info.</p>
        <p className="c2"><a href={this.state.candidates.biden.url}><img src={this.state.candidates.biden.img} alt="char" className='i2'/></a> {this.state.percentages['biden'].toFixed(2)}% Candidate info.</p>
        <p className="c2"><a href={this.state.candidates.trump.url}><img src={this.state.candidates.trump.img} alt="char" className='i2'/></a> {this.state.percentages['trump'].toFixed(2)}% Candidate info.</p>
        <p className="c2"><a href={this.state.candidates.bernie.url}><img src={this.state.candidates.bernie.img} alt="char" className='i2'/></a> {this.state.percentages['bernie'].toFixed(2)}% Candidate info.</p>
        <p className="c2"><a href={this.state.candidates.warren.url}><img src={this.state.candidates.warren.img} alt="char" className='i2'/></a> {this.state.percentages['warren'].toFixed(2)}% Candidate info.</p>
        <p className="c3">Click on a candidate's picture to learn more about their vision for America.</p>
        <Link to='/Home'> 
            <div className="center_div"><button type="button" className="buttonResults"><b>Restart</b></button></div>
        </Link>
        </div>

    )
  }
}

export default Results;