import productImage from "@/assets/product-image.png";
import { Leaf, Cog, ShieldCheck, Users, ArrowRight } from "lucide-react";

const ProductSection = () => {
  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Introducing SynoGut
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg">
          A plant-based digestive formula designed to support gut health.
        </p>

        <div className="flex justify-center mb-10">
          <img
            src={productImage}
            alt="SynoGut supplement with natural ingredients like psyllium husk, flaxseed, and aloe vera"
            className="rounded-lg shadow-sm max-w-xs w-full object-cover"
          />
        </div>

        <div className="bg-card rounded-lg border p-6 md:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Key Ingredients
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Psyllium Husk:</strong> Natural fiber for digestive support</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Flaxseed:</strong> Rich in omega-3 and fiber</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Aloe Vera:</strong> Soothes and supports gut health</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Prune Extract:</strong> Natural digestive aid</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Probiotics:</strong> Beneficial bacteria for gut balance</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Cog className="w-5 h-5 text-primary" />
              How It Works
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The formula works by combining soluble and insoluble fibers to support bowel
              regularity, while probiotics and natural laxatives help maintain a balanced gut
              environment. It's designed to be taken daily as part of a healthy routine.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Quality & Safety
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Every capsule is made here, in the USA, in our <strong>FDA approved</strong> and{" "}
                <strong>GMP certified facility</strong>, under sterile, strict and precise standards.
              </p>
              <p>
                Synogut capsules are <strong>non-GMO</strong>. You can rest assured that they do not
                contain any dangerous stimulants or toxins, and more importantly, they are not habit
                forming.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Who May Benefit
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              SynoGut may be helpful for adults experiencing occasional constipation, bloating, or
              general digestive sluggishness. As with any supplement, individual results can vary,
              and it's always a good idea to consult with a healthcare provider before starting
              something new.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://hop.clickbank.net/?affiliate=billy0244&vendor=synogut&cbpage=tsl&tid=pinterest"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Learn More on the Official Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
