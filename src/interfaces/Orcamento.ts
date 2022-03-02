import TipoLancamentoOrcamento from "../enums/TipoLancamentoOrcamento";

export default interface Budget {
  tipo: TipoLancamentoOrcamento;
  descricao: string;
  valor: number;
}