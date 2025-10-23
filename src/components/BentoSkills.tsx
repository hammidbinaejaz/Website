import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Code2,
  Brain,
  Database,
  TrendingUp,
  GitBranch,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    description: "ML frameworks & data analysis",
    icon: Code2,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Machine Learning",
    description: "Building intelligent systems with 90% accuracy",
    icon: Brain,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Java",
    description: "OOP & enterprise",
    icon: Code2,
    gradient: "from-orange-500 via-red-500 to-rose-500",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Data Analytics",
    description: "Extract insights from data",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    span: "col-span-1 row-span-1",
  },
  {
    name: "AI & Deep Learning",
    description: "Neural networks, predictions & classification",
    icon: Sparkles,
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
    span: "col-span-2 row-span-1",
  },
  {
    name: "DSA",
    description: "Algorithm optimization",
    icon: Database,
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Git/GitHub",
    description: "Version control",
    icon: GitBranch,
    gradient: "from-slate-700 via-slate-600 to-gray-700",
    span: "col-span-1 row-span-1",
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`${skill.span} group relative rounded-3xl glass overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, z: 50 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{ transform: "translateZ(10px)" }}
      />

      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
      />

      <div className="relative h-full p-8 flex flex-col justify-between shadow-premium group-hover:shadow-premium-lg transition-all duration-500">
        <motion.div
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} text-white w-fit shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-7 w-7" />
        </motion.div>

        <div>
          <h3 className="text-2xl mb-3 group-hover:gradient-text transition-all duration-300">
            {skill.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function BentoSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl mb-8 tracking-tight">
            Skills &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive toolkit for building intelligent systems and solving
            complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6 max-w-7xl">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
