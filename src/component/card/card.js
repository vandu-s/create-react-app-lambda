import React, { Component } from 'react';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    let  {Poster,Title} =this.props.item;
    return (

      <>
      <div className='card'>
        <img className="thumbnail" src={Poster} alt="img"/>
        <div className="overlay">
         <div className="content">{Title}</div>
    
        </div>
      </div>

      </>
     );
  }
}
 
export default Card;

