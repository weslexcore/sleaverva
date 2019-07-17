import React from 'react'



const ParallaxBackground = props => {
    let StyledBackground =  {
        backgroundImage: `url(${props.url})`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: props.position || 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // background-attachment:initial;
    }
    const mq = window.matchMedia( "(max-width: 570px)" );
    if (mq.matches) {
        StyledBackground = {...StyledBackground, width: '100vw', backgroundAttachment: 'initial'}
    }
    return <div style={StyledBackground} {...props}></div>
}

export default ParallaxBackground