import React, { Component } from 'react'
import {  Header, Container } from 'semantic-ui-react'
//Customed
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ParallaxBackground from './components/ParallaxBackground'
import SectionContainer from './components/SectionContainer'
import AlbumCard from './components/AlbumCard'
import EventCard from './components/EventCard'
import SocialLinks from './components/SocialLinks'
import StyledVideoElem from './components/StyledVideoIframe'
//Images
import band from './assets/img/min/cuts-min.jpg'
import tower from './assets/img/min/lookdown.jpeg'
import skyline from './assets/img/min/sit-min.jpg'
// Style for fonts
import './style.css'
import fetchVideos from './clients/youtube';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: []
    }
    this.music = React.createRef()
    this.events = React.createRef()
    this.about = React.createRef()
    this.hero = React.createRef()
  }

  componentDidMount(){
    this.fetchResource('Youtube')
  }

  fetchResource = async (type) => {
    switch(type){
      case "Youtube":
        const response = await fetchVideos()
        const videos = response.items ? response.items.map(i => i.resourceId.videoId) : []
        return this.setState({ videos })
      default: 
        break
    }
  }

  scrollToRef = ref => {
    window.scrollTo({
      top:this[ref].current.offsetTop -20,
      behavior: 'smooth'
    })
  }

  render() {
    const { videos = [] } = this.state
    return (
      <React.Fragment>

        <Sidebar scrollToRef={this.scrollToRef}/>

        <Hero>
          <div ref={this.hero}/>
        </Hero>
        
        <SectionContainer>
          <div ref={this.events}/>
          <Header as='h1'>Events</Header>
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <EventCard />
            {/* <EventCard />
            <EventCard />
            <EventCard /> */}
          </Container>
        </SectionContainer>
        
        <ParallaxBackground url={skyline} position='top'/>

        <SectionContainer>
          <div ref={this.music}/>
          <Header as='h1'>Videos</Header>
          {videos.length ? 
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {videos.map(id => <StyledVideoElem src={`https://www.youtube.com/embed/${id}`} id={id}/>)}
          </Container>
          : <a target="_blank" rel="noopener noreferrer" href={"https://youtube.com/channel/UCUdKTK5lETIcCL3MjkkJd6A"}>Unable to load videos - Check out Sleave on Youtube</a>
          }
       
        </SectionContainer>

        <ParallaxBackground url={tower}/>

        <SectionContainer>
          <div ref={this.about} />
          <Header as='h1'>About</Header>
          <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={band} alt='Sleave' style={{width:'100%'}} />
            <p style={{fontSize:18, width:'90%', marginTop:15, display:'block'}}>
              Spicy jalapeno bacon ipsum dolor amet cow kevin tail, shankle ham flank bresaola beef ribs swine chicken andouille pancetta biltong landjaeger short loin. Meatloaf kevin flank tenderloin cupim ham hock capicola ground round. Beef pig kevin meatloaf filet mignon strip steak doner sirloin frankfurter. Short loin shank boudin bacon beef shankle sausage ground round meatloaf. Picanha prosciutto sausage, pancetta pork chop pork loin capicola boudin.
            </p>

            <SocialLinks style={{width:'100%', textAlign:'center', marginTop:40}}/>

          </Container>
        </SectionContainer>
      </React.Fragment>
    )
  }
}

export default App
