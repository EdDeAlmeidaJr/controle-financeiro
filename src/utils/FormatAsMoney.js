const formatAsMoney = (valor) => {
  let text = valor.toString();
  let svalor = text.replace(".",",");
  svalor = "R$ " + svalor;
  return svalor;
}

export default formatAsMoney;