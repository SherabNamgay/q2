import knex from '@/app/knex-connection'

export async function GET(req, {params}) {
    const { id } = params
    const expenses = await knex('expenses').where('id', id).select('*')
    return Response.json({expenses})
}

export async function PUT(req, {params}) {
    const { id } = params
    const { date, amount, remarks} = await req.json()
    const expenses = await knex('expenses').where('id', id).update({
        date,
        amount,
        remarks
    })    
    return Response.json({expenses})
}
