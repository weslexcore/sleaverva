import React from 'react'
import {Card, Container, Image} from 'semantic-ui-react'
import gold from '../assets/img/gold.jpg'

const AlbumCard = ({ album:albm }) => {
    const album = albm ? albm : {
        image: gold, 
        title:"Gold EP", 
        info: 'Spicy jalapeno bacon ipsum dolor amet pork ham hock kevin spare ribs chuck strip steak. Chicken landjaeger picanha shoulder tongue. Prosciutto bacon jowl chicken picanha rump corned beef chuck filet mignon shank pork chop.',
        url: 'https://sleaverva.bandcamp.com/album/gold-ep'
    }
    return (
        <Card style={{margin: 5}}>
            <a href={album.url} alt={album.title}>
            <Image src={album.image}></Image>
            <Container style={{padding:8}}>
                <Card.Header as='h3' style={{marginTop:3}}>{album.title}</Card.Header>
                <Card.Meta as='h3' style={{marginTop:3}}>{album.info}</Card.Meta>
            </Container>
            </a>
        </Card>
    )
}

export default AlbumCard