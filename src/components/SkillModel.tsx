
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface SkillModelProps {
  icon: string;
  name: string;
  color: string;
}

const SkillModel = ({ icon, name, color }: SkillModelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rotationX = 0;
    let rotationY = 0;
    let animationId: number;
    let isHovering = false;

    const animate = () => {
      if (!isHovering) {
        rotationY += 0.005;
      }
      if (container) {
        container.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      rotationX = mouseY * 0.1;
      rotationY = mouseX * 0.1;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="perspective-800 w-20 h-20 mb-3">
        <div
          ref={containerRef}
          className="w-full h-full transform-style-3d transition-transform duration-200"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div 
            className="absolute inset-0 flex items-center justify-center backface-hidden rounded-xl"
            style={{ 
              backfaceVisibility: "hidden", 
              backgroundColor: color,
              boxShadow: `0 10px 20px -10px ${color}80`
            }}
          >
            <img src={icon} alt={name} className="w-12 h-12 object-contain" />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center backface-hidden rounded-xl transform-rotate-y-180"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)",
              backgroundColor: color,
              boxShadow: `0 10px 20px -10px ${color}80`
            }}
          >
            <img src={icon} alt={name} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillModel;
