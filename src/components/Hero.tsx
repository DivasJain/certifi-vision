
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />

      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Full-Stack Developer
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transforming complex problems into elegant solutions through code.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button asChild className="rounded-full px-8">
                <a href={`mailto:${personalInfo.email}`}>
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 max-w-sm md:max-w-md glass-card rounded-2xl p-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-background rounded-2xl p-8 animate-glow">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Email</h3>
                  <p className="font-mono text-sm">{personalInfo.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Phone</h3>
                  <p className="font-mono text-sm">{personalInfo.phone}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Location</h3>
                  <p className="font-mono text-sm">{personalInfo.location}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Profiles</h3>
                  <div className="flex space-x-4">
                    <a 
                      href={`https://${personalInfo.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={`https://${personalInfo.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2,
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              className="rounded-full border border-border"
            >
              <a href="#about">
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
