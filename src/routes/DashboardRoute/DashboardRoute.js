import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LangApiService from '../../services/lang-api-service';

class DashboardRoute extends Component {
  state = {
    words: [],
    language: '',
    totalCorrect: 0,
  }

  componentDidMount() {
    LangApiService.getAllWords()
      .then(res => {
        console.log(res);
        this.setState({
          words: res.words,
          language: res.language.name,
          totalCorrect: res.language.total_score
        })
      })
  }

  render() {
    return (
      <section className='a'>
        <h2>Dashboard</h2>
        <h2>{`Language: ${this.state.language}`}</h2>
        <p>{`Total correct answers: ${this.state.totalCorrect}`}</p>
        <Link to='/learn'>
          <button>
            Start practicing
          </button>
        </Link>

        <h3>Words to practice</h3>
      </section>
    );
  }
}

export default DashboardRoute