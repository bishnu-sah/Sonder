import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sonder has transformed our sales training. The AI-driven conversations feel incredibly lifelike, giving our team the confidence they need before talking to customers.",
    name: "Sarah Jenkins",
    role: "VP of Sales",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "We've seen a noticeable improvement in our team's customer satisfaction scores since adopting Sonder. The detailed feedback is a game-changer.",
    name: "Marcus Vance",
    role: "Head of Customer Success",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 bg-[#FAF8F5]/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-eggplant tracking-tight">
            Trusted by HR Leaders
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-3xl p-8 border border-brand-eggplant/5 shadow-sm transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              {/* Quote Icon */}
              <motion.div 
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="text-brand-eggplant/10"
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              {/* Quote text */}
              <p className="text-base sm:text-lg text-brand-eggplant/80 font-serif italic leading-relaxed">
                "{t.quote}"
              </p>

              {/* User Bio */}
              <div className="flex items-center space-x-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-eggplant/10 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-semibold text-brand-eggplant">{t.name}</h4>
                  <p className="text-xs text-brand-eggplant/60">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
