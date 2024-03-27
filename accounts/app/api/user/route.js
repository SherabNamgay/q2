import knex from '@/app/knex-connection'

export async function POST(request) {
    const body = await request.json()
    const {userName, email} = body
    const user = await knex('users').insert({
        user_name: userName,
        email: email
    }).returning('*')
    return Response.json({ user })
}

export async function GET() {
    const users= await knex('users').select('*')
    return Response.json({ users })
}