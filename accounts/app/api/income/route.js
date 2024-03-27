import knex from '@/app/knex-connection'

export async function POST(req){
    const {accountID, date, amount, remarks} =await req.json()
    const expenses= await knex('expenses').insert({
        account_id: accountID,
        date,
        amount,
        remarks
    })
    return Response.json({expenses})
}


export async function GET(){
    const expenses= await knex('expenses').select('*')
    return Response.json({expenses})
}
