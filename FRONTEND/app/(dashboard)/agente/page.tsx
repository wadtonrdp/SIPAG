"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil, Loader2 } from "lucide-react";
import {
  fetchInventario,
  fetchPedidos,
  type ItemInventario,
  type StatusEstoque,
} from "@/data/agente";

const estiloEstoque: Record<StatusEstoque, string> = {
  "Em Estoque":      "bg-lime-100 text-lime-700",
  "Aguardando Peça": "bg-amber-100 text-amber-700",
  "Em Uso":          "bg-blue-100 text-blue-700",
  "Manutenção":      "bg-red-100 text-red-700",
};


export default function Agente() {
  const [inventario, setInventario] = useState<ItemInventario[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    Promise.all([fetchInventario(), fetchPedidos()]).then(([inv, ped]) => {
      setInventario(inv);
      setCarregando(false);
    });
  }, []);

  return (
    <main className="bg-gray-200 min-h-full w-full font-sans">
      <h2 className="pl-6 pt-6 sm:pl-12 mb-2 text-black text-[24px] font-semibold flex-shrink-0">
        Agent Dashboard
      </h2>

      <div className="flex">
        {/* Coluna principal */}
        <div className="pl-6 pb-6 pr-6 sm:pl-12 w-full w-full]">

          {/* Botão novo pedido */}
          <div className="hover:scale-102 transition-transform duration-400 cursor-pointer">
            <div className="bg-[#00AE9D] text-slate-900 w-full p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 flex items-center justify-between gap-4 mb-8">
              <h2 className="text-center text-[32px] text-white font-bold leading-tight">
                Criar Novo Pedido de Equipamento
              </h2>
              <div className="bg-[#00cfba] rounded-[40px]">
                <Plus className="size-18 text-white p-3" />
              </div>
            </div>
          </div>

          {/* Tabela inventário */}
          <div className="bg-white text-black w-full p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20">
            <h4 className="text-[24px] font-semibold mb-4">Meu Inventário Local</h4>
            <div className="border border-slate-200 rounded-[18px] h-full max-h-[240px] overflow-auto">
              <table className="border-collapse w-full text-left">
                <thead className="sticky top-0">
                  <tr className="bg-slate-100 text-slate-600 uppercase text-xs">
                    <th className="p-3">Tipo de Equipamento</th>
                    <th className="p-3">Quantidade Disponível</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {carregando ? (
                    <tr>
                      <td colSpan={4} className="p-6 text-center text-slate-400">
                        <Loader2 className="animate-spin mx-auto h-5 w-5" />
                      </td>
                    </tr>
                  ) : inventario.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-3">{item.tipo}</td>
                      <td className="p-3">{item.quantidade}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 inline-block w-40 text-sm font-semibold rounded-full text-center ${estiloEstoque[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-4">
                          <Pencil size={20} className="cursor-pointer hover:text-[#00AE9D] transition-colors" />
                          <Trash2 size={20} className="cursor-pointer hover:text-red-500 transition-colors" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Coluna lateral — pedidos */}
        <div className="pl-6 pb-6 pr-6 sm:pl-12 w-full max-w-[300px]">
          <div className="bg-white text-black w-full p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20">
            <h4 className="text-[24px] font-semibold mb-4">Atualizações do Sistema</h4>
              <div>
              <img src="https://placehold.co/600x400" alt="Atualização_1" className="mt-4 rounded-[18px]"/>
              <img src="https://placehold.co/600x400" alt="Atualização_1" className="mt-4 rounded-[18px]"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}