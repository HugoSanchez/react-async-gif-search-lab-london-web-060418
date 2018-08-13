import React from 'react'

import Gif from './Gif'

class GifList extends React.Component{

  render(){
    console.log('hello')
    return (
      <ul>
      {this.props.list.map(gif => <Gif gif={gif}/>)}
      </ul>
    )
  }

}

export default GifList
