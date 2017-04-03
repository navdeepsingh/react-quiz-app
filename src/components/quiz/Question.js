import React, {Component} from 'react';

class Question extends Component{

  onChange(){
    return;
  }

  render() {
    const {question} = this.props;
    return(
      <div className="question">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            question.choices.map(choice => {
              return(
                <li className="list-group-item" key={choice.id}>
                  {choice.id} <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
                </li>
                )
              })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Question;
