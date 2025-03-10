
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  delay?: number;
}

const CertificateCard = ({ title, issuer, date, image, delay = 0 }: CertificateCardProps) => {
  return (
    <motion.div
      className="glass-card h-full rounded-xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <Award className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="mb-4 flex-grow">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Issuer:</span> {issuer}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Date:</span> {date}
          </p>
        </div>
        <button className="inline-flex items-center justify-center text-sm font-medium text-primary hover:underline">
          <span>View Certificate</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
