import React from 'react';
import char from './images/char.jpg'
import './Results.css'
import {Link} from 'react-router-dom';

class Results extends React.Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <p className="c1"><img src={char} alt="char" className='i1'/> Candidate  info.</p>
        <p className="c2"><img src={char} alt="char" className='i2'/> Candidate info.</p>
        <p className="c2"><img src={char} alt="char" className='i2'/> Candidate info.</p>
        <p className="c2"><img src={char} alt="char" className='i2'/> Candidate info.</p>
        <p className="c2"><img src={char} alt="char" className='i2'/> Candidate info.</p>

        <Link to='/Home'> 
            <button type="button" className="button"><b>Restart</b></button>
        </Link>
        </div>

    )
  }
}

export default Results;