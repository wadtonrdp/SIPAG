import Image from "next/image";
import Botão from "@/components/ui/Button";

export default function Login() {
  return (
    <main className="bg-[#00AE9D] flex min-h-screen w-full font-sans">
      <div className="hidden lg:flex h-screen w-[450px] flex-col items-center justify-center bg-[#C9D200] p-12 shadow-xl">
        <div className="text-center text-slate-900 max-w-sm">
          <h1 className="text-[40px] font-black mb-2 tracking-tight">SIPAG</h1>
          <div className="h-1 w-20 bg-slate-900 mx-auto mb-8 rounded-full"></div>

          <h2 className="text-[28px] font-bold mb-4 leading-tight">
            Bem-vindo
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90 mb-10">
            Conecte-se para acessar seu painel personalizado e gerenciar
            equipamentos com eficiência.
          </p>

          <div className="relative w-full aspect-square mt-4 hover:scale-112 transition-transform duration-500">
            <Image
              src="/assets/Welcome_Img.png"
              alt="Ilustração SIPAG"
              width={1200}
              height={800}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="flex flex-col items-center w-full max-w-[460px]">
        <img src="/assets/Logo_SIPAG.png" alt="Logo SIPAG" className="mb-6" />
        <div className="bg-[#C9D200] text-slate-900 w-full max-w-[460px] p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20">
          <h2 className="text-center text-[32px] font-bold mb-8">
            Acessar Conta
          </h2>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wider ml-1">
                Login
              </label>
              <input
                type="text"
                placeholder="Digite seu usuário"
                className="w-full h-13 p-4 border border-slate-300 text-black rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wider ml-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-13 p-4 border border-slate-300 text-black rounded-xl bg-slate-50 shadow-inner focus:ring-2 focus:ring-[#00AE9D] outline-none transition-all"
              />
            </div>

            <Botão className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold h-14 rounded-xl shadow-lg transform active:scale-95 duration-200">
              Confirmar
            </Botão>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#"
                className="text-center text-[15px] font-medium hover:underline decoration-2 underline-offset-4"
              >
                Esqueceu a senha?
              </a>
              <p className="text-center text-sm opacity-70">
                Suporte: suporte@sipag.com.br
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </main>
  );
}
