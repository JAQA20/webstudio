import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import { Language, translations } from "../i18n";

type HeroProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

export function Hero({ language, setLanguage, t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between gap-4">
        <a href="#" aria-label="JQ Web Studio inicio" className="shrink-0">
          <BrandLogo theme="dark" className="h-10 w-auto" />
        </a>

        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md shadow-lg shadow-black/20">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              language === "en"
                ? "bg-white text-black shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
            aria-pressed={language === "en"}
          >
            {t.languageToggle.en}
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              language === "es"
                ? "bg-white text-black shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
            aria-pressed={language === "es"}
          >
            {t.languageToggle.es}
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ fontWeight: 600 }}
        >
          {t.hero.titleLine1}
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
            <span>{t.hero.primaryButton}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              const section = document.getElementById("FeaturedProjects");

              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {t.hero.secondaryButton}
          </button>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-white/5 p-2">
            <img
              src="https://images.unsplash.com/photo-1625838144804-300f3907c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkJTIwZGFyayUyMFVJfGVufDF8fHx8MTc3ODIxMzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt={t.hero.imageAlt}
              className="w-small rounded-md"
            />
          </div> 
        </motion.div> */}
      </div>
    </section>
  );
}
