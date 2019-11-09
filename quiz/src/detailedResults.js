
import React, { Fragment } from 'react';
import './detailedResults.css';
import {Link} from 'react-router-dom';
import { db } from './firebase';

class detailedResults extends React.Component {
    state = {
        responses: {},
        quotes: {}
    };

    async componentDidMount() {
        await this.getResponses();
    }

    getResponses = async () => {
        let responses = {};
        await db.collection("users").get().then((querySnapshot) => {
            // only one user for now
            querySnapshot.forEach((doc) => {
                responses = doc.data()['responses'];
            });
        });
        let quotes = {};
        await db.collection("quotes").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                quotes[doc.id] = doc.data();
            })
        });
        this.setState({ responses, quotes });
    }

    convertName = (name) => {
        switch (name) {
            case 'sanders':
                return 'Bernie Sanders';
            case 'biden':
                return 'Joe Biden';
            case 'warren':
                return 'Elizabeth Warren';
            case 'trump':
                return 'Donald Trump';
            case 'pete':
                return 'Pete Buttigieg';
        }
        return '';
    }

    printQuotes = () => {
        let returns = [];
        for (var topic in this.state.responses) {
            console.log(topic);
            for (var question in this.state.responses[topic]) {
                // console.log(question);
                if (this.state.responses[topic][question]['answered'] === true) {
                    console.log(this.state.responses[topic][question]);
                    let sortedRanks = [];

                    for (var key in this.state.responses[topic][question]) {
                        if (this.state.responses[topic][question].hasOwnProperty(key) && key !== 'answered') {
                            sortedRanks.push( [ key, this.state.responses[topic][question][key] ] );
                        }
                    }

                    sortedRanks.sort((a, b) => a[1] - b[1]);
                    console.log(sortedRanks);


                    // console.log(this.state.quotes[topic][question][sortedRanks[0][0]]);


                    returns.push(<Fragment>
                            <hr></hr>
                            <h2>{this.state.quotes[topic][question]['blurb']}</h2>
                            <div class="subtext">{this.state.quotes[topic][question]['desc']}
                            </div>
                            
                            <ul>
                                <li><span class="number">1: {this.convertName(sortedRanks[0][0])}</span><span class="box quote">{this.state.quotes[topic][question][sortedRanks[0][0]]}</span></li>
                                <li><span class="number">2: {this.convertName(sortedRanks[1][0])}</span><span class="box quote">{this.state.quotes[topic][question][sortedRanks[1][0]]}</span></li>
                                <li><span class="number">3: {this.convertName(sortedRanks[2][0])}</span><span class="box quote">{this.state.quotes[topic][question][sortedRanks[2][0]]}</span></li>
                                <li><span class="number">4: {this.convertName(sortedRanks[3][0])}</span><span class="box quote">{this.state.quotes[topic][question][sortedRanks[3][0]]}</span></li>
                                <li><span class="number">5: {this.convertName(sortedRanks[4][0])}</span><span class="box quote">{this.state.quotes[topic][question][sortedRanks[4][0]]}</span></li>
                            </ul>
                            </Fragment>);
                        // </Fragment>
                }
            }
        }
        return returns;
    }

    render() {
      return (
        <div>
            <h1>Detailed Results</h1>
            <div class="subtext">Check out your quote rankings for each question and see which candidate said each quote. 
            </div>
            {
                this.printQuotes()
            }
        </div>

        )   
    }
}

export default detailedResults;