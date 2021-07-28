const WSRunner = require('./ws')
const httpRunner = require('./http')
 
 const run = () => {
    WSRunner(httpRunner())
}
 
module.exports = run;