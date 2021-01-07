import react  from 'react';
import Header from './component/header/header';
import Card from './component/card/card'
import './App.css'
    
 
class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiData:[],
            loader:true
         }
    }
  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(response => response.json())
    .then(json => this.setState({apiData:json.Search,loader:false}))
  
  }
    render() { 
        let {loader,apiData}=this.state;
        console.log('searchdata',apiData);
        return ( <div>
   <Header/> 
   <h2 className="heading">Movies</h2>
    <div className="container">
    <div className="Wrapper">
{ loader?<h1>Loading....</h1>:
      apiData?.map((item,key)=>
          <Card item={item} key={key}/>
      )}

    
    </div>
    </div>
  
        </div> );
    }
}
 
export default App;