import React, {Component} from 'react';
import Solution from './Solution';

class Results extends Component{

  render() {
    let percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'Awesome Work!';
    } else if (percent < 80 && percent > 60) {
      var message = 'You Did ok!';
    } else {
      var message = 'Not Good!';
    }
    return(
      <div>
        <div className="well">
          <h4> You Got {this.props.score} out of {this.props.questions.length} Correct </h4>
          <h1>{percent}% - {message}</h1>
          <hr />
          <a href="#solutions" className="btn btn-default btn-success">Check Solutions</a> <a href="/app" className="btn btn-default">Take again</a>
        </div>
        <div id="solutions">
          {
            this.props.questions.map(question => {
                  return <Solution question={question} key={question.id} {...this.props} />
            })
          }
        </div>
      </div>

    )
  }
}

module.exports = Results;
