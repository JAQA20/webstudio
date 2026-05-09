import { Target, Layers, Gauge, Shield } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

const valueIcons = [Target, Layers, Gauge, Shield];

type PhilosophyProps = {
  t: (typeof translations)[Language];
};

export function Philosophy({ t }: PhilosophyProps) {
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
            {t.philosophy.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.philosophy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.philosophy.items.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 500 }}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic">
            {t.philosophy.quote}
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
