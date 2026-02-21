import naturalSolutionImage from "@/assets/natural-solution-image.jpg";
import { Wheat, Flower2, Microscope } from "lucide-react";

const NaturalSolutionSection = () => {
  return (
    <section className="py-8 px-4 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Supporting Digestion Naturally
        </h2>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-start mb-10">
          <div className="md:w-1/3 shrink-0">
            <img
              src={naturalSolutionImage}
              alt="Natural herbs, fiber and probiotics for gut health"
              className="rounded-lg shadow-sm w-full object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Before reaching for over-the-counter remedies, it's worth understanding the natural
              building blocks of a healthy gut. Research consistently points to a few key areas that
              can make a meaningful difference.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Wheat className="w-5 h-5 text-primary" />
                  The Role of Dietary Fiber
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fiber is essential for maintaining regular bowel movements. Soluble fiber absorbs
                  water and forms a gel-like substance that softens stool, while insoluble fiber adds
                  bulk and helps food move through the digestive tract more efficiently. Most adults
                  don't consume enough fiber in their daily diet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Flower2 className="w-5 h-5 text-primary" />
                  Gut-Supporting Herbs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certain herbs have been used for centuries to support digestive function. Ingredients
                  like aloe vera, flaxseed, and psyllium husk are well-known for their gentle,
                  gut-friendly properties. These natural compounds work with your body rather than
                  against it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-primary" />
                  Probiotics &amp; Digestive Enzymes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A balanced microbiome plays a crucial role in digestion, nutrient absorption, and
                  immune function. Probiotics introduce beneficial bacteria, while digestive enzymes
                  help break down food more effectively — reducing gas, bloating, and discomfort after
                  meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalSolutionSection;
