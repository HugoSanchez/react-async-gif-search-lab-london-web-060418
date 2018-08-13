import React from 'react'

class Gif extends React.Component{

  render(){
    return (
      <li><img src={this.props.gif.images.fixed_height.url} alt=""/></li>
    )
  }

}

export default Gif
