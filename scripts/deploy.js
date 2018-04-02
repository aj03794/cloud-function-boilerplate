const request = require('request')
const resolvePath = require('path').resolve

const bundledAppLocation = resolvePath(__dirname, '../')
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

// import { exec } from 'child_process'

// const exec = require('child_process').exec
//
// const deploy = () => {
// 	const appName = 'example-cloud-function'
// 	const appLocation = resolvePath(__dirname, '../', 'dist')
// 	const entryPoint = 'helloworld'
// 	console.log('appName', appName)
// 	console.log('appLocation', appLocation)
// 	console.log('entryPoint', entryPoint)
// 	// exec(`gcloud beta functions deploy ${appName} --entry-point ${entryPoint} --trigger-http`, (err, stdout, stderr) => {
// 	return exec(`gcloud beta functions deploy ${appName} --entry-point ${entryPoint} --trigger-http`,
// 		{
// 			cwd: appLocation
// 		},
// 		(err, stdout, stderr) => {
// 			if (err) {
// 				console.log('Something went wrong', err)
// 				return { message: 'Something went wrong uploading' }
// 			}
// 			console.log(stdout)
// 			return { message: 'Upload Successful' }
// 		}
// 	)
// }
