const express = require('express')                             //step 1

const cors = require('cors')

const app = express()                                          //step 2

app.use(cors())

app.use(express.static(`${__dirname}/public`))                  //step 4

app.get('/api/cat', (req, res) => res.send('barb'))

app.listen(4000,  () => {                                      //step 3 
    console.log(`avengers assemble on 4000`)                  //step 3.1
})
