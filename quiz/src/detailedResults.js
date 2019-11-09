
import React from 'react';
import './detailedResults.css';
import {Link} from 'react-router-dom';
import { db } from './firebase';

class detailedResults extends React.Component {

    render() {
      return (
        <div>
            <h1>Detailed Results</h1>
            <div class="subtext">Check out your quote rankings for each question and see which candidate said each quote. 
            </div>
            <hr></hr>
            <h2>Minimum Wage</h2>
            
            <div class="subtext">Congress hasn't legislated a national minimum-wage since 2007 when it hiked the hourly minimum wage to $7.25 effective July 2009. Many states have since mandated a minimum wage that is higher than the federal minimum wage. Some argue it's time to increase the minimum wage on a national scale to help lift people out of povery and decrease income inequality. Others believe that a minimum wage increase hurts small businesses and encourage companies to downsize their staff.
            </div>
            <ul>
                <li> <span class="number">1:Joe Biden</span>
                <span class="box quote">It's well past time that we increase the federal minimum wage to $15</span></li>
                <li><span class="number">2: Elizabeth Warren</span><span class="box quote">We should commit to requiring federal contractors to pay workers a minimum wage of $15 an hour</span></li>
                <li><span class="number">3: Bernie Sanders</span><span class="box quote">Provide domestic workers with at least $15 minimum wage, strong protections for collective bargaining, workers' rights, and workplace safety</span></li>
                <li><span class="number">4: Pete Buttigeg</span><span class="box quote">Raise the minimum wage to $15 and ensure workers access to the predictable hours, wages, and support they deserve.</span></li>
                <li><span class="number">5: Donald Trump</span><span class="box quote">I do not support a Federal Miniumum wage --  I’d rather have the states go out and do what they have to do.  I don’t know how you live on $7.25 an hour, but I would say: let the states decide.</span></li>
            </ul>
        </div>

        )   
    }
}

export default detailedResults;