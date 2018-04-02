import { merge } from 'lodash'

export const helloworld = (req, res) => {
    const x = { some: 1 }
    const y = { some: 2 }
  // Example input: {"message": "Hello!"}
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('No message defined!')
  } else {
    // Everything is okay.
    console.log(req.body.message)
    res.status(200).send('Success: ' + req.body.message + merge(x, y))
  }
}
