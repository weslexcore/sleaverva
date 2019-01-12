import React from 'react'

const ParallaxBackground = props => {
    const StyledBackground =  {
        backgroundImage: `url(${props.url})`,
        height: '100vh',
        width: '100vw',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return <div style={StyledBackground} {...props}></div>
}

export default ParallaxBackground