/**
 * [package Response]
 * @param  {[Intger]} code [http code]
 * @param  {[String]} msg  [message]
 * @param  {[JSON]} data   [json or data]
 * @return {[JSON]}        [JSON]
 */
exports.response = function (code, msg, data) {
    let time = new Date();
    let response = {
        code : code,
        info  : msg,
        data : data
    };
    console.log(time.toLocaleTimeString() +' - ' + msg);
    return response;
}
