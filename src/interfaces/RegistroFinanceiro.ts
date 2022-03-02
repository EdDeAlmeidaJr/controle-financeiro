import TipoLancamentoFinanceiro from "../enums/TipoLancamentoFinanceiro";

export default interface RegistroFinanceiro {
  ano: number;
  mes: number;
  dia: number;
  conta: string;
  tipo: TipoLancamentoFinanceiro;
  valor: number;
  descricao: string;
}