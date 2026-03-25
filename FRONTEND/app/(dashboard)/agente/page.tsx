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

        <div className='hover:scale-102 transition-transform duration-500 cursor-pointer'>
            <div className="bg-[#00AE9D] text-slate-900 w-full p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 flex items-center justify-between gap-4">
                <h2 className="text-center text-[32px] text-white font-bold leading-tight">Criar Novo Pedido de Equipamento</h2> 
                <div className="bg-[#00cfba] rounded-[40px]">
                    <Plus className='size-18 text-white p-3'/>
                </div>
            </div>
        </div>
      </div>
    </main>
    )
}