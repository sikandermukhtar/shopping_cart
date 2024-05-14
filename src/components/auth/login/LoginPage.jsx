

export default function LoginPage(){



    return(
        <>
            <div className='flex flex-col items-center'>
                <p className='text-3xl font-sans font-normal px-8 py-6'>Enter your email and password.</p>
                <form className='flex flex-col gap-y-4 items-center'>
                    <input
                        className='border-2 border-black text-l w-80 rounded-lg h-10 p-2'
                        name="email"
                        placeholder="Email*"
                        type="email"
                    />
                    <input
                        className='border-2 border-black text-l w-80 rounded-lg h-10 p-2'
                        name="email"
                        placeholder="Password*"
                        type="password"
                    />
                    <button type="submit" className="ml-56 bg-black w-24 text-white rounded-3xl p-2">
                        Continue
                    </button>
                </form>
                <p className='text-l text-gray-500 font-sans font-normal px-8 py-6'>Doesn't have an account?
                    <a
                        className='underline ml-2 hover:text-[#2E42F8]'
                        href={"/arch/register"}>Register Here!
                    </a>
                </p>
            </div>
        </>
    )
}