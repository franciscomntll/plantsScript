import mongoose from 'mongoose'

const conectorDB = () => {
    
    const db = mongoose.connection

    db.on('connecting', _ => {
        console.log("Estoy conectando a la base de datos")
    })

     mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        keepAliveInitialDelay: 300000
    })
    .catch( (err) => console.log(err))

   db.on('open', _ => {
       console.log("Conexion con exito a base de datos")
   })

   db.on('error', err => {
       console.log(err)
   })
}

export default conectorDB;




