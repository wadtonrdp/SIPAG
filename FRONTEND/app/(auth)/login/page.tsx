import Botão from "@/components/ui/Button"


export default function login(){
    return(
<main className="bg-[#00AE9D] flex min-h-screen w-full">
      
      <img 
        src="https://placehold.co/600x900" className="h-screen w-auto object-cover" alt="Background"/>

      <div className="flex-1 flex items-center justify-center p-10">
        
        <div className="bg-[#C9D200] font-primary text-white text-[24px] w-full max-w-[480px] p-8 rounded-[15px] shadow-2xl">
          <h2 className="text-center text-[34px] font-bold mb-6">Faça Login</h2>
          
          <form action="" className="flex flex-col gap-4">
            <div>
              <label className="text-lg">Login</label>
              <input type="text" className="text-xl w-full h-12 p-2 outline-none text-white rounded-sm" />
            </div>

            <div>
              <label className="text-lg">Senha</label>
              <input type="password" className="text-xl w-full h-12 p-2 outline-none text-white rounded-sm" />
            </div>

            <Botão className="w-full mt-4 bg-gray-50 hover:bg-gray-300 duration-500 text-[#C9D200] font-semibold h-12">
              Confirmar
            </Botão>
            
            <a href="" className="block text-center mt-2 text-[18px] underline hover:text-blue-700 duration-270">
              esqueceu a senha/redefinir
            </a>
          </form>
        </div>
      </div>
    </main>
    )
}
