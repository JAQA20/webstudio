import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Language, translations } from "../i18n";

type PricingProps = {
  t: (typeof translations)[Language];
};

export function Pricing({ t }: PricingProps) {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 600 }}>
            {t.pricing.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.pricing.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-b from-blue-500/15 to-violet-500/10 border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>
                    {plan.title}
                  </h3>
                  {plan.featured ? (
                    <span className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/30">
                      {t.pricing.featuredLabel}
                    </span>
                  ) : null}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl" style={{ fontWeight: 600 }}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{plan.note}</p>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <h3 className="text-3xl mb-4" style={{ fontWeight: 600 }}>
                {t.pricing.custom.heading}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {t.pricing.custom.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {t.pricing.custom.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300 mb-3">
                {t.pricing.custom.startingAtLabel}
              </p>
              <p className="text-4xl mb-3" style={{ fontWeight: 600 }}>
                {t.pricing.custom.price}
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                {t.pricing.custom.note}
              </p>
              <ul className="space-y-3">
                {t.pricing.custom.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-violet-300 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
