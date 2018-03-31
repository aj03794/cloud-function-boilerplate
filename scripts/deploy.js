const request = require('request')
const resolvePath = require('path').resolve

const bundledAppLocation = resolvePath(__dirname, '../', 'dist')
const appName = 'example-cloud-function'
const entryPoint = 'helloworld'

const body = JSON.stringify({ appName, appLocation: bundledAppLocation, entryPoint })

request({
	method: 'POST',
	uri: `http://localhost:9000/api/appName/appLocation`,
	headers: { 'content-type': 'application/json' },
	body
}, (err, response, body) => {
	if (err) {
		return console.log('Something went wrong', err)
	}
	console.log('res', response.statusCode)
})
