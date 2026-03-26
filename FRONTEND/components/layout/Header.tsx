"use client";

import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const titulos: Record<string, string> = {
    "/agente": "Painel do Agente - Agência do Centro",
    "/agente/inventario": "Inventário Local - Agência do Centro",
    "/agente/equipamento": "Equipamento - Agência do Centro",
    "/analista": "Painel do Analista",
  };

  const tituloAtual = titulos[pathname] || "Painel de Controle";

  return (
    <header className="h-22 flex items-center justify-between">
      <div className="">
        <h2 className="text-black text-[30px] font-semibold ml-7">
          {tituloAtual}
        </h2>
      </div>

      <div className="mr-7 p-2 bg-gray-200 border border-[#c5c6c7]  rounded-[100%] hover:scale-120 hover:bg-gray-300 hover:border-gray-400 transition-transform duration-300 cursor-pointer">
        <User size={30} />
      </div>
    </header>
  );
}
