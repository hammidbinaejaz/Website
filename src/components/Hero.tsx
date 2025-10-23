import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated gradient orbs with glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(247,147,30,0.05) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-premium"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-accent" />
              </motion.div>
              <span className="text-sm">Available for opportunities</span>
            </motion.div>

            <div>
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hammid
                <br />
                <span className="gradient-text">
                  Bin Aejaz
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl sm:text-3xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  background: "linear-gradient(135deg, #09090b 0%, #52525b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI & ML Enthusiast
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Building intelligent systems that learn, adapt, and solve real-world
                problems. Transforming complex data into actionable insights through
                machine learning and neural networks.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white shadow-premium-lg hover:shadow-2xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass shadow-premium hover:shadow-premium-lg group">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/hammidbinaejaz", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/hamid-bin-aejaz", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hamidbinaejaz@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-4 rounded-2xl glass shadow-premium hover:shadow-premium-lg transition-all relative group"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-orange-500/20 transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Bento Grid */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 h-[700px] perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              perspective: "1000px",
            }}
          >
            {/* Large quote card */}
            <motion.div
              className="col-span-2 row-span-3 rounded-3xl relative overflow-hidden group"
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-orange-500 to-amber-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-10 flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <motion.p
                    className="text-3xl sm:text-4xl leading-relaxed"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
                  >
                    "AI is not about replacing humans, but{" "}
                    <span className="underline decoration-wavy decoration-white/50">
                      augmenting
                    </span>{" "}
                    human capabilities."
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              className="rounded-3xl glass shadow-premium hover:shadow-premium-lg p-8 group relative overflow-hidden"
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05, z: 50 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-orange-500/10 transition-all duration-500" />
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-3 gradient-text"
                  whileHover={{ scale: 1.1 }}
                >
                  5+
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  ML Projects
                </p>
              </div>
            </motion.div>

            {/* Status card */}
            <motion.div
              className="rounded-3xl glass shadow-premium hover:shadow-premium-lg p-8 group relative overflow-hidden"
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05, z: 50 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm">Learning</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Deep Learning & Neural Networks
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 rounded-full glass shadow-premium flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
