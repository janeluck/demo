export const identityFn = val => val

function parseUrl0(url){
    const obj = new URL(url)
    return {
        protocol: url.protocol,
        username: url.username,
        password: url.password,
        hostname: url.hostname,
        path: url.path,
        search: url.search,
        hash: url.hash
    }
}

function parseUrl(url){

    'protocol://username:password@hostname/path;a=2;b=3?search#hash'

    const re = /^(\w+)\:\/\/(\w+)/

    const obj = new URL(url)
    return {
        protocol: url.protocol,
        username: url.username,
        password: url.password,
        hostname: url.hostname,
        path: url.path,
        param: url.param,
        search: url.search,
        hash: url.hash
    }
}
