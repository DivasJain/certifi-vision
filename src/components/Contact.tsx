
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string;
  link?: string;
}) => (
  <motion.div
    className="flex items-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-foreground">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="section-container">
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
            Get In Touch
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Interested in working together? Feel free to contact me.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            className="glass-card rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem
                icon={Mail}
                title="Email"
                value={personalInfo.email}
                link={`mailto:${personalInfo.email}`}
              />
              <ContactItem
                icon={Phone}
                title="Phone"
                value={personalInfo.phone}
                link={`tel:${personalInfo.phone}`}
              />
              <ContactItem
                icon={MapPin}
                title="Location"
                value={personalInfo.location}
              />
              <ContactItem
                icon={Linkedin}
                title="LinkedIn"
                value={personalInfo.linkedin}
                link={`https://${personalInfo.linkedin}`}
              />
              <ContactItem
                icon={Github}
                title="GitHub"
                value={personalInfo.github}
                link={`https://${personalInfo.github}`}
              />
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Your message" rows={5} />
              </div>
              <Button className="w-full">
                <span>Send Message</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
