import { Code2, Database, Layout, Zap, Globe, Boxes } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

const serviceIcons = [Code2, Globe, Boxes, Database, Layout, Zap];

type ServicesProps = {
  t: (typeof translations)[Language];
};

export function Services({ t }: ServicesProps) {
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
            {t.services.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 500 }}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
