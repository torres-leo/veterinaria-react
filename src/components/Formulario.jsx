import React, { useState, useEffect } from 'react';
import Error from './Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	const generarId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validando Formulario
		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
			const formulario = document.querySelector('.formulario');
			formulario.classList.add('border-2', 'border-red-500');

			setTimeout(() => {
				setError(false);
				formulario.classList.remove('border-2', 'border-red-500');
			}, 8000);
			return;
		}

		// Objeto de Paciente
		const objetoPaciente = { nombre, propietario, email, fecha, sintomas };
		// console.log(objetoPaciente);

		if (paciente.id) {
			// Cuando se está editando un registro
			objetoPaciente.id = paciente.id;

			// Guardando el registro a editar en otra variable
			const pacientesActualizados = pacientes.map((pacienteState) => {
				return pacienteState.id === paciente.id ? objetoPaciente : pacienteState;
			});

			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			// Agregandole un Id a cada registro que se inserte
			objetoPaciente.id = generarId();
			// Insertando un nuevo Registro
			setPacientes([...pacientes, objetoPaciente]);
		}

		// Reiniciando el formulario
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	};

	return (
		<div className='md:w-1/2 lg:w-2/5 mx-5'>
			<div className='mb-8'>
				<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

				<p className='text-xl mt-3 text-center mb-5'>
					Añade Pacientes y {''}
					<span className='text-indigo-700 font-bold'>Administralos</span>
				</p>
			</div>

			<form onSubmit={handleSubmit} className='formulario bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				{error && (
					<Error>
						<FontAwesomeIcon icon={faCircleExclamation} size='2x' />
						<p>
							Todos los campos son obligatorios. Verifica que todos los elementos contienen la información
							necesaria.
						</p>
					</Error>
				)}
				<div className='mb-5'>
					<label className='block text-gray-600 uppercase font-medium' htmlFor='nombre'>
						Mascota
					</label>
					<input
						id='nombre'
						type='text'
						placeholder='Nombre de mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombre}
						onChange={(evt) => setNombre(evt.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-gray-600 uppercase font-medium' htmlFor='propietario'>
						Propietario
					</label>
					<input
						id='propietario'
						type='text'
						placeholder='Nombre de Propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={propietario}
						onChange={(evt) => setPropietario(evt.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-gray-600 uppercase font-medium' htmlFor='email'>
						Email
					</label>
					<input
						id='email'
						type='text'
						placeholder='Nombre de Propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={email}
						onChange={(evt) => setEmail(evt.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-gray-600 uppercase font-medium' htmlFor='alta'>
						Fecha de Alta
					</label>
					<input
						id='alta'
						type='date'
						className='border-2 w-full p-2 mt-2 rounded-md'
						value={fecha}
						onChange={(evt) => setFecha(evt.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-gray-600 uppercase font-medium' htmlFor='sintomas'>
						Sintomas
					</label>
					<textarea
						id='sintomas'
						type='date'
						className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
						placeholder='Describe los sintomas🤒'
						value={sintomas}
						onChange={(evt) => setSintomas(evt.target.value)}
					/>
				</div>

				{paciente.id ? (
					<input
						type='submit'
						className='bg-blue-600 w-full p-3 text-white rounded-lg uppercase font-semibold hover:bg-blue-700 cursor-pointer transition-all'
						value='Guardar Edición'
					/>
				) : (
					<input
						type='submit'
						className='bg-indigo-600 w-full p-3 text-white rounded-lg uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-all'
						value='Agregar Paciente'
					/>
				)}
			</form>
		</div>
	);
};

export default Formulario;
