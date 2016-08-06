const getBabelRelayPlugin = require('babel-relay-plugin');
// schema.json must be in internals folder
const schemaData = require('./schema.json').data;

module.exports = getBabelRelayPlugin(schemaData);
