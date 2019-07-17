import React from 'react'
import { Container } from 'semantic-ui-react'


let CONTAINER_STYLE = { padding:'50px 30px', minHeight:'100vh' }
const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    CONTAINER_STYLE = { ...CONTAINER_STYLE, padding: '40px 8px'}
}

const SectionContainer = props => <Container style={{...CONTAINER_STYLE, ...props}}>{props.children}</Container>

export default SectionContainer