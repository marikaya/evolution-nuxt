export default function ({ req, redirect }) {
    if (!req.userCan('access sentinel')) {
        return redirect('/404')
    }
}