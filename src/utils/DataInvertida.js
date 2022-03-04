const dataInvertida = (ano, mes, dia) => {
	let res = ano.toString();
	res += "/";
	res += (mes >= 10) ? "" : "0";
	res += mes.toString();
	res += "/";
	res += (dia >= 10) ? "" : "0";
	res += dia.toString();
	return res;
};

export default dataInvertida;