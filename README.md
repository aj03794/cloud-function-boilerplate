#### Boilerplate for creating a cloud function.

##### This app is to be used in conjunction with https://github.com/aj03794/cloud-function-deployer

##### Important to note that in order to deploy code to cloud functions that is not all in a single file, all of the js files need to be in the same directory. Those js files cannot be in subdirectories.

##### Couple of options to potentially fix this problem:
1. Use webpack to handle all of the bundling of the code.
- Problem with this is GCP needs you to specify the name of the function that will act as the `entry point` to the `cloud function`.  The way webpack bundles the file and puts it into a single file, there is not longer a `export const helloWorld = () => ...` setup
- Error we see when we deploy using `gcloud`: `Node.js module defined by file index.js is expected to export function named helloworld`

2. Use babel to just handle the transpilation.
- With this solution the name of the entry point will not be changed but we can't have subdirectories with js files in them because GCP will not be able to recognize the code.  All js files have to be inline in the same directory in order for GCP to recognize them.
- UPDATE: GCP will recognize js files in subdirectory.
- This is the better solution.
