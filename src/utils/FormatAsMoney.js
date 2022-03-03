const formatAsMoney = (valor) => {
  let parts = valor.split(".");
  console.log(parts);
  let centsn = parseInt(parts[1],10);
  let cents = (centsn<10) ? "0" + parts[1] : parts[1];
  return parts[0] + "," + parts[1];
}

export default formatAsMoney;