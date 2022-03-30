import React, { useEffect } from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	// useEffect(() => {
	// 	pacientes.map((paciente) => {
	// 		console.log(`Nuevo paciente: ${paciente.nombre}`);
	// 	});
	// }, [pacientes]);

	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-4'>
			{pacientes && pacientes.length ? (
				<>
					<div className='sticky top-0 bg-gray-300 mb-8'>
						<h3 className='text-3xl font-black text-center'>Listado de Pacientes</h3>
						<p className='text-xl text-center mt-3 mb-5'>
							Administra tus {''}
							<span className='text-indigo-700 font-bold'>Pacientes y citas</span>
						</p>
					</div>

					{pacientes.map((paciente) => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h3 className='text-3xl font-black text-center'>No hay registros</h3>
					<p className='text-xl text-center mt-3 mb-5'>
						Comienza agregando pacientes {''}
						<span className='text-indigo-700 font-bold'>y aparecerán en este lugar</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListadoPacientes;
