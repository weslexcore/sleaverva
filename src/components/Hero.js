import React from 'react'
import {  Header } from 'semantic-ui-react'
import ParallaxBackground from './ParallaxBackground'
import SocialLinks from './SocialLinks'
import BasicModal from './BasicModal'
import MusicModal from './MusicModal'
import pink from '../assets/img/min/pink_cropped-min.jpg'
import {MusicServices} from '../content/services'

let ButtonStyles = {
    backgroundColor:'transparent',
    fontSize: '1.8rem', 
    color: 'white',
    border: '1px solid #fcfcfc',
    padding: '8px',
    borderRadius:'4px'
}

let SOCIAL_STYLE = { position:'absolute', display:'flex', top:15, right:10, zIndex: 30 }
let HEADER_STYLE = { 
    display:'flex', 
    flexWrap:'wrap',
    alignContent:'center', 
    justifyContent:'center', 
    alignItems:'center', 
    position:'absolute', 
    width:'100vw', 
    height:'100vh', 
    backgroundColor:'rgba(0,0,0,.5)', 
    padding:10, 
    textAlign:'center'
}
let TITLE = { fontSize:'7rem', letterSpacing:'3px', color:'#fafafa', width:'100%', margin: '0 0 0 0' }
let SUBTITLE = { fontSize:'1.7rem', color:'#fafafa', width:'100%', margin: '-10px auto 18px auto' }
const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    ButtonStyles = { ...ButtonStyles, fontSize: '1.4rem'}
    SUBTITLE = {...SUBTITLE, fontSize: '1.4rem', width: '80%', margin: '0 auto 10px'}
    TITLE = {...TITLE, fontSize: '4rem'}
    HEADER_STYLE = {...HEADER_STYLE, padding: 0}
}

const Hero = props => {
    return (
        <ParallaxBackground url={pink}>
            {props.children}
            <SocialLinks inverted style={SOCIAL_STYLE}/>
            <div style={HEADER_STYLE}>
                <Header className='logo' style={TITLE}>SLEAVE</Header>
                <Header className='logo' style={SUBTITLE}> "Don't Expect Anything" out Fall 2019 on UK Engineer Records</Header><br/>
                <BasicModal modal={MusicModal(MusicServices)}>
                    <button style={ButtonStyles}>Preview Now</button>
                </BasicModal>
            </div>
        </ParallaxBackground>
    )
}

export default Hero