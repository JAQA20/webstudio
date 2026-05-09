import { Lightbulb, LayoutGrid, Code, TestTube, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

const stepIcons = [Lightbulb, LayoutGrid, Code, TestTube, Rocket];
const stepNumbers = ["01", "02", "03", "04", "05"];

type ProcessProps = {
  t: (typeof translations)[Language];
};

export function Process({ t }: ProcessProps) {
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
            {t.process.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-blue-500/50 hidden md:block" />

          <div className="space-y-16">
            {t.process.items.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={stepNumbers[index]}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <div className="inline-block">
                      <div className="inline-flex items-center gap-4 mb-4">
                        <span className="text-5xl text-blue-400/30" style={{ fontWeight: 700 }}>
                          {stepNumbers[index]}
                        </span>
                      </div>
                      <h3 className="text-3xl mb-4" style={{ fontWeight: 600 }}>
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"} flex ${index % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
