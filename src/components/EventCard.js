import React from 'react'
import {Card, Container, Image, Icon} from 'semantic-ui-react'
import band from '../assets/img/min/headtohead.jpeg'

let CARD_STYLE = { margin: 5 }
const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    CARD_STYLE = { margin: 5, visibility: 'visible' }
}

const getOpacity = date => {
    const TODAY = new Date()
    const eventDate = new Date(date)
    return eventDate < TODAY ? { ...CARD_STYLE, opacity:.5 }  : CARD_STYLE
}

const EventCard = ({ event:evnt }) => {
    const event = evnt || {}
    const eventDate = event.start_time.split(/[-+ :T]/);
    const date = new Date();
    date.setUTCFullYear(eventDate[0]);
    date.setUTCMonth(eventDate[1] - 1);
    date.setUTCDate(eventDate[2]);
    date.setUTCHours(eventDate[3]);
    date.setUTCMinutes(eventDate[4]);
    date.setUTCSeconds(eventDate[5]);
    return (
        <a className='grid-item' href={`https://facebook.com/events/${event.id}`} target='_blank' rel='noopener noreferrer'>
            <Card style={getOpacity(date)}>
                <Image src={event.cover.source || band}></Image>
                <Container style={{padding:8}}>
                    <Card.Header as='h3' style={{marginTop:3}}>{event.name}</Card.Header>
                    <Card.Meta as='h3' style={{marginTop:3}}><Icon name='calendar' style={{paddingRight:'5px'}}/>{date.toLocaleDateString()}</Card.Meta>
                    {event.place ? 
                        <Card.Meta as='h3' style={{marginTop:3}}><Icon name='pin' style={{paddingRight:'5px'}}/> {event.place.name}</Card.Meta>
                        : null
                        }
                </Container>
            </Card>
        </a>
    )
}

export default EventCard