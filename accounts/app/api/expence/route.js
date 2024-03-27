import knex from '@/app/knex-connection'

export async function POST(req){
    const {accountID, date, amount, remarks} =await req.json()
    const income= await knex('income').insert({
        account_id: accountID,
        date,
        amount,
        remarks
    })
    return Response.json({income})
}


export async function GET(){
    const income= await knex('income').select('*')
    return Response.json({income})
}
