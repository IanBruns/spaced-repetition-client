import React, { Component } from 'react'
import { Input, Label } from '../../components/Form/Form'
import LangApiService from '../../services/lang-api-service';

class LearningRoute extends Component {
  state = {
    head: []
  }

  componentDidMount() {
    LangApiService.languageHeadRequest()
      .then(head => {
        this.setState({ head });
      })
  }

  render() {
    return (
      <section>
        <h2>Translate the word:</h2>
        <form
          className='LoginForm'>
          <div>
            <Label htmlFor='guess-input'>
              {this.state.head.nextWord}
            </Label>
            <br />
            <Input
              ref={this.firstInput}
              id='login-username-input'
              name='username'
              required
            />
          </div>
        </form>
      </section>
    );
  }
}

export default LearningRoute
