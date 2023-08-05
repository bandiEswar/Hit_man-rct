import React, { Component } from 'react'
import './Styles.css';
class RevTimer extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            count:0
        }
    }
    componentDidMount(){
      Document.title='Lets play'
        this.interval=setInterval(this.tick,1000);

    }
    tick=()=>{
         if(this.state.time!=0){
            this.setState({
                time:this.state.time-1
            })
        }
    }
    click =()=>{if(this.state.time>0){
      this.setState({count:this.state.count+1})
    }}
  render() {
    return (
      <div className='bg'>
        <h1>Click the tom image as many times as you can in {this.state.time} seconds</h1>
        {/* <img src={require("./Pic2.webp")} > */}
    <img src='https://w7.pngwing.com/pngs/930/888/png-transparent-marvel-comics-incredible-hulk-hulk-youtube-cartoon-drawing-she-hulk-fictional-characters-superhero-comic-book-thumbnail.png' onClick={this.click} ></img><br />
        <h2>Score:{this.state.count}</h2>
        {this.state.time===0&&
        <h2> Wow!! so strong you beat the hulk {this.state.count} Times in 10 seconds</h2>}
        <button onClick={()=>{
          this.setState({time:10,count:0})
        }}>RESTART</button>
      
      </div>
    )
  }
}

export default RevTimer