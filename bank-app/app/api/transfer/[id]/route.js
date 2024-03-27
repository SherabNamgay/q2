import knex from "@/app/knex-connection"

export async function PUT(req, {params}){
    const senderId = params.id
    const searchParams = req.nextUrl.searchParams
    const receiverId= searchParams.get('receiverId')
    const {amount:transferAmount}=await req.json()
    
    const [{balance:senderBalance}] = await knex('accounts').where('id', senderId ).select('*')
    if(!senderBalance) throw new Error('sender does not exist')

    const [{balance:receiverBalance}] = await knex('accounts').where('id', receiverId ).select('*')
    if(!receiverBalance) throw new Error('receiver does not exist')

    // console.log(`senderid= ${senderId} balance= ${senderBalance} reciverId= ${receiverId} balance =${receiverBalance} ammount to transfer=${transferAmount}`)
    
    const senderNewBalance= senderBalance-transferAmount;
    const receiverNewBalance= Number(receiverBalance) + Number(transferAmount);
    console.log(receiverNewBalance)
    try{
        if (senderNewBalance >= 0 ){
            const transfer =await knex.transaction(async (trx)=>{
                const sender= await trx('accounts').where('id', senderId).update('balance', senderNewBalance)
                const reciver= await trx('accounts').where('id', receiverId).update('balance', receiverNewBalance)
                return (sender, reciver)
            })
            return Response.json({transfer})
        } else {
            throw new RangeError("insufficiant balance")
        }

    }catch(error){
        console.error('an error occurred:', error.message);
    }
}