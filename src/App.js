import React, { Component } from 'react'
import {  Container, Header } from 'semantic-ui-react'
//Customed
import Bio from './components/Bio'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ParallaxBackground from './components/ParallaxBackground'
import SectionContainer from './components/SectionContainer'
// import AlbumCard from './components/AlbumCard'
import EventCard from './components/EventCard'
// import StyledVideoElem from './components/StyledVideoIframe'
//Images
// import tower from './assets/img/min/lookdown.jpeg'
import skyline from './assets/img/min/headtohead.jpeg'
// Style for fonts
import './style.css'
// import fetchVideos from './clients/youtube';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: [],
      events:[
        {
          url: 'https://www.facebook.com/events/483718609034958/',
          title:'The Everafter / Nine Line / Second Suitor / Sleave +MORE',
          date: 'Sunday, July 7, 2019 at 6 PM – 10 PM',
          location: `Garden Grove Brewing & Urban Winery \n
          3445 W Cary St, Richmond, Virginia 23221`,
          imageUrl: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/64390866_614257029083678_4601687089749164032_n.jpg?_nc_cat=111&_nc_oc=AQkiiGefGQWYlirjO9If6c0mA7feTpiCtw_kJhLJ7iqST_5lVZ0wdIX9PdWxSwm7Sig&_nc_ht=scontent-iad3-1.xx&oh=ecb165ebe9e37a981423bb2ead17a0e8&oe=5DB8B367'
        }
      ]
    }
    this.music = React.createRef()
    this.events = React.createRef()
    this.about = React.createRef()
    this.hero = React.createRef()
  }

  // componentDidMount(){
  //   this.fetchResource('Youtube')
  //   this.fetchResource('Facebook')
  // }


  // fetchResource = async (type) => {
  //   switch(type){
  //     case "Youtube":
  //       const response = await fetchVideos()
  //       const videos = response.items ? response.items.map(i => i.resourceId.videoId) : []
  //       return this.setState({ videos })
  //     case 'Facebook':
  //     console.log(process.env)
  //       window.FB.api(
  //         '/428267797377367/events?access_token='+process.env.REACT_FB_TOKEN,
  //         'GET',
  //         {},
  //         function(response) {
  //             console.log(response)
  //         }
  //       );
  //     default: 
  //       break
  //   }
  // }

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
          <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
          { events.map(EVENT => <EventCard event={EVENT} />) }
          </Container>
        </SectionContainer>

        <ParallaxBackground url={skyline} position='top'/>

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




// <SectionContainer>
//   <div ref={this.music}/>
//   <Header as='h1'>Videos</Header>
//   {videos.length ? 
//   <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
//     {videos.map(id => <StyledVideoElem src={`https://www.youtube.com/embed/${id}`} id={id}/>)}
//   </Container>
//   : <a target="_blank" rel="noopener noreferrer" href={"https://youtube.com/channel/UCUdKTK5lETIcCL3MjkkJd6A"}>Unable to load videos - Check out Sleave on Youtube</a>
//   }

// </SectionContainer>