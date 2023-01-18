import dbConnect from '../../../../config/database';
import Hero from '../../../models/HeroModel';
import type { NextApiRequest, NextApiResponse } from 'next'
dbConnect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
    const {id} = req.query;
    const {method} = req;

    switch (method) {
        case 'GET':

        const hero = await Hero.findById(id);
        if(!hero){
            res.status(200).json({
                success:false,
                message:"not found"
            })
        }

        res.status(200).json({
            success:true,
            hero
        })  
            break;
        case 'PUT':

        const data = req.body;
        if(!data) res.status(400).json({
            success:false,
            message: 'no data received'
        })
        
        const updatedUser = await Hero.findByIdAndUpdate(id, data);
        if(!updatedUser) {
            res.status(400).json({
                success:false,
                message:'data not updated on database'
            })
        }

        res.status(200).json({
            success:true,
            updatedUser
        })
     
            break;
        case 'DELETE':
            
        const deletedUser = await Hero.findByIdAndDelete(id);
        if(!deletedUser) {
            res.status(400).json({
                success:false,
                message:'not deleted'
            })
        }

        res.status(200).json({
            success:true,
            deletedUser
        })
            break;

    
        default:
        res.status(400).json({
            success:false
        })
            break;
    }
}