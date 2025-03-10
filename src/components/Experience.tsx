
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="section-title inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A glimpse into my professional journey and achievements.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2" />

          {/* Experience Items */}
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-20 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background transform -translate-x-1/2 z-10">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`glass-card rounded-xl p-6 shadow-md ${
                      index % 2 === 0
                        ? "md:rounded-tr-none md:mr-5"
                        : "md:rounded-tl-none md:ml-5"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-primary px-2 py-1 rounded-full bg-primary/10 mb-2">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <h4 className="text-lg text-muted-foreground mb-4">{job.company}</h4>
                      <ul className="space-y-2 text-left">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
