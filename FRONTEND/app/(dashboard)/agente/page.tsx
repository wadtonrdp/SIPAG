import Link from 'next/link'
import { Plus, House, SquareLibrary, Settings } from 'lucide-react';


export default function agente(){
    return(
    <main className="bg-gray-200 flex min-h-screen w-full font-sans">
      
      <div className="hidden lg:flex h-screen w-[350px] flex-col items-center bg-white p-12 shadow-xl">
        <div className="text-center text-slate-900 max-w-sm">
            <nav>
                <ul className="text-[18px] font-semibold mb-4 space-y-3">
                    <li>
                        <Link href="/agente" className="flex items-center gap-3 p-3 rounded-[10px] leading-tight hover:bg-[#C9D200] transition-colors group">
                        <House size={20} /> 
                        <span>Painel do Agente</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#" className="flex items-center gap-3 p-3 rounded-[10px] leading-tight hover:bg-[#C9D200] transition-colors group">
                        <SquareLibrary size={20}/>
                        <span>Inventário Local</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#" className="flex items-center gap-3 p-3 rounded-[10px] leading-tight hover:bg-[#C9D200] transition-colors group">
                        <Settings size={20}/>
                        <span>Equipamento</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>

      <div className="p-6 sm:p-12">

        <h2 className="text-balck text-[24px] text-left font-semibold mb-3">Agent Dashboad</h2>

        <div className='hover:scale-102 transition-transform duration-400 cursor-pointer'>
            <div className="bg-[#00AE9D] text-slate-900 w-full p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 flex items-center justify-between gap-4 mb-8">
                <h2 className="text-center text-[32px] text-white font-bold leading-tight">Criar Novo Pedido de Equipamento</h2> 
                <div className="bg-[#00cfba] rounded-[40px]">
                    <Plus className='size-18 text-white p-3'/>
                </div>
            </div>
        </div>
        <div className="bg-white text-black w-full p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 gap-4">
            
            <h4 className='text-[24px] font-semibold mb-4'>Meu Inventário Local</h4>

            <div className="border border-solid border-[#c5c6c7] rounded-[24px] overflow-hidden">
                <table className='border-collapse w-full text-left' id='tabelaDados'>
                    <thead>
                        <tr className='bg-gray-200 before'>
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
                            <td className="p-3 bg-amber-200 rounded-[10px]  ">Aguardando Peça</td>
                            <td className="p-3">---</td>
                        </tr>
                        <tr className="border-t border-[#c5c6c7]">
                            <td className="p-3">Impressora Térmica</td>
                            <td className="p-3">7</td>
                            <td className="p-3">Aguardando Peça</td>
                            <td className="p-3">---</td>
                        </tr>
                        <tr className="border-t border-[#c5c6c7]">
                            <td className="p-3">Monitor</td>
                            <td className="p-3">2</td>
                            <td className="p-3">Em Estoque</td>
                            <td className="p-3">---</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </main>
    )
}