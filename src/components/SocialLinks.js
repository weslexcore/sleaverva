import React from 'react'
import fb from '../assets/img/fb.png'
import fbwhite from '../assets/img/fbwhite.png'
import bandcamp from '../assets/img/bandcamp.png'
import bandcampwhite from '../assets/img/bandcampwhite.png'

const SocialLinks = props => {
    const iconStyle = {width:'5vw', minWidth:40, maxWidth:50, margin:'0 10px'}
    const SocialElements = [
        {icon: props.inverted ? fbwhite : fb, alt:'Sleave on Facebook', url: 'https://www.facebook.com/sleaverva/'},
        {icon: props.inverted ? bandcampwhite : bandcamp, alt:'Sleave on Bandcamp', url: 'https://sleaverva.bandcamp.com'}
    ]
    return (
        <div style={props.style}>
            {SocialElements.map(elem => (
                <a href={elem.url}>
                    <img src={elem.icon} alt={elem.alt} style={iconStyle}/>
                </a>
            ))}
        </div>
    )
}

export default SocialLinks