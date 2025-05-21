export default function Footer() {
  return (
    <footer className="bg-chocolate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-playfair font-bold text-3xl text-white">
              É<span className="text-secondary">Doce</span>
            </a>
            <p className="mt-2 text-gray-300">Adoçando momentos especiais</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-montserrat font-semibold mb-3 text-secondary">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#quem-somos" className="hover:text-secondary transition">Quem Somos</a></li>
                <li><a href="#produtos" className="hover:text-secondary transition">Produtos</a></li>
                <li><a href="#datas-especiais" className="hover:text-secondary transition">Datas Especiais</a></li>
                <li><a href="#depoimentos" className="hover:text-secondary transition">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-3 text-secondary">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/5566999852299" className="flex items-center hover:text-secondary transition">
                    <i className="fab fa-whatsapp mr-2"></i>
                    +55 66 99985-2299
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/edocesinop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-secondary transition"
                  >
                    <i className="fab fa-instagram mr-2"></i>
                    @edocesinop
                  </a>
                </li>
                <li className="flex items-start">
                  <i className="far fa-clock mt-1 mr-2"></i>
                  <span>Todos os dias, 9h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ÉDoce Confeitaria Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
