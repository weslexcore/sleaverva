import React from 'react'
import {  Header } from 'semantic-ui-react'
import ParallaxBackground from './ParallaxBackground'
import SocialLinks from './SocialLinks'
// import pink from '../assets/img/cover.jpg'
import pink from '../assets/img/min/pink_cropped-min.jpg'

const ButtonStyles = {
    backgroundColor:'transparent',
    fontSize: '1.8rem', 
    color: 'white',
    border: '1px solid #fcfcfc',
    padding: '8px',
    borderRadius:'4px'
}
const Hero = props => {
    return (
        <ParallaxBackground url={pink}>
            {props.children}
            <SocialLinks inverted style={{position:'absolute', display:'flex', top:15, right:10, zIndex: 30}}/>
            <div style={{display:'flex', flexWrap:'wrap', alignContent:'center', justifyContent:'center', alignItems:'center', position:'absolute', width:'100vw', height:'100vh', 
            backgroundColor:'rgba(0,0,0,.5)', padding:10, textAlign:'center'}}>
                <Header className='logo' style={{fontSize:'9rem', color:'#fafafa', width:'100%', margin: '0 0 0 0'}}>SLEAVE</Header>
                <Header className='logo' style={{fontSize:'1.7rem', color:'#fafafa', width:'100%', margin: '-10px auto 18px auto'}}> "Don't Expect Anything" out Fall 2019 on UK Engineer Records</Header>
                <button style={ButtonStyles}>Preview Now</button>
            </div>
        </ParallaxBackground>
    )
}

export default Hero