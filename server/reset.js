/**
 * Simple Bot Sift. DAG's 'Slack' node implementation
 */

'use strict';

var slack = require('./slack.js');
const logger = require('simple-console-logger');
logger.configure({level: process.env.LOGLEVEL || 'info'});

// Entry point for DAG node
module.exports = function(got) {
  const inData = got['in'];
  var results = [];
  var botToken;
  // Extract the Slack API token

  // Iterate over all report records and reset them.
  for (var d of inData.data) {
    logger.debug('RESETTING: ', d);
    results.push({
      name: "reports",
      key: d.key,
      value: "No report yet"
    });
  }

  // Reset current summary
  results.push({
    "name": "currentSummary",
    "key": "current",
    "value": null
  });



  return results;
};
