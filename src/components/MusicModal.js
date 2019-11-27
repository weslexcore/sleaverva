import React from 'react'
import { Header } from 'semantic-ui-react'


let linkStyle = { margin: '10px', display: 'flex', flexWrap: 'nowrap', flexGrow: 1, flexBasis: '100%' }
let MusicContainer = { width: '100%', alignItems: 'center', display: 'flex', flexWrap: 'nowrap', justifyContent: 'center' }
let MusicIcon = { width: '100%' }

const mq = window.matchMedia("(max-width: 570px)");
if (mq.matches) {
    MusicContainer = { ...MusicContainer, flexWrap: 'wrap', height: '50vh', alignContent: 'center' }
    linkStyle = { ...linkStyle, justifyContent: 'center' }
    MusicIcon = { ...MusicIcon, width: 'auto', maxHeight: '10vh', alignContent: 'center' }
}


const MusicModal = ({ links, header }) => ({
    header: <Header icon='headphones' content={header} />,
    content: (
        <div style={MusicContainer}>
            {
                links.map(link => (
                    <a key={link.url} target="_blank" rel="noopener noreferrer" href={link.url} style={linkStyle}>
                        <img style={MusicIcon} src={link.icon} alt={link.alt} />
                    </a>
                ))}
        </div>
    )
})

export default MusicModal