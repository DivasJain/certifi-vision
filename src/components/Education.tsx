
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-container">
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
            Education
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My academic background and qualifications.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 mr-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-muted-foreground mb-2">{edu.degree}</p>
                  <div className="flex items-center">
                    {edu.period && (
                      <span className="text-sm text-muted-foreground mr-3">
                        {edu.period}
                      </span>
                    )}
                    <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      GPA: {edu.gpa}
                    </span>
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

export default Education;
