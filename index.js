const AWS = require('aws-sdk')
const uuid = require('node-uuid')
AWS.config.update({
  // accessKeyId: 'AKID', 
  // secretAccessKey: 'SECRET', 
  region: 'ap-northeast-1'
});
const ItemDao = require('./itemDao')
var itemDao = new ItemDao(new AWS.DynamoDB())
itemDao.put({
  "id": uuid.v4(),
  "name": "Ballpoint Pen",
  "description": "I have a pen~",
  "amount": 1
}).then((result) => {
  console.log(result);
  itemDao.get({"id": "1"}).then((getResult) => {
    console.log(getResult.Item);
  })
})