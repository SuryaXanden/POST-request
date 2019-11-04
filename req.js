const request = require('request')

const make_a_post_request = options => {
    // console.log( JSON.stringify( options ) )
    return new Promise( ( resolve , reject ) => {
        request(options, ( error , response , body ) => {
            if ( !error && response.statusCode == 200 ) {
                // console.log( body )
                resolve( body )
            } else {
                // console.log( error )
                reject( error )
            }
        })
    })
}
