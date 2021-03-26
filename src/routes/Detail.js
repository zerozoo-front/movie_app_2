import React from "react";
import "../Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const{ location, history }= this.props;
        if(location.state===undefined){
            history.push('/');
        }

    }
    render(){
        const {location}=this.props;
        if(location.state){
        return(
        <div className="wrapper">
            <div className="stateWraper">
            <img src={location.state.poster} />
            <div>{location.state.title}</div>
            <div>{location.state.id}</div>
            <div>{location.state.genres}</div>
            <div>{location.state.rating}</div>
            <div>{location.state.summary}</div>
            </div>
            
        </div>
        )
        }else{return null;}
    }


}



export default Detail;