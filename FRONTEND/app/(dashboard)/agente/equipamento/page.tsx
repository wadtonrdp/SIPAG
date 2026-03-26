import Link from "next/link";
import {
  Plus,
  House,
  SquareLibrary,
  Settings,
  Trash2,
  Pencil,
} from "lucide-react";

export default function equipamento() {
  return (
    <main className="bg-gray-200 flex min-h-fulln w-full font-sans">
      <div className="p-6 sm:p-12">
        <h2 className="text-balck text-[24px] text-left font-semibold mb-3">
          Agent Dashboad
        </h2>

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
        <div className="bg-white text-black w-full p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 gap-4">
          <h4 className="text-[24px] font-semibold mb-4">
            Meu Inventário Local
          </h4>

          <div className="border border-solid border-[#c5c6c7] rounded-[24px] overflow-hidden">
            <table
              className="border-collapse w-full text-left"
              id="tabelaDados"
            >
              <thead>
                <tr className="bg-gray-200 before">
                  <th className="p-3">Tipo de Equipamento</th>
                  <th className="p-3">Quantidade Disponível</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c5c6c7]">
                  <td className="p-3">Computador Desktop</td>
                  <td className="p-3">12</td>
                  <td className="p-3">
                    <p className="p-1 bg-amber-200 rounded-[10px] text-center">
                      Aguardando Peça
                    </p>
                  </td>
                  <td className="p-3 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <Pencil size={20} /* onClick={}*/ />
                      <Trash2 size={20} /* onClick={}*/ />
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-[#c5c6c7]">
                  <td className="p-3">Impressora Térmica</td>
                  <td className="p-3">7</td>
                  <td className="p-3">
                    <p className="p-1 bg-amber-200 rounded-[10px] text-center">
                      Aguardando Peça
                    </p>
                  </td>
                  <td className="p-3 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <Pencil size={20} /* onClick={}*/ />
                      <Trash2 size={20} /* onClick={}*/ />
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-[#c5c6c7]">
                  <td className="p-3">Monitor</td>
                  <td className="p-3">2</td>
                  <td className="p-3">
                    <p className="p-1 bg-lime-200 rounded-[10px] text-center">
                      Em Estoque
                    </p>
                  </td>
                  <td className="p-3 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <Pencil size={20} /* onClick={}*/ />
                      <Trash2 size={20} /* onClick={}*/ />
                    </div>
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
