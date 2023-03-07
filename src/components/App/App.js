import React, { Component } from 'react';
import './App.css';
import { 
  getUrls,
  deleteUrl
} from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => {
      this.setState({ urls: data.urls })
    })
  }

  addNewUrl = (newUrl) => {
    this.setState({ urls: [...this.state.urls, newUrl]})
  }

  removeUrlDisplay = (id) => {
    const filteredUrls = this.state.urls.filter(url => url.id !== id);
    this.setState({ urls: filteredUrls });
    deleteUrl(id)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls} deleteUrl={this.removeUrlDisplay}/>
      </main>
    );
  }
}

export default App;
