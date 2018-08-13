import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

  state = {
    gifs: []
  }

  onSubmitSearch = (searchTerm) => {

    console.log(searchTerm)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(res => this.setState({
        gifs: res.data.slice(0, 3)
      })
    )
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=Dolphins&api_key=dc6zaTOxFJmzC&rating=g')
      .then(res => res.json())
      .then(res => this.setState({
        gifs: res.data.slice(0, 3)
      })
    )
  }

  render(){
    return (
      <div>
      <GifSearch onSubmitSearch={this.onSubmitSearch}/>
      <GifList list={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
