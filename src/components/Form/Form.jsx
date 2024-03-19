import { useState } from "react";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log({Name: name, Email: email, Password: password});
    const handleSubmit = e => {
        e.preventDefault();
        const users = {
            Name: name,
            Email: email,
            Password: password
        }
        // e.target.value = "";

        console.log(users);
    }

    return (
        <>
            <form 
            onSubmit={e => handleSubmit(e)}
            className='bg-white rounded-lg p-8 w-96'>
                
                <h1 className='font-bold text-2xl text-center mb-4 text-blue-400'>SignUp Here</h1>
                
                <input 
                onChange={event => setName(event.target.value)}
                className="border rounded-md py-1 px-2 w-full mb-2 focus:outline-blue-100" 
                placeholder="Enter you name" 
                type="text" 
                required
                name="" />

                <input 
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md py-1 px-2 w-full mb-2 focus:outline-blue-100" 
                placeholder="Enter your email" 
                type="email" 
                required
                name="" />
                <input 
                onChange={e => setPassword(e.target.value)}
                className="border rounded-md py-1 px-2 w-full mb-2 focus:outline-blue-100" 
                placeholder="Create a password" 
                type="password" 
                required
                name="" />

                <div className="flex justify-end">
                    <button 
                    className="bg-blue-400 p-2 text-white rounded-lg duration-300 hover:bg-blue-300"
                    >Sign Up</button>
                </div>
            </form>
        </>
    );
};

export default Form;