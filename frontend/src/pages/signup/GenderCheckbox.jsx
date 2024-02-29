const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer
						${selectedGender === 'Male'?"selected": "" }	`}>
					<span className='label-text text-gray-200'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900' 
						checked={selectedGender==="Male"}
						onChange={()=> onCheckBoxChange("Male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer
				${selectedGender === 'Female'?"selected": "" }
				`}>
					<span className='label-text text-gray-200'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900'
						checked={selectedGender==="Female"}
						onChange={()=> onCheckBoxChange("Female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
