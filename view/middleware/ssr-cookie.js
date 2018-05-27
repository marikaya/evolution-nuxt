import axios from 'axios'

export default function({isServer, req}) {
    console.log(req.sessionID);
    if (isServer) {
//        axios.defaults.headers.common.cookie = req.headers.cookie
        axios.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;
    }
}