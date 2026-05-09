import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Language, translations } from "../i18n";

type FooterProps = {
  t: (typeof translations)[Language];
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandLogo theme="dark" className="h-11 w-auto" />
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/JAQA20"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jaqawebstudio"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="mailto:jaquirosjob20@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 500 }}>
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-3 text-gray-400">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 500 }}>
              {t.footer.companyHeading}
            </h4>
            <ul className="space-y-3 text-gray-400">
              {t.footer.company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
