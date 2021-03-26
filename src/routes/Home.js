import './Home.css';
import React, { Component } from 'react';
import Movies from '../components/Movies'

class Home extends Component{
  state={
    isLoading:true,
    movies:[]
  }
  getFetch=async()=>{
    const {data:{movies}}=await fetch("https://yts-proxy.now.sh/list_movies.json?minimum_rating=9").then(response=>response.json());
    this.setState({isLoading:false,movies:movies})
  }
  componentDidMount(){
    this.getFetch();
  }
  render(){
    const {isLoading, movies}=this.state;
    return(
      <div>
        <div className="NAV">

        </div>
        <div className="moviesWrapper">
          {isLoading ? "Loading..." : (
            movies.map((movie)=>{
              return (
              <Movies 
              title={movie.title} 
              id={movie.id}
              genres={movie.genres}
              poster={movie.medium_cover_image}
              rating={movie.rating}
              summary={movie.summary}
              />
              )
            })
            
          )}
        </div>
      </div>
    )
  }
}


export default Home;



