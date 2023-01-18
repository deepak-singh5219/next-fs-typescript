import dbConnect from '../../../../config/database';
import Hero from '../../../models/HeroModel';
import type { NextApiRequest, NextApiResponse } from 'next'
dbConnect();

export default async(req:NextApiRequest, res:NextApiResponse) => {
       const {method} = req;
       
       switch (method) {
        case 'GET':
            try {

                const heros = await Hero.find({});
                if(!heros)
                {
                    res.status(200).json({
                        success:false,
                        message:'No data found'
                    })
                }

                res.status(200).json({
                    success:true,
                    heros
                })
                
            } catch (error) {
                res.status(400).json({
                    success:false,
                    message: error
                })
            }
            
            break;
        case 'POST':

        try {
             
            const data = req.body;
            if(!data) res.status(401).json({
                success:false,
                message: 'no data received'
            })

            const hero = await Hero.create(data);
            if(!hero) {
                res.status(400).json({
                    success:false,
                    message:'data not pushed to database'
                })

                res.status(200).json({
                    success:true,
                    hero
                })
            }
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message: error
            })
        }
            
            break;
       
        default:
            res.status(400).json({
                success:false
            })
            break;
       }
}