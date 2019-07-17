import React from 'react'
import Spotify from '../assets/img/min/spotify.png'
import Amazon from '../assets/img/min/amazon.png'
import Itunes from '../assets/img/min/apple.png'
import { Header } from 'semantic-ui-react'
import bandcampwhite from '../assets/img/min/bandcampwhite-min.png'

const musicLinks = [
    {url: 'https://music.amazon.com/albums/B07T8CSQRR?tab=CATALOG', icon: Amazon, title:'Amazon', alt: 'Sleave on Amazon'},
    {url: 'https://open.spotify.com/track/2DHeZGxLV5gobWIXWDB5nj', icon: Spotify, title:'Spotify', alt: 'Sleave on Spotify'},
    {url: 'https://music.apple.com/us/album/homebound/1469499524?i=1469499528', icon: Itunes, title:'Itunes', alt: 'Sleave on Itunes'},
    {icon: bandcampwhite, alt:'Sleave on Bandcamp', url: 'https://sleaverva.bandcamp.com'},
]

let linkStyle = { margin: '10px', display:'flex', flexWrap:'nowrap', flexGrow: 1,  flexBasis: '100%'}
let MusicContainer = { width: '100%', alignItems: 'center', display:'flex', flexWrap:'nowrap', justifyContent: 'center'}
let MusicIcon = { width: '100%' }

const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    MusicContainer = { ...MusicContainer, flexWrap: 'wrap', height: '50vh', alignContent:'center' }
    linkStyle = {...linkStyle, justifyContent: 'center'}
    MusicIcon = { ...MusicIcon, width: 'auto', maxHeight: '10vh', alignContent:'center'}
}


const MusicModal = {
    header: <Header icon='headphones' content="Let's Jam" />,
    content: (
    <div style={MusicContainer}>
        {
            musicLinks.map(link => (
            <a target="_blank" rel="noopener noreferrer" href={link.url} key={link.title} style={linkStyle}>
                <img style={MusicIcon} src={link.icon} alt={link.alt}/>
            </a>
        ))}
    </div>
    )
}

export default MusicModal