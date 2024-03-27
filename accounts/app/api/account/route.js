import knex from '@/app/knex-connection'

export async function POST(request) {
    const {userID} = await request.json()
    const account = await knex('accounts').insert({
        user_id: userID
    })

    return Response.json({ account })
}

export async function GET(){
    const accounts = await knex('accounts').select('*')
}