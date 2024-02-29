import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: '',
		userName: '',
		password: '',
		confirmPassword:'',
		gender: '',
	});

	const {loading, signup} = useSignup();

	const handleCheckBoxChange = (gender) =>{
		setInputs({...inputs, gender});
	}

	const handleSubmit = async (e) => {
		e.preventDefault(); 
		console.log(inputs);

		// //To prevent it from refreshing when we use the signup button
		// //signup functionality
		await signup(inputs);
	}



	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-cyan-500'> Dialogue</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-gray-200'>Full Name</span>
						</label>
						<input 
							type='text' 
							placeholder='Your Full Name' 
							className='input input-bordered input-info w-full max-w-xs' 
							value={inputs.fullName}
							onChange={(e)=> setInputs({...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-200 '>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Username' 
							className='input input-bordered input-info w-full max-w-xs' 
							value={inputs.userName}
							onChange={(e)=> setInputs({...inputs, userName: e.target.value })}
						
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-200'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-info w-full max-w-xs'
							value={inputs.password}
							onChange={(e)=> setInputs({...inputs, password: e.target.value })}

						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-200'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='input input-bordered input-info w-full max-w-xs'
							value={inputs.confirmPassword}
							onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value })}

						/>
					</div>

					<GenderCheckbox onCheckBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />

					<Link className='text-sm text-gray-300 hover:underline hover:text-cyan-600 mt-2 inline-block' to='/Login'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-primary btn-sm mt-2 border border-slate-700'
						disabled={loading}
						>    {loading? <span className="loading loading-spinner"></span>:"Sign Up"}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;