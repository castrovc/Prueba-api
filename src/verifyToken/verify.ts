import { verifyToken } from "../models/generateToken";

export const checkAuth =async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        console.log(token)
        const tokenData= await verifyToken(token)
        console.log(tokenData)
        if(tokenData){
            next()
        }
        else{
            res.status(409)
            res.send({error:'ACCES DENIED'})
        }
    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({error:'ACCESS DENIED'})
    }
}