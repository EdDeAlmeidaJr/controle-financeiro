import React, { useEffect, useState } from "react";

import Conta from "../interfaces/Conta";

const PosicaoAtual: any = () => {
	const [listaContas, setListaContas] = useState([]);

	const getListaContas = async () => {
		let result: Conta[] = [];
		(async () => {
			await fetch("http://localhost:3000/data/contas.json")
				.then((res) => res.json())
				.then((json) => (result = json));
		})();
		console.log(result);
		return result as Conta[];
	};

	useEffect(() => {
		(async () => {
			await getListaContas().then((json) => setListaContas(json));
		})();
	});

	return (
		<div className="card">
			<div className="card-header">
				<h5>Posição atual</h5>
			</div>
			<div className="card-body"></div>
		</div>
	);
};

export default PosicaoAtual;
