import { User } from "./User";

import jwt = require('jsonwebtoken')

// --> GENERAR TOKEN <--
export const tokenSing =async (user:User) => {
    return jwt.sign(
        {
            _id : user.id,
            role : user.rol
        },
        process.env.TOKEN_SECRET,{
            expiresIn : "2h"
        }
    )
}

// --> VALIDAR TOKEN <--
export const verifyToken =async (token) => {
    try {
        return jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (e) {
        return null
    }
}