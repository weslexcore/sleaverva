import React from 'react'
import SocialLinks from './SocialLinks'
import { Container } from 'semantic-ui-react'
import band from '../assets/img/min/band-pink.jpg'
import albumCover from '../assets/img/cover.jpg'

let SPAN_STYLE = {width:'87%', margin:'10px auto'}
let CONTAINER_STYLE = {fontSize:18, width:'90%', marginTop:15, display:'block', lineHeight:1.5, textAlign:"justify"}
let ALBUM_STYLE = {width:'60%', display:'block', margin: '20px auto'}
let CONTACT_STYLE = {display:'flex', justifyContent:'center', textAlign:'center', margin:'15px auto'}
let MOBILE_MARGIN = {}
let INDENT_STYLE = { marginLeft:40 }
let LEAD_STYLE = { fontSize:24 }
const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    SPAN_STYLE = { width:'100%', margin:'10px auto' }
    CONTAINER_STYLE = { ...CONTAINER_STYLE, width: '100%', textAlign:'initial', fontSize: 16}
    ALBUM_STYLE = {...ALBUM_STYLE, width:'90%'}
    CONTACT_STYLE = {...CONTACT_STYLE, flexWrap:'wrap'}
    MOBILE_MARGIN = {...MOBILE_MARGIN, margin: '10px 0'}
    INDENT_STYLE = { marginLeft: 'inherit'}
    LEAD_STYLE = { fontSize: 18}
}

const INDENT = props => <span style={INDENT_STYLE} {...props}>{props.children}</span>

const Bio = () => (
    <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={band} alt='Sleave' style={{width:'100%'}} />
        <p style={CONTAINER_STYLE}>
            <br/>
            <i style={LEAD_STYLE}>Sleave is a dynamic four piece whose sound brings together elements of alternative rock, punk, and American hardcore while also being reminiscent of the American grunge and emo movements of the 90's.</i>
            <br/>
            <br/>
            <span style={SPAN_STYLE}>
                <INDENT>Formed</INDENT>  in Richmond, VA in 2016, Sleave began after Julien Robert and Charlie Bowen met at a party, where they quickly bonded over a shared interest in punk and alternative music. A series of impromptu jam sessions at Julien’s parent’s house during the fall of 2015 quickly turned into a full project. During this time, Sam Mclelland joined the band on bass and in January of 2016, Sleave officially formed.
                <br/>
                <br/>
                <INDENT>The</INDENT> band’s presence grew steadily over the next two years, in which they debuted two releases ( 
                    <a href='https://sleaverva.bandcamp.com/album/gold-ep' target='_blank' rel="noopener noreferrer">‘Gold EP 2016’</a> and <a href='https://sleaverva.bandcamp.com/album/better-now-single' target='_blank' rel="noopener noreferrer">Better Now/Empty Talk 7” 2017</a>) 
                    and played countless shows in and around Richmond. The band then took a performing hiatus in 2018 to record what was rumored to be their first full length album. The band worked tirelessly with the help of Pedro Aida of <a href='http://www.audioveriterva.com/' target='_blank' rel="noopener noreferrer">Audio Verite Studios</a> and <a href='http://andreasmagnusson.com/' target='_blank' rel='noopener noreferrer'>Andreas Magnusson</a>,  both of whom they had worked with on previous releases. During this time, Daniel Salinas joined on lead guitar, Seth Tony replaced Sam Mclelland on bass and the current Sleave lineup was formed.
                <br/>
                <br/>
                <INDENT>Finally</INDENT>, in June 2019, Sleave <a href='http://engineerrecords.com/sleave-join-engineer-records/' target='_blank' rel="noopener noreferrer">announced their partnership with UK label Engineer Records</a> and that their first album was finally complete.
            </span>
            <br/>
            <br/>
            <br/>
            <span style={{fontSize:'24px', display:'block', textAlign:'center'}}><i>‘Don’t Expect Anything’</i> will be released under <a href='http://engineerrecords.com/' target='_blank' rel="noopener noreferrer">Engineer Records</a> in the Fall of 2019.</span>
            <img src={albumCover} style={ALBUM_STYLE} alt="Don't expect anything album art"/>
        </p>

        <SocialLinks style={{width:'100%', textAlign:'center', marginTop:40}}/>

        <Container style={CONTACT_STYLE}>
            <Container style={MOBILE_MARGIN}>
                <a href='http://engineerrecords.com/contact' target='_blank' rel="noopener noreferrer">Engineer Records</a><br/>
                info@engineerrecords.com
            </Container>
            
            <Container style={MOBILE_MARGIN}>
            <a href='http://www.earshotmedia.com/' target='_blank' rel="noopener noreferrer">Earshot Media</a> <br/>
            2629 Manhattan Ave PMB 301 <br/>
            Hermosa Beach, CA 90254-2447 <br/>
            </Container>
        </Container>

    </Container>
)

export default Bio