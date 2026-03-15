import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Quero me cadastrar no lançamento The Journey.\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}`;
    window.open(
      `https://wa.me/5517992595117?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="gradient-form-card w-full max-w-md">
      <h2 className="font-body font-bold text-xl md:text-2xl text-foreground text-center mb-6">
        Quero ser avisado(a):
      </h2>

      {submitted ? (
        <p className="text-center text-foreground font-ui text-sm">
          Obrigado! Redirecionando para o WhatsApp...
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-ui text-sm text-muted-foreground mb-1 block">
              Seu nome: <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-foreground text-background font-ui text-sm outline-none placeholder:text-background/50"
            />
          </div>

          <div>
            <label className="font-ui text-sm text-muted-foreground mb-1 block">
              Seu whatsapp: <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              placeholder="DDD + Números"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-foreground text-background font-ui text-sm outline-none placeholder:text-background/50"
            />
          </div>

          <div>
            <label className="font-ui text-sm text-muted-foreground mb-1 block">
              Seu E-mail: <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground font-ui text-sm outline-none border border-border placeholder:text-muted-foreground"
            />
          </div>

          <button type="submit" className="w-full py-3.5 mt-2 rounded-lg bg-background text-foreground font-ui font-semibold text-sm hover:opacity-90 transition-all duration-300 cursor-pointer">
            Quero fazer cadastro
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
