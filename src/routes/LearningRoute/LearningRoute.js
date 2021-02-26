import React, { Component } from 'react'
import { Input, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import LangApiService from '../../services/lang-api-service';

class LearningRoute extends Component {
  state = {
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    guessAnswered: false,
    isCorrect: false,
  }

  handleformSubmit(e) {
    e.preventDefault();
    const { guess } = e.target;

    LangApiService.postGuess(guess.value)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    LangApiService.languageHeadRequest()
      .then(head => {
        this.setState({
          nextWord: head.nextWord,
          totalScore: head.totalScore,
          wordCorrectCount: head.wordCorrectCount,
          wordIncorrectCount: head.wordIncorrectCount
        });
      })
  }

  render() {
    return (
      <section>
        <h2>Translate the word:</h2>
        <span>
          {this.state.nextWord}
        </span>
        <div className='scoreboard'>
          <p>
            Your total score is: {this.state.totalScore}
          </p>
          <p>
            You have answered this word correctly {this.state.wordCorrectCount} times.
          </p>
          <p>
            You have answered this word incorrectly {this.state.wordIncorrectCount} times.
          </p>
        </div>
        <form
          className='learningForm'
          onSubmit={e => this.handleformSubmit(e)}>
          <div>
            <Label htmlFor='learn-guess-input'>
              What's the translation for this word?
            </Label>
            <br />
            <Input
              type='text'
              id='learn-guess-input'
              name='guess'
              required />
          </div>
          <Button type='submit'>
            Submit your answer
          </Button>
        </form>

        <div className='DisplayScore'>
          <p>
            Your total score is: {this.state.totalScore}
          </p>
        </div>

      </section>
    );
  }
}

export default LearningRoute
