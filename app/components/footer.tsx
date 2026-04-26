"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11182A] text-slate-300 py-8 mt-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-[#22C55E] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#22C55E] transition-colors">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="/affiliate-disclosure" className="hover:text-[#22C55E] transition-colors">
                  Divulgação de Afiliados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/help" className="hover:text-[#22C55E] transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#22C55E] transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sobre" className="hover:text-[#22C55E] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#22C55E] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#22C55E] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22C55E] transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Digitalzango Calendário Agrícola. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido por Digitalzango
          </p>
        </div>
      </div>
    </footer>
  );
}