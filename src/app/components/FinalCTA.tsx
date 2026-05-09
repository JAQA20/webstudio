import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

type FinalCTAProps = {
  t: (typeof translations)[Language];
};

export function FinalCTA({ t }: FinalCTAProps) {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-blue-500/20 border border-white/20 p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl mb-6"
              style={{ fontWeight: 600 }}
            >
              {t.finalCta.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {t.finalCta.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://meetings.hubspot.com/javier-quiros-arce",
                    "_blank"
                  )
                }
                className="group px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.finalCta.primaryButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button
                onClick={() =>
                  window.open(
                    "https://meetings.hubspot.com/javier-quiros-arce",
                    "_blank"
                  )
                }
                className="px-8 py-4 bg-green-500/20 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-green-500/60 transition-all duration-300"
              >
                {t.finalCta.secondaryButton}
              </button> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
