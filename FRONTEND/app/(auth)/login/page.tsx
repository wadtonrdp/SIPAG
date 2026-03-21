import Botão from "@/components/ui/Button"


export default function login(){
    return(
        <body className="bg-[#00AE9D]">
            <div className="flex items-center gap-x-[30%] gap-4">

                <img src="https://placehold.co/600x900" className="h-screen w-auto object-fill"/>

                <div className="bg-[#C9D200] font-primary text-white text-[24px] h-auto max-h-120 min-h-100 w-full max-w-120 p-7 rounded-[15px] shadow-xl/30 ">
                    <h2 className="text-center text-[34px] font-bold">Faça Login</h2>
                    <form action="" >
                        <label htmlFor="" className="text-lg">Login</label><br />
                        <input type="text" className="text-xl w-full h-12 p-2 outline-none"/><br />
                        <label htmlFor="" className="text-lg">Senha</label><br />
                        <input type="password" className="text-xl w-full h-12 p-2 outline-none "/>
                        <div className="flex justify-center">
                        <Botão className="w-full mt-9 bg-gray-50 hover:bg-gray-300 duration-550 text-[#C9D200] hover:text-[#8b9200] font-semibold h-12 ">Confirmar</Botão>
                        </div>
                        <a href="" className="block text-center mb-[-4] text-[20px] underline hover:text-blue-700 duration-270">esqueceu a senha/redefinir</a>
                    </form>
                </div>
            </div>
        </body>
    )
}