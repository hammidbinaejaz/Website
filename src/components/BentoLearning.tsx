import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const books = [
  { title: "Atomic Habits", author: "James Clear", featured: true },
  { title: "Do Your Work", author: "Steven Pressfield" },
  { title: "Why We Sleep", author: "Matthew Walker" },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    featured: true,
  },
  { title: "The Brain: The Story of You", author: "David Eagleman" },
  { title: "Pir-e-Kamil", author: "Umera Ahmed" },
  { title: "The Happiness Advantage", author: "Shawn Achor" },
  { title: "Grit", author: "Angela Duckworth" },
];

export function BentoLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1582203914614-e23623afc345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaWJyYXJ5fGVufDF8fHx8MTc2MTE4MTA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Books"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl mb-8 tracking-tight">
            Learning &{" "}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Books that inspire personal and professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              className={`group relative rounded-3xl glass p-8 hover:shadow-premium-lg transition-all duration-500 ${
                book.featured ? "sm:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-accent to-orange-500 opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500 -z-10"
              />

              <div className="flex flex-col h-full">
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent to-orange-500 text-white w-fit mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BookOpen className="h-6 w-6" />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className={`mb-3 leading-tight group-hover:gradient-text transition-all duration-300 ${
                      book.featured ? "text-2xl" : "text-xl"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {book.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
