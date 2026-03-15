const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-16 pb-8">
      <img
        src="https://www.studio131.com.br/wp-content/uploads/2026/02/Camiseta.png"
        alt="The Journey"
        className="w-48 md:w-56 mb-8 object-contain"
      />
      <h1 className="font-body font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight max-w-2xl uppercase">
        Inscreva-se para receber novas oportunidades e lançamentos
      </h1>
      <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
        Você terá <strong className="text-foreground">acesso prioritário</strong> aos cursos, aulas e programas da{" "}
        <strong className="text-foreground">The Journey</strong> no lançamento.
      </p>
    </section>
  );
};

export default HeroSection;
