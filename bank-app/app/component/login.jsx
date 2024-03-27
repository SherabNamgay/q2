"use client";
import { useContext, useState } from "react";
import { UserContext } from "@/app/state/user-context";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const router = useRouter();

    async function login(mail, pass) {
        try{
            const result = await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify({
                    email: mail,
                    password: pass,
                }) 
            })
            const {data: body} = await result.json()
            setUser(body)
            router.push('/transferUI/1')
        }catch(e){
            alert("Invalid user or password")
            console.error("Invalid user or password",e )
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };
    return (
        <div className="border-2 border-white flex flex-col-2 gap-4 bg-white w-screen h-screen"> 
            <div className="text-black w-1/2 h-screen ">
                <img
                    className="w-full h-full object-cover"
                    src="assets\bg-cover.jpg" 
                    alt="bg"
                />
                <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, saepe! Minus odio ipsa est temporibus esse expedita accusantium sapiente praesentium, qui quos totam omnis asperiores, sequi iure modi nisi nemo!</h1>
            </div>
            
            <div className="w-1/2 space-y-4 content-center">
                <img
                    src="assets\logo.png" 
                    alt="logo"
                    className="text-center text-black w-1/4 mx-auto"
                />
                <h1 
                 className="text-center text-blue-500 font-bold text-xl  mx-auto "
                > your BANK</h1>
                <p className="text-black text-center opacity-[.87]">Login to your account</p>
                <form 
                onSubmit={handleSubmit}
                className="flex flex-col text-center space-y-3 pt-10 ">
                    <input
                    placeholder="Email" 
                    onChange={(e)=> setEmail(e.target.value)}
                    className="text-black px-4 mx-auto border-2 rounded w-3/4 h-10" 
                    type="email"
                    value={email}
                    />
                    <input
                    placeholder="Password" 
                    onChange={(e)=> setPassword(e.target.value)}
                    className="text-black px-4 mx-auto border-2 rounded w-3/4 h-10" 
                    type="password"
                    value={password}
                    />
                    <button 
                    onClick={() => login(email, password)}
                    className="text-white px-4  mx-auto border-2 rounded w-3/4 h-10 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                        >Login
                    </button>
                    <p className="text-black opacity-[.87]">Don't have an account? <a className= "text-blue-500 hover:text-blue-600 focus:text-blue-700" href="#"> Sign up</a></p>
                </form>
            </div>
        </div>
    )
}