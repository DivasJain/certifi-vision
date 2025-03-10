
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SkillModel from "./SkillModel";

// Map for skill icons and colors
const skillIcons = {
  GitHub: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
  React: "/lovable-uploads/1c715944-c74d-4ba8-b27a-747e9dfc4055.png", 
  Flutter: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
  VSCode: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
  Docker: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
  Java: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
  Python: "/lovable-uploads/8835acc6-b87e-4e83-951f-670ecde61778.png",
};

const skillColors = {
  GitHub: "#2b3137",
  React: "#61dafb",
  Flutter: "#0468d7",
  VSCode: "#0078d7",
  Docker: "#2496ed",
  Java: "#e32c2e",
  Python: "#3776ab",
};

const Skills = () => {
  const featuredSkills = ["GitHub", "React", "Flutter", "VSCode", "Docker", "Java", "Python"];

  const skillGroups = [
    { title: "Languages", skills: skills.languages },
    { title: "Libraries", skills: skills.libraries },
    { title: "Frameworks", skills: skills.frameworks },
    { title: "Dev Tools", skills: skills.devTools },
    { title: "Databases", skills: skills.databases },
    { title: "Operating Systems", skills: skills.os },
    { title: "Soft Skills", skills: skills.softSkills },
    { title: "Areas of Interest", skills: skills.interests },
  ];

  return (
    <section id="skills" className="section-container bg-secondary/30">
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
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The tools, technologies, and skills I work with.
          </motion.p>
        </div>

        {/* Featured Skills with 3D Models */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {featuredSkills.map((skill, index) => (
              <SkillModel
                key={skill}
                icon={skillIcons[skill as keyof typeof skillIcons]}
                name={skill}
                color={skillColors[skill as keyof typeof skillColors]}
              />
            ))}
          </div>
        </motion.div>

        {/* All Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
