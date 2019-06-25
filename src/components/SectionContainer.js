import React from 'react'
import { Container } from 'semantic-ui-react'

const SectionContainer = props => <Container style={{padding:'50px 30px', minHeight:'100vh', ...props}}>{props.children}</Container>

export default SectionContainer