const requestTimeOff = (req, res) => {
    const company = dbo.getCompany('steve') // should grab user from authentication header info 
    const ptoRequest = req.body
    const count = dbo.insertRequest(company, ptoRequest)
    if (count === 1) {
        res.status(201)
        res.send('ok')    
    }
    else {
        res.status(400)
        res.send('bad request') // Just mock a bad request to show API working
    }
}

const approveOrDeny = (req, res) => {
    const company = dbo.getCompany('steve') // should grab user from authentication header info 
    const count = dbo.updateRequestStatus(company, req.params['id'], req.params['approveOrDeny'])
    if (count === 1) {
        res.status(201)
        res.send('ok')    
    }
    else {
        res.status(400)
        res.send('bad request')    
    }
}

const adminQueue = (req, res) => {
    const company = dbo.getCompany('steve') // should grab user from authentication header info 
    const queue = dbo.getAdminRequests(company)
    res.status(200)
    res.json(queue)
}

const dbo = {
    getCompany: function(user) {
        // Lookup company from user id
        return 1
    },

    insertRequest: function(company, ptoRequest) {
        // "insert into request..."
        // simulate something going wrong...
        if (ptoRequest.type === 'vacation') {
            return 1
        }
        else {
            return 0
        }
    },

    updateRequestStatus:  function(company, id, status) {
        // hardcoded to only allow updte of id === '1'
        // simulates "update request set status = $status where id = $id"
        if (id === '1') {
            return 1
        }
        else {
            return 0
        }
    },

    getAdminRequests: function(company) {
        const queue = [
            {foo: 'bar'}
        ]
        return queue
    }
}

module.exports = { requestTimeOff, approveOrDeny, adminQueue } 