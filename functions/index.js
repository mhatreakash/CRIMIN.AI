'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
  	databaseURL: 'ws://chatbot-rektta.firebaseio.com/'
});
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }


	function fileReportHandler(agent){
     const t1 = agent.parameters.prtype;
     const t2 = agent.parameters.name;
     const t3 = agent.parameters.college;
     const t4 = agent.parameters.branch;
     const t5 = agent.parameters.year;
  	 const t6 = agent.parameters.desc;
     const t7 = agent.parameters.when;
  	 const t8 = agent.parameters.where;
  	 const t9 = agent.parameters.who;
     const cdate = new Date().toLocaleString();
     
     
     
     return admin.database().ref('data').push().set({
       cdate: cdate,
       name: t2,
       college: t3,
       branch: t4,
       year: t5,
       prtype: t1,
       desc: t6,
       when: t7,
       where: t8,
       who: t9
     });
   }
   
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('FileReport', fileReportHandler);
  agent.handleRequest(intentMap);
});
