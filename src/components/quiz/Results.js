import React, {Component} from 'react';

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
      <div className="well">
        <h4> You Got {this.props.score} out of {this.props.questions.length} Correct </h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take again</a>
      </div>
    )
  }
}

module.exports = Results;
