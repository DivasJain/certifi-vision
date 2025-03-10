
import { motion } from "framer-motion";
import { about } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="section-container">
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
            About Me
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get to know more about my background and what drives me.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="glass-card rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {about.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Innovative", "Detail-oriented", "Problem-solver", "Collaborative", "Fast-learner"].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">🎓 Education</h4>
                    <p className="text-muted-foreground">Bachelor of Technology in Information Technology</p>
                  </div>
                  <div>
                    <h4 className="font-medium">💼 Experience</h4>
                    <p className="text-muted-foreground">Web Development, Machine Learning, App Development</p>
                  </div>
                  <div>
                    <h4 className="font-medium">🔍 Passion</h4>
                    <p className="text-muted-foreground">Using technology to solve real-world problems</p>
                  </div>
                  <div>
                    <h4 className="font-medium">🌱 Growth</h4>
                    <p className="text-muted-foreground">Continuously learning and expanding my skillset</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
