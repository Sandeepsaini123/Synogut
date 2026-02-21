import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amanda R.",
      location: "California",
      text: "After trying different approaches, I decided to focus on plant-based digestive support. Over a few weeks, I started feeling lighter and more comfortable.",
    },
    {
      name: "Jason M.",
      location: "Texas",
      text: "I was dealing with occasional bloating and irregular digestion. Adding a natural formula to my routine made a noticeable difference for me.",
    },
    {
      name: "Priya S.",
      location: "New York",
      text: "It wasn’t an overnight change, but gradually I began to feel more balanced and regular. I appreciate that it fits easily into my daily routine.",
    },
  ];

  return (
    <section className="py-8 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Real Experiences from Users
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Stories shared by adults exploring natural digestive support
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;