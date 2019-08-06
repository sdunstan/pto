const requestTimeOff = (req, res) => {
    const ptoRequest = req.body
    if (ptoRequest.type === 'vacation') {
        res.status(201)
        res.send('ok')    
    }
    else {
        res.status(400)
        res.send('bad request') // Just mock a bad request to show API working
    }
}

const approveOrDeny = (req, res) => {
    if (req.params['id'] === '1' && req.params['approveOrDeny'] === 'approve') {
        res.status(201)
        res.send('ok')    
    }
    else {
        res.status(400)
        res.send('bad request')    
    }
}

const adminQueue = (req, res) => {
    res.status(200)

    const queue = [
        {foo: 'bar'}
    ]
    res.json(queue)
}

module.exports = { requestTimeOff, approveOrDeny, adminQueue } 