import { Leaf, Wind, Shield, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Supports Comfortable Regularity",
    description:
      "Plant-based fibers work gently with your body to help maintain smoother, more consistent digestion.",
  },
  {
    icon: Wind,
    title: "Helps Ease Occasional Bloating",
    description:
      "A blend of digestive-support ingredients may help reduce that heavy, uncomfortable feeling after meals.",
  },
  {
    icon: Shield,
    title: "Encourages Gut Balance",
    description:
      "Probiotics and natural compounds help support a balanced gut environment for overall digestive wellness.",
  },
  {
    icon: Sprout,
    title: "Made With Plant-Based Ingredients",
    description:
      "Formulated without harsh stimulants, designed to support digestion in a gentle and natural way.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-8 px-4 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
         Why Many People Are Exploring This Option
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-lg border p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
