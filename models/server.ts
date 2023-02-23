import express,{Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';


class Server {
    
    private app :Application;
    private port:string;
    private apiPaths={
        usuarios:'/api/usuarios'
    }
    
    constructor(){
        this.app   = express();
        this.port  = process.env.PORT || '8000'; 
        //metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    //conectar db con sequalize
    async  dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error);
            throw new Error('Error bd verificar con admin');
        }
    }


    middlewares(){
        //cors
        this.app.use(cors());
        //lectura del body
        this.app.use(express.json());
        //carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('!! Servidor corriendo en puerto=> ' + this.port);
        })
    }
}

export default Server;