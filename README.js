# Using the Google API to post to a spreadsheet

1. ```npm install```
2. Follow instructions here to grab a ```credentials.json``` whilst logged in as the owner of the sheet you want to modify, put this in ```credentials```.
3. Copy ```config.example.js``` in the top level directory to ```config.js``` an edit in the spreadsheet ID of the spreadsheet you want to append to (development and production if different, development is used for test)
4. The first time the application is tun ```node index.js```, it will prompt for authorisation. Follow the prompts
5. ```npm run test``` to verify (modifies development sheet)

```node index.js``` to run server
