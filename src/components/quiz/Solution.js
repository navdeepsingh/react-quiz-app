import React, {Component} from 'react';

class Solution extends Component{

  render() {
    const {question} = this.props;
    const correctAnswer = question.choices.find(choice => question.correct == choice.id);
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{question.id}. Question</h3>
        </div>
        <div className="panel-body">
          <h4>{question.text}</h4>
          <p>Answer: {correctAnswer.text}</p>

        </div>
      </div>
    )
  }
}

module.exports = Solution;
