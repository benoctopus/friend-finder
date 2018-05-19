import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SurveyElement from '../presentational/SurveyElement'

class SurveyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {questions: 'loading'};
    this.checks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.checkTracker = this.checkTracker.bind(this)
  }

  renderQuestions(questions) {
    return questions.map((question, index) => (
      <SurveyElement
        question={question}
        name={index + 1}
        checkTracker={this.checkTracker}/>
    ))
  }

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => {
        this.setState({questions: this.renderQuestions(questions)})
      });
  }

  surveySubmit(event) {
    event.preventDefault();
    if (this.checks.includes(0)) {
      alert('please fill out all questions')
    }
    else {
      this.postFriend({
        name: this.props.username,
        photoUrl: this.props.photo ? this.props.photo : null,
        score: this.checks
      })
    }
  }

  postFriend(friend) {
    fetch('/api/newfriend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(friend)
    }).then(res => {
      console.log(res)
    })
  }

  checkTracker(key, value) {
    this.checks[key - 1] = value;
    console.log(this.checks)
  }


  render() {
    return (
      <form
        onSubmit={event => this.surveySubmit(event)}
        id='survey'>
        <ul>
          {this.state.questions}
          <input type='submit'/>
        </ul>
      </form>
    )
  }
}


export default SurveyContainer;