import React from 'react'
import fb from '../assets/img/min/fb-min.png'
import fbwhite from '../assets/img/min/fbwhite-min.png'
import bandcamp from '../assets/img/min/bandcamp-min.png'
import bandcampwhite from '../assets/img/min/bandcampwhite-min.png'
import youtube from '../assets/img/youtube.png'

const SocialLinks = props => {
    const iconStyle = {width:'5vw', minWidth:40, maxWidth:50, margin:'0 10px'}
    const SocialElements = [
        {icon: youtube, alt: 'Sleave on Youtube', url: 'https://youtube.com/channel/UCUdKTK5lETIcCL3MjkkJd6A'},
        {icon: props.inverted ? fbwhite : fb, alt:'Sleave on Facebook', url: 'https://www.facebook.com/sleaverva/'},
        {icon: props.inverted ? bandcampwhite : bandcamp, alt:'Sleave on Bandcamp', url: 'https://sleaverva.bandcamp.com'}
    ]
    return (
        <div style={props.style}>
            {SocialElements.map(elem => (
                <a key={elem.alt} 
                    href={elem.url}>
                    <img src={elem.icon} alt={elem.alt} style={iconStyle}/>
                </a>
            ))}
        </div>
    )
}

export default SocialLinks