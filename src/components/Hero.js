import React from 'react'
import {  Header } from 'semantic-ui-react'
import ParallaxBackground from './ParallaxBackground'
import SocialLinks from './SocialLinks'
import pink from '../assets/img/min/pink_cropped-min.jpg'


const Hero = props => {
    return (
        <ParallaxBackground url={pink}>
            {props.children}
            <SocialLinks inverted style={{position:'absolute', display:'flex', top:15, right:10, zIndex: 30}}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', width:'100vw', height:'100vh', backgroundColor:'rgba(0,0,0,.5)', padding:10, textAlign:'center'}}>
                <Header className='logo' style={{fontSize:'12rem', color:'#fafafa'}}>SLEAVE</Header>
                {/* <Header className='logo' style={{fontSize:'5rem', color:'#fafafa'}}>RVA</Header> */}
            </div>
        </ParallaxBackground>
    )
}

export default Hero