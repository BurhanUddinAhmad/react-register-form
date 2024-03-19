import { useState } from "react";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // console.log({Name: name, Email: email, Password: password});
    const handleSubmit = e => {
        e.preventDefault();
        if (!isChecked) {
            return;
        }
        // const users = {
        //     Name: name,
        //     Email: email,
        //     Password: password
        // }
        // console.log(users);

        setIsSubmit(true);
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
                <input 
                onChange={e => setIsChecked(e.target.checked)}
                type="checkbox" /> Do you agree with terms & condisions? 

                <div className="flex justify-end mt-3">
                    <button 
                    className="bg-blue-400 p-2 text-white rounded-lg duration-300 hover:bg-blue-300"
                    >Sign Up</button>
                </div>
            </form>

            {/*============ Modal ========= */}
            {
                isSubmit && (<div className="fixed top-0 left-0 flex justify-center items-center bg-blue-500 h-screen w-full">
                <div className="bg-white rounded-lg w-96 p-5">
                    <h2 className="text-center font-bold text-2xl text-blue-500 mb-4">Successfully Registered!</h2>
                    <p className="text-xl">Name: {name} </p>
                    <p className="text-xl">Email: {email} </p>
                    <p className="text-xl">Password: {password} </p>
                </div>
            </div>)
            }

        </>
    );
};

export default Form;