import React from 'react';
import pete from './images/pete.jpg';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import warren from './images/warren.jpg';
import sanders from './images/bernie.jpg';
import './Results.css'
import {Link} from 'react-router-dom';
import { db } from './firebase';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: {
        'biden':86,
        'pete':64,
        'sanders':15,
        'trump':15,
        'warren':0
      },
      percentages: {
        'biden':0,
        'pete':0,
        'sanders':0,
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
        'sanders': {
          'url': 'https://sanderssanders.com/issues/',
          'img': sanders
        },
        'warren': {
          'url': 'https://elizabethwarren.com/plans',
          'img': warren
        },
        'trump': {
          'url': 'https://www.promiseskept.com/about/',
          'img': trump
        }
      },
      sortedPerentages: []
    };
    this.loadResults = this.loadResults.bind(this);
  }

  async componentDidMount() {
    await this.loadResults();
  }

  loadResults = async () => {
    let results = {};
    await db.collection("users").get().then((querySnapshot) => {
      // only one user for now
      querySnapshot.forEach((doc) => {
        results = doc.data()['totals'];
      });
    });
    var percentages = {}
    var total_points = parseInt(results.biden) + parseInt(results.pete) + parseInt(results.sanders) + parseInt(results.trump) + parseInt(results.warren);
    var num_questions = total_points/20;
    var high_score = num_questions * 10;
    percentages['biden'] = parseInt(results.biden)/high_score * 100;
    percentages['pete'] = parseInt(results.pete)/high_score * 100;
    percentages['sanders'] = parseInt(results.sanders)/high_score * 100;
    percentages['trump'] = parseInt(results.trump)/high_score * 100;
    percentages['warren'] = parseInt(results.warren)/high_score * 100;

    let sortedPerentages = [];

    for (var key in percentages) {
        if (percentages.hasOwnProperty(key)) {
          sortedPerentages.push( [ key, percentages[key] ] );
        }
    }

    sortedPerentages.sort((a, b) => b[1] - a[1]);
    console.log(sortedPerentages);

    this.setState({ percentages, sortedPerentages });

    console.log(this.state.sortedPerentages);
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        {
          this.state.sortedPerentages.map((candidate, index) => {
            // return this.state.candidates[candidate[0]].img
            if (index == 0){
              return <p key={index} className="c1"><a href={this.state.candidates[candidate[0]].url}><img src={this.state.candidates[candidate[0]].img} alt="char" className='i1' /></a> {this.state.percentages[candidate[0]].toFixed(2)}% match</p>
            } else {
              return <p key={index} className="c2"><a href={this.state.candidates[candidate[0]].url}><img src={this.state.candidates[candidate[0]].img} alt="char" className='i2' /></a> {this.state.percentages[candidate[0]].toFixed(2)}% match</p>
            }
          })
        }
        <p className="c3">Click on a candidate's picture to learn more about their vision for America.</p>
        <Link to='/DetailedResults'> 
            <div className="center_div"><button type="button" className="buttonResults"><b>Detailed Results</b></button></div>
        </Link>
        <Link to='/Home'> 
            <div className="center_div"><button type="button" className="buttonResults"><b>Restart</b></button></div>
        </Link>
        </div>

    )
  }
}

export default Results;