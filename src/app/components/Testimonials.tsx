import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

const authors = ["Sarah Chen", "Michael Rodriguez", "Emily Thompson"];

type TestimonialsProps = {
  t: (typeof translations)[Language];
};

export function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#0f0f1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 600 }}>
            {t.testimonials.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 flex items-center justify-center text-xl" style={{ fontWeight: 600 }}>
                  {authors[index].charAt(0)}
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 500 }}>
                    {authors[index]}
                  </div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
