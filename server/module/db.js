

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const ObjeactId = MongoDB.ObjectID;
const Config = require("./config")
// 封装连接数据库操作
class DB {
  constructor(){
    this.dbClient = "";
    this.connect();
  }
  static getInstance(){
      if(!DB.instance){
          DB.instance = new DB();
      }
      return DB.instance;
  }
  // 连接数据库
  connect(){
    return new Promise((resolve,reject)=>{
      if(!this.dbClient){
        MongoClient.connect(Config.dbUrl,(err,client)=>{
          if(err){
            reject(err);
            throw err;
          }
          this.dbClient =client.db(Config.dbName);
          resolve(this.dbClient);
        });
      }else{
        resolve(this.dbClient);
      }
    })
  }
  // 转换id
  getObjectId(id){
    return new ObjeactId(id);
  }
  // 查询全部
  find(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        let result =  db.collection(collectionName).find(json);
          result.toArray((err,docs)=>{
            if(err){
              reject(err);
            }
            resolve(docs);
          })
      })
    })
  }
  // 增加
  insertOne(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        let result = db.collection(collectionName).insert(json,(err,result)=>{
          err ? reject(err) : resolve(result)
        });
      })
    })
  }
  //删除
  remove(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        let result = db.collection(collectionName).remove(json,(err,result)=>{
          err ? reject(err) : resolve(result)
        });
      })
    })
  }
  //更新
  update(collectionName,json,data){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        let result = db.collection(collectionName).update(json,{$set:data})
      })
    })
  }
}

module.exports = DB.getInstance();
