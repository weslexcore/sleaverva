import React, { Component } from 'react'
import {  Container, Header } from 'semantic-ui-react'
import Masonry from 'react-masonry-component'
//Customed
import Bio from './components/Bio'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ParallaxBackground from './components/ParallaxBackground'
import SectionContainer from './components/SectionContainer'
import EventCard from './components/EventCard'
import StyledVideoElem from './components/StyledVideoIframe'
//Images
import bandStair from './assets/img/min/band-stair-min.jpg'
import bandOverlook from './assets/img/min/band-overlook-min.jpg'
// Style for fonts
import './style.css'
// Data fetching
import fetchFacebookEvents from './clients/fetchFacebookEvents'

// import eventJSONRAW from './tempevent.json'

let CONTAINER_STYLE= {width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}
const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
  CONTAINER_STYLE = { margin: 0 }
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: [],
      events: []
    }
    this.music = React.createRef()
    this.events = React.createRef()
    this.about = React.createRef()
    this.hero = React.createRef()
    this.videos = React.createRef()
  }

  componentDidMount = async () => {
    this.fetchFacebook()
  }


  fetchFacebook = async () => {
    try{
      const { events: { data } } = await fetchFacebookEvents()
      const sorted = data.sort((a,b) => a.start_date > b.start_date ? -1 : 1)
      this.setState({events: sorted})
    }
    catch(err){
      // this.setState({events: eventJSONRAW})
    }
    
  }

  scrollToRef = ref => {
    window.scrollTo({
      top:this[ref].current.offsetTop -20,
      behavior: 'smooth'
    })
  }

  render() {
    const { events } = this.state
    return (
      <React.Fragment>
        <Sidebar scrollToRef={this.scrollToRef}/>
        <Hero>
          <div ref={this.hero}/>
        </Hero>  
        
        <SectionContainer>
          <div ref={this.events}/>
          <Header as='h1'>Events</Header>
          <Masonry  elementType={'div'} options={{gutter: 10, fitWidth: true, transitionDuration:'0.5s'}} style={CONTAINER_STYLE}>
          { events.length >= 8 ? 
            events.slice(0, 8).map(EVENT => <EventCard key={EVENT.id} event={EVENT} />)
            : events.map(EVENT => <EventCard key={EVENT.id} event={EVENT} />) }
          </Masonry>
        </SectionContainer>

        <ParallaxBackground url={bandStair} position='top'/>

        <SectionContainer>
          <div ref={this.videos} />
          <Header as='h1'>Videos</Header>
          <Container style={CONTAINER_STYLE}>
            <StyledVideoElem title='Sleave - Homebound' src="https://www.youtube-nocookie.com/embed/5ymu5cv3smg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></StyledVideoElem>
          </Container>
        </SectionContainer>

        <ParallaxBackground url={bandOverlook} position='center'/>

        <SectionContainer>
          <div ref={this.about} />
          <Header as='h1'>About</Header>
          <Bio/>
        </SectionContainer>
      </React.Fragment>
    )
  }
}

export default App
