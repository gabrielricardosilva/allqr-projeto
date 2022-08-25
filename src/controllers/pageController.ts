import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'


export const home = (req:Request, res: Response) =>{
    res.render('pages/index')
}

export const pedidos = (req:Request, res: Response) =>{
    res.render('pages/pedidos')
    
}
export const historia = (req:Request, res: Response) =>{
    res.render('pages/historia')
    
}

export const cardapio = (req:Request, res: Response) =>{
    res.render('pages/cardapio')
}

