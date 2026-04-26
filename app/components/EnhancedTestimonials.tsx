"use client";
import Image from 'next/image';

function EnhancedTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      location: "Huambo",
      image: "/images/maria-santos.jpg",
      rating: 5,
      text: "O Digitalzango transformou completamente como planejo minhas colheitas. Agora sei exatamente quando plantar e colher. Minha produção aumentou 40%!",
      crop: "Milho e Feijão"
    },
    {
      id: 2,
      name: "João Fernandes", 
      location: "Benguela",
      image: "/images/Joao-fernandes.jpg",
      rating: 5,
      text: "Como agricultor há 20 anos, nunca tive acesso a informações tão precisas sobre o clima e calendário agrícola. Recomendo para todos os agricultores!",
      crop: "Batata Doce"
    },
    {
      id: 3,
      name: "Ana Mukongo",
      location: "Luanda",
      image: "/images/Ana-Mukonko.jpg",
      rating: 5,
      text: "Os guias e dicas são excelentes. A comunidade me ajudou muito com conselhos práticos. Minha horta urbana nunca esteve melhor!",
      crop: "Hortaliças"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">💬 Depoimentos Reais</h2>
          <p className="text-lg text-slate-300">Veja o que nossos agricultores estão dizendo sobre o Digitalzango</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="surface-card hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-slate-400 text-sm">{testimonial.location} • {testimonial.crop}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 italic mb-4">"{testimonial.text}"</p>
              <div className="text-xs text-[#22C55E] font-semibold bg-[#22C55E]/15 border border-[#22C55E]/20 px-3 py-1 rounded-full inline-block">
                ✓ Agricultor Verificado
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnhancedTestimonials;
