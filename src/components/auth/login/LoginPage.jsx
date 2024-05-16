
export default function LoginPage(){



    return(
        <>
            <div className='flex flex-col items-center'>
                <p className='text-3xl font-sans font-normal px-8 py-6'>Enter your email and password.</p>
                <form className='flex flex-col gap-y-4 items-center'>
                    <div className="relative flex flex-col">
                        <input
                            id="email"
                            className='border-b-2 border-black text-l w-80 h-10 p-2
                            peer placeholder-transparent focus:outline-none focus:border-rose-600'
                            name="email" required
                            placeholder="Email"
                            type="email"
                        />
                        <label htmlFor="email"
                        className='absolute text-sm -top-3.5 pl-2 text-gray-600 transition-all
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                        peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                        >Email Address</label>
                    </div>

                    <div className='relative flex flex-col mt-2'>
                        <input
                            id="password"
                            className='peer border-b-2 border-black text-l w-80 h-10 p-2
                            focus:outline-none focus:border-rose-500 placeholder-transparent'
                            name="password" required
                            placeholder="Password"
                            type="password"
                        />
                        <label htmlFor="password"
                               className='absolute text-sm -top-3.5 pl-2 text-gray-600 transition-all
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                        peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                        >Password</label>
                    </div>
                    <button type="submit" className="ml-56 bg-black w-24 text-white rounded-3xl p-2">
                        Continue
                    </button>
                </form>
                <p className='text-l text-gray-500 font-sans font-normal px-8 py-6'>Does not have an account?
                    <a
                        className='underline ml-2 hover:text-[#2E42F8]'
                        href={"/arch/register"}>Register Here!
                    </a>
                </p>
            </div>
        </>
    )
}