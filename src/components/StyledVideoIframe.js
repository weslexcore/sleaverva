import React from 'react'

const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}

const container = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
    background:'red'
}

const StyledVideoElem = props => (
    <div style={container}>
        <iframe title={`sleave_video_${props.id}`} 
            style={iframeStyle} 
            {...props} />
    </div>
)

export default StyledVideoElem