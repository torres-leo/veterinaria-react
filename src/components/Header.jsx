function Header(props) {
	console.log(props);
	return (
		<>
			<h1 className='font-black text-4xl text-center md:w-2/3 mx-auto'>
				Seguimiento de Pacientes {''}
				<span className='text-indigo-700'>
					<i>Veterinaria</i>
				</span>
			</h1>
		</>
	);
}

export default Header;
