import React from 'react'

const  Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <h1 className='text-3x1 font-semibold text-center text-gray-300 '>Login
      <span className='text-blue-500'> ChatApp</span>
      </h1>

      <form>
        {/*UserName Block here*/ }
        <div>
        <label className='label p-2'>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
            <input
							type='text'
							placeholder='Enter username'
							className="input input-bordered input-info w-full max-w-xs"
							//value={username}
							//onChange={(e) => setUsername(e.target.value)}
						/>
        </div>
         {/*Password Block here*/ }
        <div>
          <label className='label p-2'>
                <span className='text-base label-text text-gray-300'>Password</span>
          </label>
          <input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-info w-full max-w-xs'
							//value={password}
							//onChange={(e) => setPassword(e.target.value)}
						/>
        </div>
        <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
        <div>
        <button className="btn btn-block btn-sm btn-primary mt-2">Login</button>
        </div>


      </form>

      </div>
      
      
      
      
      </div>
  )
}

export default Login

/* STARTER CODE
import React from 'react'
const  Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <h1 className='text-3x1 font-semibold text-center text-gray-300 '>Login
      <span className='text-blue-500'> ChatApp</span>
      </h1>
      <form>
        <div>
        <label className='label p-2'>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
            <input
							type='text'
							placeholder='Enter username'
							className="input input-bordered input-info w-full max-w-xs"
							//value={username}
							//onChange={(e) => setUsername(e.target.value)}
						/>
        </div>

        <div>
          <label className='label p-2'>
                <span className='text-base label-text text-gray-300'>Password</span>
          </label>
          <input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-info w-full max-w-xs'
							//value={password}
							//onChange={(e) => setPassword(e.target.value)}
						/>
        </div>
        <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
        <div>
        <button className="btn btn-block btn-sm btn-primary mt-2">Login</button>
        </div>
      </form>
      </div>
      </div>
  )
}
export default Login
*/


