import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Movie Recommendation System",
    objective: "Collaborative filtering & content-based recommendations",
    tech: ["Python", "Pandas", "Scikit-learn"],
    result: "90% user satisfaction",
    image:
      "https://images.unsplash.com/photo-1710244182004-1c708b3f146d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2MTE0MjkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    span: "col-span-1 lg:col-span-2 row-span-2",
    featured: true,
  },
  {
    title: "IPL Win Predictor",
    objective: "Predict match winners with ML",
    tech: ["Python", "Pandas", "Scikit-learn"],
    result: "~85% accuracy",
    githubUrl: "#",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Embedded AI for Websites",
    objective: "Lightweight AI for real-time interaction",
    tech: ["JavaScript", "Python"],
    result: "Improved engagement",
    githubUrl: "#",
    span: "col-span-1 row-span-1",
  },
  {
    title: "3rd Sem SVIT Notes",
    objective: "Organized study resources",
    tech: ["HTML", "CSS", "JS"],
    result: "Quick access to notes",
    liveUrl: "https://hammidbinaejaz.github.io/3RD-SEM-SVIT-NOTES/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "4th Sem SVIT Notes",
    objective: "4th semester resources",
    tech: ["HTML", "CSS", "JS"],
    result: "Easy student access",
    liveUrl: "#",
    span: "col-span-1 row-span-1",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), {
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

  return (
    <motion.div
      ref={cardRef}
      className={`${project.span} group relative rounded-3xl glass overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
      {/* Gradient glow */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-br from-accent to-orange-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
      />

      {project.featured && project.image && (
        <div className="absolute inset-0">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/80" />
        </div>
      )}

      <div className="relative h-full p-8 flex flex-col justify-between shadow-premium group-hover:shadow-premium-lg transition-all duration-500">
        <div>
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 rounded-full glass text-xs shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.h3
            className="text-2xl lg:text-3xl mb-3 group-hover:gradient-text transition-all duration-300"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {project.objective}
          </p>
          <motion.p
            className="text-sm flex items-center gap-2"
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="h-4 w-4 text-accent" />
            <span>{project.result}</span>
          </motion.p>
        </div>

        <motion.div
          className="flex gap-3 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:shadow-premium-lg transition-all text-sm group/btn relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                View
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover/btn:from-accent/20 group-hover/btn:to-orange-500/20 transition-all duration-300" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:shadow-premium-lg transition-all text-sm group/btn relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                Code
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover/btn:from-accent/20 group-hover/btn:to-orange-500/20 transition-all duration-300" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function BentoProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl mb-8 tracking-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AI and ML projects showcasing practical applications and innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[320px] gap-6 max-w-7xl">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
