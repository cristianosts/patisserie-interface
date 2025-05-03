
export function Footer() {
    return (
        <footer className="text-center w-full py-16 bgheader ">
             <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <i className="bx bxs-map text-xl align-middle mr-2"></i>
                <span className="align-middle">Endereço: Estrada para Salgado, 605 - Lagarto, SE</span>
              </li>
              <li>
                <i className="bx bxs-phone text-xl align-middle mr-2"></i>
                <span className="align-middle">Telefone: (79) 99836-2685</span>
              </li>
              <li>
                <i className="bx bxs-envelope text-xl align-middle mr-2"></i>
                <span className="align-middle">Email: carol-fontes1912@hotmail.com</span>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="flex flex-col space-y-2">
              <button className="">
                <a href="#" className="hover:text-pink-600 hover:border-b-2 hover:border-b-white transition-[0.3s] ease-in-out">
                  Home
                </a>
              </button>
              <button>
                <a href="#" className="hover:text-pink-600 hover:border-b-2 hover:border-b-white transition-[0.3s] ease-in-out">
                  Delícias
                </a>
              </button>
              <button>
                <a href="#" className="hover:text-pink-600 hover:border-b-2 hover:border-b-white transition-[0.3s] ease-in-out">
                  Orçamentos
                </a>
              </button>
              <button>
                <a href="#" className="hover:text-pink-600 hover:border-b-2 hover:border-b-white transition-[0.3s] ease-in-out">
                  Contatos
                </a>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex justify-center space-x-4">
              
                <button className="transition-[0.3s] ease-in-out">
                    <a href="https://www.instagram.com/_delicias.da.carol_?igsh=cmI4d2xkNXRva2lu
                      " target="_blank" className="hover:text-gray-300">
                      <i className="bx bxl-facebook-circle text-3xl hover:text-pink-600"></i>
                    </a>
                </button>
              
              
                <button className="transition-[0.3s] ease-in-out">
                    <a href="https://www.instagram.com/_delicias.da.carol_?igsh=cmI4d2xkNXRva2lu
                      " target="_blank" className="hover:text-gray-300">
                      <i className="bx bxl-instagram-alt text-3xl hover:text-pink-600"></i>
                    </a>
                </button>
              
            
                <button className="transition-[0.3s] ease-in-out">
                    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5579998362685" target="_blank" className="hover:text-gray-300">
                      <i className="bx bxl-whatsapp text-3xl hover:text-pink-600"></i>
                    </a>
                </button>
            
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Delícias da Carol. Todos os direitos reservados.</p>
        </div>
      </div>
        </footer>
    )
}