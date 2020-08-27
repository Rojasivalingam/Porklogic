const { request, response } = require('express')

const Pool =require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',               
    password:'roja1114',
    port: 5432,

})
const getUsers = (request,response) => {
    pool.query('SELECT * FROM public.user',(error,results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


   
 
pool
.connect()
.then( () => console.log("connected"))
.catch(err => console.error('connection error',err.stack))

module.exports = {  getUsers,
                 
                 }

