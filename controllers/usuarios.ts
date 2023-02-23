import { Request,Response } from "express"
import Usuario from "../models/usuario"


export const getUsuarios= async (req:Request,res:Response)=>{
    const usuarios = await Usuario.findAll();
    res.json({
        msg:"getUsuarios",
        usuarios
    })    
}

export const getUsuario=async (req:Request,res:Response)=>{
    const {id}=req.params;
    
    const usuario = await Usuario.findByPk(id);
    res.json({
        id,
        msg:"getUsuarios id",
        usuario
    })    
}

export const postUsuario=async (req:Request,res:Response)=>{
    const {body}=req;
    const newUsuario= await Usuario.create(body)
    res.json({
        newUsuario,
        msg:"postUsuario"
    })    
}

export const putUsuario=async (req:Request,res:Response)=>{
    const {id}=req.params;
    const {body}=req;
 
    const updUser= await Usuario.update(body,{
        where:{ id}
    })
    
    res.json({
        updUser,
        msg:"putUsuario"
    })    
}

export const deleteUsuario= async (req:Request,res:Response)=>{
    const {id}=req.params;
    // const delUser= await Usuario.destroy({where:{id}});//borrado fisico
    const delUser= await Usuario.update({estado:0},{
        where:{ id}
    })
    res.json({
        delUser,
        msg:"deleteUsuario"
    })    
}