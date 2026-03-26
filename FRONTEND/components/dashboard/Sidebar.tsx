"use client";

import Link from "next/link";
import { House, SquareLibrary, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const activeClass = (href: string) =>
    pathname === href ? "bg-[#C9D200]" : "hover:bg-[#C9D200]/55";

  return (
    <div className="hidden lg:flex h-screen w-[350px] flex-col items-center bg-white shadow-xl">
      <div className="text-center text-slate-900 max-w-sm">
        <div className="bg-[#00AE9D] h-22 w-[350px] flex-none">
          <h1 className="text-white text-[50px] text-center font-black">
            SIPAG
          </h1>
        </div>

        <nav className="p-12">
          <ul className="text-[18px] font-semibold mb-4 space-y-3">
            <li>
              <Link
                href="/agente"
                className={`flex items-center gap-3 p-3 rounded-[10px] leading-tight transition-colors group ${activeClass("/agente")}`}
              >
                <House size={20} />
                <span>Painel do Agente</span>
              </Link>
            </li>

            <li>
              <Link
                href="/agente/inventario"
                className={`flex items-center gap-3 p-3 rounded-[10px] leading-tight transition-colors group ${activeClass("/agente/inventario")}`}
              >
                <SquareLibrary size={20} />
                <span>Inventário Local</span>
              </Link>
            </li>

            <li>
              <Link
                href="/agente/equipamento"
                className={`flex items-center gap-3 p-3 rounded-[10px] leading-tight transition-colors group ${activeClass("/agente/equipamento")}`}
              >
                <Settings size={20} />
                <span>Equipamento</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
