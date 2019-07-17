import request from 'request'

const fetchFacebookEvents = async () => {
    const url = `https://graph.facebook.com/v3.3/428267797377367?fields=events%7Bplace%2Cid%2Cend_time%2Cstart_time%2Cdescription%2Cname%2Ccover%7D&access_token=${process.env.REACT_APP_FB_TOKEN}`
    return new Promise((resolve, reject) => {
        request(url, (err, _, body)=>{
            if (err) reject(err)
            else {
                resolve(JSON.parse(body))
            }
        })
    })
}

export default fetchFacebookEvents