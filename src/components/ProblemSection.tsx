import problemImage from "@/assets/problem-image.jpg";
import { AlertCircle, TrendingDown, ArrowRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-8 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Does Poor Digestion Happen?
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
          <div className="md:w-1/3 shrink-0">
            <img
              src={problemImage}
              alt="Person experiencing digestive discomfort"
              className="rounded-lg shadow-sm w-full object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Digestive discomfort is more common than most people realize. Millions of adults deal with
              bloating, irregular bowel movements, and sluggish digestion on a daily basis. Understanding
              the root causes is the first step toward finding relief.
            </p>

            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Common Causes of Constipation
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Low fiber intake from processed and refined foods</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inadequate water consumption throughout the day</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sedentary lifestyle and lack of regular physical activity</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Chronic stress affecting the gut-brain connection</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Imbalanced gut microbiome from antibiotics or poor diet</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-primary" />
            The Modern Lifestyle Impact
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Today's fast-paced routines often leave little room for mindful eating. Highly processed
            meals, inconsistent schedules, and elevated stress levels can all disrupt the natural
            rhythm of your digestive system. Over time, these factors compound, making it harder for
            your body to maintain regularity and comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
