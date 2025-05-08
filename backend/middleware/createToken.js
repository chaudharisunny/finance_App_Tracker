import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createToken = (user) => {
    const payload = {
        email: user.email,
        username: user.username,
        image:user.image
    }

    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error("JWT_SECRET is not defined in .env")
    }

    return jwt.sign(payload, secret, { expiresIn: '8h' })
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.error("JWT verification failed:", error.message)
        return null
    }
}
