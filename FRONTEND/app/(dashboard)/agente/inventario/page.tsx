"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ListFilter, ChevronDown, Check, Loader2 } from "lucide-react";
import { fetchItens, type ItemEstoque, type StatusItem } from "@/data/estoque";

const statusEstilo: Record<StatusItem, string> = {
  "Em Estoque":      "bg-lime-100 text-lime-700",
  "Aguardando Peça": "bg-amber-100 text-amber-700",
  "Em Uso":          "bg-blue-100 text-blue-700",
  "Manutenção":      "bg-red-100 text-red-700",
};

export default function Inventario() {
  const opcoesCategoria = [
    { id: "todos",       nome: "Todos"       },
    { id: "suprimento",  nome: "Suprimento"  },
    { id: "equipamento", nome: "Equipamento" },
  ];

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("todos");
  const [estaAberto, setEstaAberto]             = useState(false);
  const [termoBusca, setTermoBusca]             = useState("");
  const [itens, setItens]                       = useState<ItemEstoque[]>([]);
  const [carregando, setCarregando]             = useState(true);
  const dropdownRef                             = useRef<HTMLDivElement>(null);

  // Busca os dados sempre que busca ou filtro mudar
  useEffect(() => {
    setCarregando(true);
    fetchItens({ busca: termoBusca, categoria: opcaoSelecionada })
      .then(setItens)
      .finally(() => setCarregando(false));
  }, [termoBusca, opcaoSelecionada]);

  useEffect(() => {
    function handleClickFora(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setEstaAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  const handleSelecionar = (id: string) => {
    setOpcaoSelecionada(id);
    setEstaAberto(false);
  };

  const nomeOpcaoSelecionada = opcoesCategoria.find(
    (opt) => opt.id === opcaoSelecionada
  )?.nome;

  return (
    <main className="bg-gray-200 flex min-h-full w-full font-sans text-slate-900">
      <div className="pl-12 pt-6 pr-12 w-full">

        {/* Barra de busca e filtro */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Pesquisar por nome ou patrimônio..."
              className="w-full py-3 px-4 pl-12 border border-slate-300 text-black rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] outline-none transition-all"
            />
          </div>

          <div ref={dropdownRef} className="relative w-full md:w-1/3">
            <button
              type="button"
              onClick={() => setEstaAberto(!estaAberto)}
              className={`flex items-center justify-between w-full py-3 px-4 pl-12 border rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] transition-all outline-none ${
                estaAberto ? "border-[#00AE9D]" : "border-slate-300"
              }`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <ListFilter className={`h-5 w-5 ${estaAberto ? "text-[#00AE9D]" : "text-slate-400"}`} />
              </div>
              <span className="block truncate text-black">{nomeOpcaoSelecionada}</span>
              <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${estaAberto ? "rotate-180" : ""}`} />
            </button>

            {estaAberto && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
                <ul className="py-1">
                  {opcoesCategoria.map((opcao) => (
                    <li key={opcao.id}>
                      <button
                        type="button"
                        onClick={() => handleSelecionar(opcao.id)}
                        className={`group flex items-center justify-between w-full px-4 py-2.5 text-left text-black hover:bg-[#C9D200] hover:text-white transition-colors ${
                          opcaoSelecionada === opcao.id ? "bg-slate-100 font-semibold" : ""
                        }`}
                      >
                        {opcao.nome}
                        {opcaoSelecionada === opcao.id && (
                          <Check className="h-4 w-4 text-[#00AE9D] group-hover:text-white" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tabela */}
        <div className="bg-white text-black w-full p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20">
          <h4 className="text-2xl font-semibold mb-6 text-slate-900">
            Estoque Completo - Agência Centro
          </h4>
          <div className="border border-slate-200 rounded-[18px] max-h-[440px] overflow-auto">
            <table className="border-collapse w-full text-left">
              <thead className="sticky top-0">
                <tr className="bg-slate-100 text-slate-600 uppercase text-xs">
                  <th className="p-4 font-bold">Patrimônio (ID)</th>
                  <th className="p-4 font-bold">Nome do Equipamento</th>
                  <th className="p-4 font-bold">Categoria</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {carregando ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      <Loader2 className="animate-spin mx-auto h-6 w-6" />
                    </td>
                  </tr>
                ) : itens.length > 0 ? (
                  itens.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium">{item.id}</td>
                      <td className="p-4">{item.nome}</td>
                      <td className="p-4 capitalize">{item.categoria}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 inline-block w-40 text-sm font-semibold rounded-full text-center ${statusEstilo[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      Nenhum item encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}