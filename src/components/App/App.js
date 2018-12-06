import React, { Component } from "react";
import data from "../../components/data.json";
import Header from '../header/header.js'
import Info from '../info/info.js'
import Container from '../container/container.js';
import PortfolioCard from "../portfolioCard/portfolioCard.js";
import Desc from "../desc/Desc.js";
import Footer from '../footer/footer.js'

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      data,
      info: "About",
      banner: "Featured Apps",
      desc: "Hey, I'm Rommel Montilus, a web developer based in New Jersey with an eccentric appreciation for basketball and gaming. I came across coding a bit later in life, but the bug finally caught me. Check out my Featured Apps above for some insight into what's going on in my head.",
      icon: "",
      link: ""
      

    }

    this.handleClick=this.handleClick.bind(this);
  

  }

  componentDidMount() {
    console.log(this.state);
    

  };

  handleClick (event)  {
    console.log(event);
    if (event.title === "Featured Apps"){
      this.setState({ banner: event.title,
                      desc:event.description,
                      icon:"",
                      link: event.link},() => {
  });
    }
    if (event.title !== "Featured Apps"){
        this.setState({ banner: event.title,
                        desc:event.description,
                        icon:"fas fa-arrow-circle-right",
                        link:event.link},() => {
    });

   

  }
}
  
    // Must output some JSX
    render() {
        return (
        <div>
        <Header 
                handleClick = {this.handleClick}
                title="Featured Apps"
                description="Hey, I'm Rommel Montilus, a web developer based in New Jersey with an eccentric appreciation for basketball and gaming. I came across coding a bit later in life, but the bug finally caught me. Check out my Featured Apps above for some insight into what's going on in my head. " />
                

        <Info banner={this.state.banner}
              icon={this.state.icon} 
              link={this.state.link}/>
          <Container>
              {this.state.data.map(data => (
                <PortfolioCard
                    key={data.id}
                    value={data.id}
                    image={data.image}
                    alt={data.alt}
                    title={data.title}
                    handleClick = {this.handleClick}
                    description={data.description}
                    link={data.link}
                />
              ))}
          </Container>
          <Desc desc ={this.state.desc} />
          <Footer />
        </div>
        );
      }


};



export default App;