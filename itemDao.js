const AWS = require('aws-sdk')
const parse = AWS.DynamoDB.Converter.input
const TABLE_NAME = "ShopItem"
module.exports = class ItemDao {
  constructor(client) {
    this.dynamodb = client
  }
  put(item) {
    var params = {
      Item: parse(item)['M'], 
      TableName: TABLE_NAME
    }
    console.log(params);
    return this.dynamodb.putItem(params).promise()
  }
  get(keys) {
    var params = {
      Key: parse(keys)['M'], 
      TableName: TABLE_NAME
    };
    return this.dynamodb.getItem(params).promise();
  }
}