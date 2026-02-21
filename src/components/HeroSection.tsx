import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section
      className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Natural herbs and supplements for digestive health"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Struggling With Bloating, Slow Digestion or Constipation?
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          If you feel uncomfortable, heavy, or irregular — you're not alone. Here's a gentle, plant-based approach that may help.
        </p>
        <a
          href="https://hop.clickbank.net/?affiliate=billy0244&vendor=synogut&cbpage=tsl&tid=pinterest&affop=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Watch How It Works
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
