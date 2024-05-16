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
                    <div className='relative flex flex-col'>
                        <input
                            id="email"
                            className='border-b-2 border-black text-l w-80 h-10 p-2
                            focus:outline-none focus:border-rose-600 placeholder-transparent
                            peer
                            '
                            name="email" required
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email"
                               className='pl-2 absolute -top-3.5 text-gray-600 text-sm
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                               peer-placeholder-shown:top-2 transition-all
                               peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm
                               '
                        >Email Address</label>
                    </div>

                    <div className='relative flex flex-col mt-2'>
                        <input
                            id="password"
                            className='peer border-b-2 border-black text-l w-80 h-10 p-2
                            focus:outline-none focus:border-rose-600 placeholder-transparent
                            '
                            name="password" required
                            placeholder="New Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password"
                        className='absolute -top-3.5 text-sm pl-2 text-gray-600 transition-all
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm
                        '
                        >Password</label>
                    </div>

                    <div className='relative flex flex-col mt-2'>
                        <input
                            id="confirmPassword"
                            className='peer border-b-2 border-black text-l w-80 h-10 p-2
                            focus:outline-none focus:border-rose-600 placeholder-transparent
                            '
                            name="confirmPassword" required
                            placeholder="Confirm New Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword"
                        className='absolute -top-3.5 text-gray-600 text-sm pl-2 transition-all
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:text-sm peer-focus:-top-3.5 peer-focus:text-gray-600
                        '
                        >Confirm Password</label>
                    </div>
                    <button type="submit" className="ml-56 bg-black w-24 text-white rounded-3xl p-2">
                        Continue
                    </button>
                </form>
                <p className='text-l text-gray-500 font-sans font-normal px-8 py-6'>Already have an account?
                    <a
                        className='underline ml-2 hover:text-[#2E42F8]'
                        href={"/arch/login"}>Login Here!
                    </a>
                </p>
            </div>
        </>
    )
}