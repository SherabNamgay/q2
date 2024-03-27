import crypto from 'crypto'
import knex from '@/app/knex-connection'

export async function POST(req){
    const {email, password}= await req.json()
    const [foundUser] = await knex('accounts')
        .where('email', email)
        .select('*')
    const hash= crypto.pbkdf2Sync(password, foundUser.salt, 1000, 64, 'sha512').toString('hex')

    const validLogin = hash === foundUser.hashed_password

    if (validLogin) return Response.json({
        data:{
            user_name: foundUser.user_name,
            account_number: foundUser.account_number,
            email: foundUser.email,
            balance: foundUser.balance
        }
    })
    else 
    alert("incorrect password")
    return new Response("incorrect password", {status: 401})
}