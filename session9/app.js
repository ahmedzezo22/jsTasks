// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const objectid = mongodb.ObjectID

const {MongoClient, ObjectID } = require('mongodb')
const conURL = "mongodb://127.0.0.1:27017"
const dbName = "ourDB"
MongoClient.connect(conURL, { useNewUrlParser: true }, (err, client)=>{
if (err) return console.log('db error')
const db = client.db(dbName)



// db.collection('student').insertMany([

//     { name: 'ahmed', class: "b" },
//     { name: 'hassan' },
//     { age: 50 },
//     { name: true }
// ])
// find 
// db.collection('student').find({name:"ahmed"}).toArray((err, data)=>{
//     console.log(data)
// })
// })
// db.collection('student').findOne({_id:new ObjectID('5fdddcacc09a44212444f673')},(err,data)=>{
//     console.log(data)
// })

})