import React, { Component } from 'react';
import {  Header, Container, Image } from 'semantic-ui-react'
//Customed
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ParallaxBackground from './components/ParallaxBackground'
import SectionContainer from './components/SectionContainer'
import AlbumCard from './components/AlbumCard'
import EventCard from './components/EventCard'
import SocialLinks from './components/SocialLinks'
//Images
import band from './assets/img/mirroredBand.jpg'
import jump from './assets/img/jump.jpg'
import skyline from './assets/img/skyline.jpg'

import './style.css'

class App extends Component {

  constructor(props){
    super(props)
    this.music = React.createRef()
    this.events = React.createRef()
    this.about = React.createRef()
    this.hero = React.createRef()
  }

  scrollToRef = ref => {
    window.scrollTo({
      top:this[ref].current.offsetTop -20,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <React.Fragment>

        <Sidebar scrollToRef={this.scrollToRef}/>

        <Hero>
          <div ref={this.hero}/>
        </Hero>
        
        <SectionContainer >
          <div ref={this.events}/>
          <Header as='h1'>Events</Header>
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </Container>
        </SectionContainer>
        
        <ParallaxBackground url={jump}/>

        <SectionContainer>
          <div ref={this.music}/>
          <Header as='h1'>Music</Header>
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </Container>
        </SectionContainer>

        <ParallaxBackground url={skyline}/>

        <SectionContainer>
          <div ref={this.about} />
          <Header as='h1'>About</Header>
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <Image src={band} style={{width:'100%'}} />
            <p style={{fontSize:18, width:'80%', margin:'10px auto'}}>
              Spicy jalapeno bacon ipsum dolor amet cow kevin tail, shankle ham flank bresaola beef ribs swine chicken andouille pancetta biltong landjaeger short loin. Meatloaf kevin flank tenderloin cupim ham hock capicola ground round. Beef pig kevin meatloaf filet mignon strip steak doner sirloin frankfurter. Short loin shank boudin bacon beef shankle sausage ground round meatloaf. Picanha prosciutto sausage, pancetta pork chop pork loin capicola boudin.
            </p>

            <SocialLinks style={{width:'100%', textAlign:'center', marginTop:40}}/>

          </Container>
        </SectionContainer>
      </React.Fragment>
    );
  }
}

export default App;
