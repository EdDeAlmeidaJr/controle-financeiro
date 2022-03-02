import TipoLancamentoFinanceiro from "../enums/TipoLancamentoFinanceiro";

export default interface RegistroFinanceiro {
  ano: number;
  mes: number;
  dia: number;
  conta: number;
  tipo: TipoLancamentoFinanceiro;
  valor: number;
  descricao: string;
}