let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'SwaggerDetails'
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });


    callback(null, { "message": "Successfully executed" });
}