import React from 'react';
import pete from './images/pete.jpg';
import biden from './images/biden.jpg';
import trump from './images/trump.jpg';
import warren from './images/warren.jpg';
import bernie from './images/bernie.jpg';
import './Results.css'
import {Link} from 'react-router-dom';

class Results extends React.Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <p className="c1"><a href="https://peteforamerica.com/issues/"><img src={pete} alt="char" className='i1'/></a> Candidate  info.</p>
        <p className="c2"><a href="https://joebiden.com/joes-vision/"><img src={biden} alt="char" className='i2'/></a> Candidate info.</p>
        <p className="c2"><a href="https://www.promiseskept.com/about/"><img src={trump} alt="char" className='i2'/></a> Candidate info.</p>
        <p className="c2"><a href="https://elizabethwarren.com/plans"><img src={warren} alt="char" className='i2'/></a> Candidate info.</p>
        <p className="c2"><a href="https://berniesanders.com/issues/"><img src={bernie} alt="char" className='i2'/></a> Candidate info.</p>
        <p className="c3">Click on a candidate's picture to learn more about their vision for America.</p>
        <Link to='/Home'> 
            <div className="center_div"><button type="button" className="buttonResults"><b>Restart</b></button></div>
        </Link>
        </div>

    )
  }
}

export default Results;