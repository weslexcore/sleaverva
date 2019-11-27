import Spotify from '../assets/img/min/spotify.png'
import Amazon from '../assets/img/min/amazon.png'
import Itunes from '../assets/img/min/apple.png'
import bandcampwhite from '../assets/img/min/bandcampwhite-min.png'
import instagram from '../assets/img/min/instagram.png'
import twitter from '../assets/img/min/twitter.png'
import fb from '../assets/img/min/fb-min.png'
import fbwhite from '../assets/img/min/fbwhite-min.png'
import bandsintown from '../assets/img/min/bandsintown.png'

export const MusicServices = {
    "links": [
        {"url": "https://music.amazon.com/artists/B07TCK9296?tab=CATALOG&ref=dm_wcp_artist_link_ad", "icon": Amazon, "title":"Amazon", alt: "Sleave on Amazon"},
        {"url": "https://open.spotify.com/artist/3aL2qD5eKYUakCpYvBQL7b", "icon": Spotify, "title":"Spotify", alt: "Sleave on Spotify"},
        {"url": "https://music.apple.com/us/artist/sleave/1469499526", "icon": Itunes, "title":"Itunes", alt: "Sleave on Itunes"},
        {"icon": bandcampwhite, alt:"Sleave on Bandcamp", "url": "https://sleaverva.bandcamp.com"},
    ],
    "header": "Let's Jam!"
}

export const SocialServices = ({
    links: [
        {   icon: fb, alt:'Sleave on Facebook', url: 'https://facebook.com/sleaveofficial' },
        {   icon: instagram, alt:'Sleave on Instagram', url: 'https://www.instagram.com/sleaveband/' },
        {   icon: twitter, alt:'Sleave on Twitter', url: 'https://twitter.com/sleaveband/' },
        {   icon: bandsintown, alt:'Sleave on Bands In Town', url: 'https://www.bandsintown.com/a/13078862' },
    ],
    header: "Let's Connect!"
})


export const SocialServicesInverted = ({
    links: [
        {   icon: fbwhite, alt:'Sleave on Facebook', url: 'https://facebook.com/sleaveofficial' },
        {   icon: instagram, alt:'Sleave on Instagram', url: 'https://www.instagram.com/sleaveband/' },
        {   icon: twitter, alt:'Sleave on Twitter', url: 'https://twitter.com/sleaveband/' },
        {   icon: bandsintown, alt:'Sleave on Bands In Town', url: 'https://www.bandsintown.com/a/13078862' },
    ],
    header: "Let's Connect!"
})
