import knex from "@/app/knex-connection"

export async function PUT(req, {params}){
    const {id} = params
    const {balance} = await req.json()
    const data = await knex('accounts')
        .where("id", id)
        .update({
            balance,
        }).returning('*')
    return Response.json({data})
}