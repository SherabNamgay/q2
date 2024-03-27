import crypto from 'crypto'
import knex from '@/app/knex-connection'


export async function GET(req){
    const searchParams= req.nextUrl.searchParams;
    const accountNumber= searchParams.get('account_number')
    let query =knex('accounts')
    if (accountNumber) query = query.where("account_number", accountNumber);
    var user = await query.select('*')
    return Response.json({data: user})
}

export async function POST(req){
    const {userName, email, balance, accountNumber, password}= await req.json()
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    const data = await knex('accounts')
     .insert({
        user_name:userName,
        email,
        balance,
        account_number:accountNumber,
        salt,
        hashed_password:hash
     }).returning('*')
    return Response.json({data})
}