const http = require('http')
const { off } = require('process')
const port = 3000

const server = http.createServer(function(req, res){

})

server.listen(port, function(error){
    if(error) {
        console.log('Something went wrong', error)

    }else {
        console.log('Service is listening on port' + port)
    }
})