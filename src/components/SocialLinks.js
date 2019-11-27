import React from 'react'
import headphones from '../assets/img/min/headphones.png'
import social from '../assets/img/min/social.png'
import BasicModal from '../components/BasicModal'
import MusicModal from '../components/MusicModal'

import { MusicServices, SocialServices, SocialServicesInverted } from '../content/services'

const SocialLinks = props => {
    const iconStyle = {width:'5vw', minWidth:40, maxWidth:50, margin:'0 10px'}
    const ss = props.inverted ? SocialServicesInverted : SocialServices
    const SocialElements = [
        ...ss.links.slice(0,2),
        {icon: social, alt: 'Connect with sleave', url: '', type:'modal', modal: MusicModal(SocialServicesInverted)},
        {icon: headphones, alt: 'Listen to sleave', url: '', type:'modal', modal: MusicModal(MusicServices)}
    ]

    return (
        <div style={props.style}>
            {SocialElements.map(elem => (
                elem.type === 'modal' ? 
                <BasicModal key={elem.alt} modal={elem.modal}>
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