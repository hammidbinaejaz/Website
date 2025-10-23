import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, ChefHat, Mountain, Grid3x3, Feather, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const certificates = [
  { title: "AI Fundamentals", issuer: "IBM", downloadable: true },
  { title: "Data Structures", issuer: "Infosys" },
  { title: "Advanced DSA", issuer: "Infosys" },
  { title: "Artificial Intelligence", issuer: "Infosys" },
  { title: "Querying SQL", issuer: "Infosys" },
];

const hobbies = [
  {
    name: "Cooking",
    icon: ChefHat,
    image:
      "https://images.unsplash.com/photo-1632406646314-0621d9a3fea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZm9vZCUyMGFydGlzdGljfGVufDF8fHx8MTc2MTE5NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Trekking",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjExMjE3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  { name: "Sudoku", icon: Grid3x3 },
  { name: "Writing Poems", icon: Feather },
];

export function BentoCertificatesHobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-12 tracking-tight">
              <span className="gradient-text">Certificates</span>
            </h2>

            <div className="grid gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="group relative rounded-2xl glass p-6 hover:shadow-premium-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Award className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    {cert.downloadable && (
                      <motion.button
                        className="p-2.5 rounded-xl hover:bg-accent/10 transition-all"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="h-4 w-4 text-accent" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-12 tracking-tight">
              Beyond{" "}
              <span className="gradient-text">the Code</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    className={`relative rounded-3xl glass overflow-hidden hover:shadow-premium-lg transition-all duration-500 ${
                      index === 0 ? "col-span-2 h-72" : "h-56"
                    } group`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-br from-accent to-orange-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
                    />

                    {hobby.image && (
                      <>
                        <ImageWithFallback
                          src={hobby.image}
                          alt={hobby.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/70 transition-all duration-500" />
                      </>
                    )}

                    <div
                      className={`relative h-full p-6 flex flex-col justify-between ${
                        hobby.image ? "text-white" : ""
                      }`}
                    >
                      <motion.div
                        className={`inline-flex p-3 rounded-xl w-fit shadow-lg ${
                          hobby.image
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-gradient-to-br from-accent to-orange-500 text-white"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <motion.h3
                        className="text-2xl"
                        whileHover={{ x: 4 }}
                      >
                        {hobby.name}
                      </motion.h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
