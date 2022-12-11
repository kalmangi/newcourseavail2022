// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const firebaseAdmin = require("firebase-admin");
firebaseAdmin.initializeApp();

//This connects to firestore admin. In firestore select the same project as chatbot
const db = firebaseAdmin.firestore();

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    var datetime=new Date();

    agent.add(`Welcome to my UTA course availability`+datetime);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  function getfromFirebase(agent){
      db.collection("courses").get().then((querySnapshot) => {
            
            querySnapshot.forEach(element => {
                agent.add(element.data().name+'-'+element.data().name);
                 
            });
        });
  }
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Course list', getfromFirebase);
  agent.handleRequest(intentMap);
});