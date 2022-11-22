const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'Pin_11_piN',
    host:'localhost',
    port:3000,
    database:'restapi'
})
module.exports = pool