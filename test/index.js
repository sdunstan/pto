var test = require('tape')
var request = require('supertest')
var app = require('../server.js')

test('Sanity check', function(t) {
    t.end()
})

test('GET admin queue', function(t) {
    request(app.makeApp())
        .get('/sdunstan/steves_pto_system/1.0.0/admin')
        .end((err, res) => {
            t.equal(res.status, 200, "status should be 200")
            t.equal(1, res.body.length, "queue length should be 1")
            t.equal('bar', res.body[0]['foo'], "queue content should be equal")
            return t.end()
        })
})

test('POST pto', function(t) {
    request(app.makeApp())
        .post('/sdunstan/steves_pto_system/1.0.0/pto')
        .send({type: 'vacation', hoursRequested: 2, startDate: '2019-08-06T04:22:25.307Z'})
        .end((err, res) => {
            t.equal(res.status, 201)
            return t.end()
        })
})

test('POST bad pto request', function(t) {
    request(app.makeApp())
        .post('/sdunstan/steves_pto_system/1.0.0/pto')
        .send({type: 'x', hoursRequested: 2, startDate: '2019-08-06T04:22:25.307Z'})
        .end((err, res) => {
            t.equal(res.status, 400)
            return t.end()
        })
})

test('POST admin', function(t) {
    request(app.makeApp())
        .post('/sdunstan/steves_pto_system/1.0.0/admin/1/approve')
        .send()
        .end((err, res) => {
            t.equal(res.status, 201)
            return t.end()
        })
})

test('POST admin', function(t) {
    request(app.makeApp())
        .post('/sdunstan/steves_pto_system/1.0.0/admin/1/dooda')
        .send()
        .end((err, res) => {
            t.equal(res.status, 400)
            return t.end()
        })
})
