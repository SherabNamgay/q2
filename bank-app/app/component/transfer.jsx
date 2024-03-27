"use client"
import { useState } from "react"


export default function Transfer(){
    const [senderId, setSenderId] = useState();
    const [receiverId, setReceiverId] = useState();
    const [amount, setAmount] = useState();

    async function transferAmount(){
        const result= await fetch(`api/transfer/${senderId}?receiverId=${receiverId}`,{
            method:"PUT",
            body: JSON.stringify({amount:amount})
        })
        
    }

    return(
        
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center text-gray-800">
                Transfer Funds
            </h1>
            <div className="w-[400px] flex flex-col gap-4">
                <input 
                    className="bg-white border border-gray-300 p-2 rounded-lg"
                    type="number"
                    placeholder="Sender ID"
                    value={senderId}
                    onChange={(e)=> setSenderId(e.target.value)}
                />
                <input 
                    className="bg-white border border-gray-300 p-2 rounded-lg"
                    type="number"
                    placeholder="Receiver ID"
                    value={receiverId}
                    onChange={(e)=> setReceiverId(e.target.value)}
                />
                <input 
                    className="bg-white border border-gray-300 p-2 rounded-lg"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                />
                <button 
                    className="w-full bg-sky-500 text-white p-4 rounded-lg hover:bg-sky-700 cursor-pointer"
                    onClick={()=>transferAmount()}>
                    Transfer
                </button>
            </div>
        </div>
    ) 
}