import helpingHeroes from "@/assets/Helping.png";
import keepIndianapolis from "@/assets/keepindianapolis.png";
import indianaRecovery from "@/assets/Indiana.png";
import packAway from "@/assets/Packaway.png";
import autismCommunity from "@/assets/Autism.png";
import southeastServices from "@/assets/Southeast.png";
import hopeTomorrow from "@/assets/Hopefor.png";

const partners = [
  { name: "Helping Heroes of America", color: "#1D4E89", image: helpingHeroes },
  {
    name: "Keep Indianapolis Beautiful",
    color: "#8CC63F",
    image: keepIndianapolis,
  },
  {
    name: "Indiana Center for Recovery",
    color: "#8B4513",
    image: indianaRecovery,
  },
  { name: "Pack Away Hunger", color: "#1D7FB7", image: packAway },
  {
    name: "Autism Community Connection",
    color: "#E74C3C",
    image: autismCommunity,
  },
  {
    name: "Southeast Community Services",
    color: "#F39C12",
    image: southeastServices,
  },
  { name: "Hope for Tomorrow", color: "#27AE60", image: hopeTomorrow },
];

const PartnerMarquee = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          We Support — Community & Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="flex-shrink-0 mx-8 transition-all duration-50 hover:scale-110"
              >
                <div
                  className="w-48 h-24 flex items-center justify-center rounded-lg shadow-lift bg-background p-4"
                  style={{
                    borderLeft: `4px solid ${partner.color}`,
                  }}
                >
                  {partner.image ? (
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-semibold text-sm text-center">
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="flex-shrink-0 mx-8 transition-all duration-50 hover:scale-110"
              >
                <div
                  className="w-48 h-24 flex items-center justify-center rounded-lg shadow-lift bg-background p-4"
                  style={{
                    borderLeft: `4px solid ${partner.color}`,
                  }}
                >
                  {partner.image ? (
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-semibold text-sm text-center">
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
