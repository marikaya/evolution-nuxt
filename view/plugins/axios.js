import axios from 'axios'

export default function (req) {
    let options = {}
    // The server-side needs a full url to works
    if (process.SERVER_BUILD) {
        options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
        options.headers = req.headers
    }
    return axios.create(options)
}