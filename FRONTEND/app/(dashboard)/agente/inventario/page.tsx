"use client";

import { useState } from "react";
import { Search, ListFilter, ChevronDown, Check } from "lucide-react";

export default function Inventario() {
  const opcoesCategoria = [
    { id: "todos", nome: "Todos" },
    { id: "suprimento", nome: "Suprimento" },
    { id: "equipamento", nome: "Equipamento" },
  ];

  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("todos");
  const [estaAberto, setEstaAberto] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");

  const handleSelecionar = (id: string) => {
    setOpcaoSelecionada(id);
    setEstaAberto(false);
  };

  const handlePesquisar = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pesquisando:", termoBusca, "Filtro:", opcaoSelecionada);
  };

  const nomeOpcaoSelecionada = opcoesCategoria.find((opt) => opt.id === opcaoSelecionada)?.nome;

  return (
    <main className="bg-gray-200 flex min-h-screen w-full font-sans text-slate-900">
      <div className="p-6 sm:p-12 w-full">
        
        <form onSubmit={handlePesquisar} className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Pesquisar item e apertar Enter..."
              className="w-full h-13 p-4 pl-12 border border-slate-300 text-black rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] outline-none transition-all"
            />
          </div>

          <div className="relative w-full md:w-1/3">
            <button
              type="button"
              onClick={() => setEstaAberto(!estaAberto)}
              className={`flex items-center justify-between w-full h-13 p-4 pl-12 border rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] transition-all outline-none ${estaAberto ? "border-[#00AE9D]" : "border-slate-300"}`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <ListFilter className={`h-5 w-5 ${estaAberto ? "text-[#00AE9D]" : "text-slate-400"}`} />
              </div>
              <span className="block truncate text-black">{nomeOpcaoSelecionada}</span>
              <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${estaAberto ? "rotate-180" : ""}`} />
            </button>

            {estaAberto && (
              <div className="absolute z-[999] w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-60 overflow-auto">
                <ul className="py-1">
                  {opcoesCategoria.map((opcao) => (
                    <li key={opcao.id}>
                      <button
                        type="button"
                        onClick={() => handleSelecionar(opcao.id)}
                        className={`group flex items-center justify-between w-full px-4 py-2.5 text-left text-black hover:bg-[#C9D200] hover:text-white transition-colors ${opcaoSelecionada === opcao.id ? "bg-slate-100 font-semibold" : ""}`}
                      >
                        {opcao.nome}
                        {opcaoSelecionada === opcao.id && <Check className="h-4 w-4 text-[#00AE9D] group-hover:text-white" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>

        <div className="bg-white text-black w-full p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20">
          <h4 className="text-[24px] font-semibold mb-6 text-slate-900">Estoque Completo - Agência Centro</h4>
          <div className="border border-slate-200 rounded-[18px] overflow-hidden">
            <table className="border-collapse w-full text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-600 uppercase text-xs">
                  <th className="p-4 font-bold">Patrimônio (ID)</th>
                  <th className="p-4 font-bold">Nome do Equipamento</th>
                  <th className="p-4 font-bold">Categoria</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP001</td>
                  <td className="p-4">Carregador</td>
                  <td className="p-4">Suprimento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full text-center">Aguardando Peça</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP002</td>
                  <td className="p-4">Chip VIVO</td>
                  <td className="p-4">Suprimento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full text-center">Aguardando Peça</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP003</td>
                  <td className="p-4">Chip CLARO</td>
                  <td className="p-4">Suprimento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-lime-100 text-lime-700 text-sm font-semibold rounded-full text-center">Em Estoque</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP004</td>
                  <td className="p-4">CxBobina</td>
                  <td className="p-4">Suprimento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-lime-100 text-lime-700 text-sm font-semibold rounded-full text-center">Em Estoque</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP005</td>
                  <td className="p-4">Placa Pix</td>
                  <td className="p-4">Suprimento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-lime-100 text-lime-700 text-sm font-semibold rounded-full text-center">Em Estoque</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">#SIP006</td>
                  <td className="p-4">PPC930</td>
                  <td className="p-4">Equipamento</td>
                  <td className="p-4">
                    <span className="px-3 py-1 inline-block w-40 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full text-center">Aguardando Peça</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}