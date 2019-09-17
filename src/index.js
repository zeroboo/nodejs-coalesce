`use strict`

function coalesce()
{
    let len = arguments.length;
    for (let i=0; i<len; i++) {
        if (arguments[i] !== null && arguments[i] !== undefined) {
            return arguments[i];
        }
    }
    return null;
}


module.exports = coalesce;