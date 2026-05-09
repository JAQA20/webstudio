import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "../i18n";

const projectImages = [
  "./src/app/components/img/LaComanda-lleno.png",
  // "https://images.unsplash.com/photo-1734193488029-fa4fe95cd526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkJTIwZGFyayUyMFVJfGVufDF8fHx8MTc3ODIxMzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwU2FhUyUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3ODIxMzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1774901128215-3549cc686921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkJTIwZGFyayUyMFVJfGVufDF8fHx8MTc3ODIxMzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
];

const projectTags = [
  ["PHP", "Tailwind CSS", "MySQL", "Docker"],
  ["Next.js", "TypeScript", "AWS"],
  ["React", "WebSocket", "Redis"],
];

type FeaturedProjectsProps = {
  t: (typeof translations)[Language];
};

export function FeaturedProjects({ t }: FeaturedProjectsProps) {
  return (
    <section
      className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#0f0f1a]"
      id="FeaturedProjects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 600 }}>
            {t.featuredProjects.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.featuredProjects.description}
          </p>
        </motion.div>

        <div className="space-y-12">
          {t.featuredProjects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-sm text-blue-400 mb-4">
                    <span>{project.stats}</span>
                  </div>
                  <h3
                    className="text-3xl md:text-4xl mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projectTags[index].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="group/btn inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                    <span>{t.featuredProjects.cta}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
