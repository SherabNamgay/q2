import knex from '@/app/knex-connection'

export async function GET(req, {params}) {
    const {id} = params
    const user =await knex('users').where('id', id).select ('*')
    return Response.json({user})
}

export async function PUT(req, {params}) {
    const {id} = params
    const {userName, email} = await req.json()
    const user =await knex('users').where('id', id).update({
        user_name: userName,
        email: email
    })
    return Response.json({user})
}