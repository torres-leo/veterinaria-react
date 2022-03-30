import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		const respuesta = confirm('¿Deseas eliminar este paciente?');
		if (respuesta) {
			eliminarPaciente(id);
		}
	};

	return (
		<div className='mx-1 my-6 bg-white py-10 px-5 shadow-md rounded-lg'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Nombre de Mascota: {''}
				<span className='font-normal normal-case'>{nombre}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Propietario: {''}
				<span className='font-normal normal-case'>{propietario}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Email: {''}
				<span className='font-normal normal-case'>{email}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Fecha de Alta: {''}
				<span className='font-normal normal-case'>{fecha}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Sintomas: {''}
				<span className='font-normal normal-case'>{sintomas}</span>
			</p>

			<div className='flex justify-between mt-8'>
				<button
					type='button'
					className='py-2 px-6 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-xl'
					onClick={() => setPaciente(paciente)}>
					<FontAwesomeIcon icon={faPenToSquare} /> Editar
				</button>
				<button
					type='button'
					className='py-2 px-6 bg-red-400 hover:bg-red-500 text-black font-semibold rounded-xl'
					onClick={handleEliminar}>
					<FontAwesomeIcon icon={faTrashCan} /> Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
