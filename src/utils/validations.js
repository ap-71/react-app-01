export function validationIP(val) {
    if(val.length > 15 && /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i.test(val)) {
        return val.slice(0, val.length-1)
    }
    else if(val.length < 15 && /^[0-9.]+$/i.test(val)) {
        return val
    }
    return val.slice(0, val.length-1)
}