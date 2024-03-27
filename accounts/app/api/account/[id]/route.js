import knex from '@/app/knex-connection'

export async function GET(req, {params}) {
    const {id} = params
    const account =await knex('accounts').where('user_id', id).select ('*')
    return Response.json({account})
}
