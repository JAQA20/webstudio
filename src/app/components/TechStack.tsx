import { motion } from "motion/react";
import { Language, translations } from "../i18n";
import reactLogo from "./img/react.svg";
import gitLogo from "./img/git.svg";
import githubLogo from "./img/github.svg";
import htmlLogo from "./img/html5.svg";
import phpLogo from "./img/php.svg";
import mysqlLogo from "./img/mysql.svg";
import javascriptLogo from "./img/javascript.svg";
import tailwindLogo from "./img/tailwind.svg";
import bootstrapLogo from "./img/bootstrap.svg";
import dockerLogo from "./img/docker.svg";
import pythonLogo from "./img/python.svg";
import railwayLogo from "./img/railway.svg";

const technologies = [
  { name: "React", categoryKey: "frontend", logo: reactLogo },
  { name: "HTML/CSS", categoryKey: "frontend", logo: htmlLogo },
  { name: "PHP", categoryKey: "language", logo: phpLogo },
  { name: "MySQL", categoryKey: "database", logo: mysqlLogo },
  { name: "JavaScript", categoryKey: "language", logo: javascriptLogo },
  { name: "Tailwind CSS", categoryKey: "styling", logo: tailwindLogo },
  { name: "Bootstrap", categoryKey: "styling", logo: bootstrapLogo },
  { name: "Docker", categoryKey: "devops", logo: dockerLogo },
  { name: "GitHub", categoryKey: "devops", logo: githubLogo },
  { name: "Git", categoryKey: "devops", logo: gitLogo },
  { name: "Python", categoryKey: "language", logo: pythonLogo },
  { name: "Railway", categoryKey: "deployment", logo: railwayLogo },
  // { name: "Redis", categoryKey: "cache" },
  // { name: "Prisma", categoryKey: "orm" },
] as const;

type TechStackProps = {
  t: (typeof translations)[Language];
};

export function TechStack({ t }: TechStackProps) {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f0f1a] to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 600 }}>
            {t.techStack.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.techStack.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 mx-auto mb-4 object-contain"
              />

              <div className="text-lg mb-2" style={{ fontWeight: 500 }}>
                {tech.name}
              </div>
              <div className="text-sm text-gray-500">
                {t.techStack.categories[tech.categoryKey]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.techStack.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
