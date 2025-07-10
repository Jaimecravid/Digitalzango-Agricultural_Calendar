"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setMessage("Por favor, insira seu email.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Por favor, insira um email válido.");
      return;
    }

    setStatus("loading");
    
    // Simulate API call (you can integrate with your email service later)
    setTimeout(() => {
      setStatus("success");
      setMessage("Obrigado! Você foi inscrito com sucesso.");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          📧 Receba Dicas Agrícolas Exclusivas
        </h2>
        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 1.000 agricultores que recebem nossas dicas semanais sobre plantio, 
          ferramentas digitais e oportunidades de negócio diretamente no email.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email..."
              className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {status === "loading" ? "Inscrevendo..." : "Inscrever-se"}
            </button>
          </div>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg ${
              status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              {message}
            </div>
          )}
        </form>
        
        <p className="text-sm text-green-200 mt-4">
          🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
        </p>
      </div>
    </section>
  );
}