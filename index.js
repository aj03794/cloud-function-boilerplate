// import uuid from 'uuid'
// const uuid = require('uuid')
const path = require('path')
const z = require('./dist/index.js').z

exports.helloworld = (req, res) => {
    z(req, res)
}
