import knex from '@/app/knex-connection'

export async function GET(req, {params}) {
    const { id } = params
    const income = await knex('income').where('id', id).select('*')
    return Response.json({income})
}

export async function PUT(req, {params}) {
    const { id } = params
    const { date, amount, remarks} = await req.json()
    const income = await knex('income').where('id', id).update({
        date,
        amount,
        remarks
    })    
    return Response.json({income})
}
