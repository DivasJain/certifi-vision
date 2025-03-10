
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import CertificateCard from "./CertificateCard";

const Certifications = () => {
  return (
    <section id="certifications" className="section-container bg-secondary/30">
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
            Certifications
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: a0.2, duration: 0.6 }}
          >
            Professional courses and certifications I've completed.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
