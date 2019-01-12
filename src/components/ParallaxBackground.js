import React from 'react'

const ParallaxBackground = props => {
    const StyledBackground =  {
        backgroundImage: `url(${props.url})`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: '',
        backgroundSize: 'cover'
    }
    return <div style={StyledBackground} {...props}></div>
}

export default ParallaxBackground