import { MongoClient } from 'mongodb'
const getDatabase = () => {
    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    let dbConnect = null
    return {
        acceptDb(callback){
            client.connect((err, db) => {
                if(err || !db){
                    return callback(err)
                }
                dbConnect = db.db('soccerdb');
                console.log('DB 구성에서 몽고DB에 접속하다')
                return callback()
            })
        },
        getDb(){ return dbConnect}

    }
}
export default getDatabase

