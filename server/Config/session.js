module.exports = {
    /*
     * Defaults to file storing in server/session folder.
     * Supported: "file", "cookie", "database", "apc",
     *            "memcached", "redis", "array"
     */
    store: 'file',

    session: {
        /*
         * forces a session that is "uninitialized" to be saved to the store.
         * A session is uninitialized when it is new but not modified.
         * default: false
         */
        saveUninitialized: true,

        /*
         * forces session to be saved even when unmodified.
         */
        resave: false,

        /*
         * forces a cookie set on every response. This resets the expiration date.
         * default: false
         */
        rolling: true,

        /*
         * Cookie specific settings
         */
        cookie: {
            /*
             * Cookie's max age. (in miliseconds) defaults to : 5 minutes
             */
            maxAge: 300000,

            /*
             * Specifies the boolean value for the HttpOnly Set-Cookie attribute.
             */
            httpOnly: true,

            /*
             * A secure cookie will only be sent to the server
             * when a request is made using SSL and the HTTPS protocol
             */
            secure: false
        }
    }
}