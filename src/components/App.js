import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList';
import Scorebox from './quiz/Scorebox';
import Results from './quiz/Results';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What kind of scoping does JavaScript use?',
          choices: [
            {
              id: 'a',
              text: 'Literal'
            },
            {
              id: 'b',
              text: 'Lexical'
            },
            {
              id: 'c',
              text: 'Segmental'
            },
            {
              id: 'd',
              text: 'Sequential'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is a closure?',
          choices: [
            {
              id: 'a',
              text: 'Function objects'
            },
            {
              id: 'b',
              text: 'Scope where function’s variables are resolved'
            },
            {
              id: 'c',
              text: 'Both a and b'
            },
            {
              id: 'd',
              text: 'None of the mentioned'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What can be done in order to avoid creation of global variables in JavaScript?',
          choices: [
            {
              id: 'a',
              text: 'To use a method that defines all the variables'
            },
            {
              id: 'b',
              text: 'To use an object that has the reference to all the variables'
            },
            {
              id: 'c',
              text: 'To use global functions'
            },
            {
              id: 'd',
              text: 'To use an object as its namespace'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'How can we make methods available on all objects?',
          choices: [
            {
              id: 'a',
              text: 'Object.prototype'
            },
            {
              id: 'b',
              text: 'Object.add(methods)'
            },
            {
              id: 'c',
              text: 'Object.methods(add)'
            },
            {
              id: 'd',
              text: 'Object.add.methods(…)'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    )
  }
}

module.exports = App;
