import React from 'react'
import {Card, Container, Image} from 'semantic-ui-react'
import band from '../assets/img/min/headtohead.jpeg'

const EventCard = ({ event:evnt }) => {
    const event = evnt ? evnt : {image: band, title:"Event Title", date: new Date().toLocaleDateString(), info: 'Spicy jalapeno bacon ipsum dolor amet pork ham hock kevin spare ribs chuck strip steak. Chicken landjaeger picanha shoulder tongue. Prosciutto bacon jowl chicken picanha rump corned beef chuck filet mignon shank pork chop.'}
    return (
        <a style={{padding: 0, margin: 0}} href={event.url} target='_blank' rel='noopener noreferrer'>
            <Card style={{margin: 5}}>
                <Image src={event.imageUrl}></Image>
                <Container style={{padding:8}}>
                    <Card.Header as='h3' style={{marginTop:3}}>{event.title}</Card.Header>
                    <Card.Meta as='h3' style={{marginTop:3}}>{event.date}</Card.Meta>
                    <Card.Meta as='h3' style={{marginTop:3}}>{event.info}</Card.Meta>
                </Container>
            </Card>
        </a>
    )
}

export default EventCard