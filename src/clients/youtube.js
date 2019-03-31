const { REACT_APP_YOUTUBE_KEY: KEY, REACT_APP_YOUTUBE_CHANNEL: CHANNELID } = process.env

const fetchVideos = async () =>{
    const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${CHANNELID}&key=${KEY}`
    const OPTIONS = {
        mode: 'cors',
        method: 'GET'
    }
    const response = await window.fetch(URL, OPTIONS)
    const json = await response.json()
    return json
}


export default fetchVideos