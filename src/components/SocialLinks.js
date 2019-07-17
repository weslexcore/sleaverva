import React from 'react'
import fb from '../assets/img/min/fb-min.png'
import fbwhite from '../assets/img/min/fbwhite-min.png'
import headphones from '../assets/img/min/headphones.png'
import BasicModal from '../components/BasicModal'
import instagram from '../assets/img/min/instagram.png'
import MusicModal from '../components/MusicModal'

const SocialLinks = props => {
    const iconStyle = {width:'5vw', minWidth:40, maxWidth:50, margin:'0 10px'}
    const SocialElements = [
        {icon: props.inverted ? fbwhite : fb, alt:'Sleave on Facebook', url: 'https://www.facebook.com/sleaverva/'},
        {icon: props.inverted ? instagram : instagram, alt:'Sleave on Instagram', url: 'https://www.instagram.com/sleaverva/'},
        {icon: headphones, alt: 'Listen to sleave', url: '', type:'modal', modal: MusicModal},
    ]
    return (
        <div style={props.style}>
            {SocialElements.map(elem => (
                elem.type === 'modal' ? 
                <BasicModal modal={elem.modal}>
                    <div>
                        <img src={elem.icon} alt={elem.alt} style={iconStyle}/>
                    </div>
                </BasicModal>
                :
                <a key={elem.alt} href={elem.url}>
                    <img src={elem.icon} alt={elem.alt} style={iconStyle}/>
                </a>
            ))}
        </div>
    )
}

export default SocialLinks