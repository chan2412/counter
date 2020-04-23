import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: 0
    }
    }
    han=()=>
    {this.setState({name : this.state.name+1})}
    ham=()=>
    {if(this.state.name > 0)
      {
      this.setState({name : this.state.name-1})}
    }
    hax = ()=>
    {
      this.setState({name : 0})
    }
  render() {
  return (
    <div>
     <AppBar  style={{alignItems:"center",fontSize:"50px",background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}}><h9>Counter</h9>
<Container style={{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)" ,paddingLeft:"60px",width:"350px"}}>
        <Button variant="contained" style={{  color:"white",backgroundColor:"darkred",fontSize:"30px"}} onClick={this.ham} >
        -</Button><tab/>
        <Button  style={{ color:"white",backgroundColor:"#4527a0",fontSize:"20px", background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}} onClick={this.hax}>
       {this.state.name}<br/>Reset</Button><tab/>
     <Button variant="contained" style={{
     color:"white", backgroundColor:"green",fontSize:"30px" }} onClick={this.han}>
        +</Button>

     </Container></AppBar>
    </div>
  );
}
}
export default App;
