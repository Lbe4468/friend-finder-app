// Require in needed npm packages
const express = require('express');
// Initialize express and set to const app
const app = express();
// Store a port number in a variable for your app to listen to
const PORT =  8080;

// Get request for root route
app.get('/', (req, res) => {
  res.send('Jibberish');
});

// Tell express what port to listen on
app.listen(PORT, () => {
  console.log("yeah it's working");
});

/**
 * ONE
 * ======================================================
 * RUN NPM INSTALL
 * WAIT UNTIL YOU HAVE YOUR PACKAGE.JSON & NODE_MODULES
 * RUN YOUR SERVER USING 
 * ======================================================
 * node index.js
 * ======================================================
 * NAVIGATE TO YOUR FILE THROUGH LOCALHOST
 * (i.e. localhost:<your port number>)
 * CONFIRM THAT YOU CAN SEE THE RESPONSE
 * 
 * TWO
 * ======================================================
 * IN YOUR GIT BASH/TERMINAL RUN:
 * ======================================================
 * npm install -g nodemon
 * ======================================================
 * 
 * THREE
 * ======================================================
 * IN YOUR PACKAGE.JSON LOOK FOR THE "SCRIPTS" OBJECT
 * IN THAT OBJECT YOU'LL SEE A TEST SCRIPT
 * ======================================================
 * "test": "echo \"Error: no test specified\" && exit 1"
 * ======================================================
 * CREATE A NEW LINE UNDER "test" 
 * (DON'T FORGET TO ADD A COMMA AT THE END OF "test")
 * ON THIS LINE TYPE
 * ======================================================
 * "start": "nodemon index.js"
 * ======================================================
 * YOUR SCRIPT OBJECT SHOULD NOW LOOK LIKE THIS
 * ======================================================
 * "scripts": {
 * "test": "echo \"Error: no test specified\" && exit 1",
 * "start": "nodemon index.js"
 * },
 * ======================================================
 * 
 * FOUR
 * ======================================================
 * CLOSE YOUR SERVER
 * LAUNCH YOUR SERVER AGAIN USING THIS COMMAND:
 * ======================================================
 * npm start
 * ======================================================
 * YOU'LL SEE SOME MAGIC APPEAR FROM NODEMON COMMAND LINE
 * 
 * FIVE
 * ======================================================
 * CONFIRM THAT YOUR APP IS WORKING BY NAVIGATING TO THE ROUTE
 * NOW GO TO THE INDEX.JS FILE AND CHANGE THE RES.SEND
 * STATEMENT IN THE 'app.get' ROUTE HANDLER
 * ======================================================
 * app.get('/', (req, res) => {
 *  res.send(<PUT SOMETHING ELSE HERE>);
 * });
 * ======================================================
 * SAVE YOUR FILE BUT DO NOT STOP YOUR SERVER
 * NAVIGATE BACK TO YOUR APP PAGE AND REFRESH
 * YOU SHOULD NOW SEE IT AUTO UPDATE WITHOUT HAVING
 * TO RESTART YOUR SERVER MANUALLY
 * 
 * YOU'RE WELCOME ^.^
 */