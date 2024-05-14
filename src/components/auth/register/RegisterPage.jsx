import {createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";
import {useNavigate} from "react-router";
import { auth} from "../../../firebase/firebase.js";

export default function RegisterPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const register = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                    // ..
                });
        }
        else {
            alert('Password Not Matched')
            console.log('hehe')

        }
    }

    return(
        <>
            <div className='flex flex-col items-center'>
                <p className='text-3xl font-sans font-normal px-8 py-6'>Enter your email and password.</p>
                <form className='flex flex-col gap-y-4 items-center' onSubmit={register}>
                    <input
                        className='border-2 border-black text-l w-80 rounded-lg h-10 p-2'
                        name="email" required
                        placeholder="Email*"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='border-2 border-black text-l w-80 rounded-lg h-10 p-2'
                        name="password" required
                        placeholder="New Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className='border-2 border-black text-l w-80 rounded-lg h-10 p-2'
                        name="confirmPassword" required
                        placeholder="Confirm New Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className="ml-56 bg-black w-24 text-white rounded-3xl p-2">
                        Continue
                    </button>
                </form>
                <p className='text-l text-gray-500 font-sans font-normal px-8 py-6'>Already have an account?
                    <a
                        className='underline ml-2 hover:text-[#2E42F8]'
                        href={"/arch/register"}>Login Here!
                    </a>
                </p>
            </div>
        </>
    )
}