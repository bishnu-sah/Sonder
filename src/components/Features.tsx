import { MessageSquare, Brain, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const slideFromLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideFromRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const iconPop = {
  hidden: { scale: 0.8, rotate: -8, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1 },
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-28 px-6 md:px-12 bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={transition}
        className="max-w-3xl mx-auto text-center mb-16 md:mb-24 space-y-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-brand-eggplant tracking-tight">
          Master the Art of Human Connection
        </h2>
        <p className="text-base sm:text-lg text-brand-eggplant/60 max-w-xl mx-auto">
          Develop soft skills, active listening, and empathy in a safe space.
        </p>
      </motion.div>

      {/* Bento / Alternating Features List */}
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">

        {/* Feature Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromLeft}
            transition={transition}
            className="w-full md:w-1/2 space-y-4 text-left order-2 md:order-1"
          >
            <motion.div
              variants={iconPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-card-peach flex items-center justify-center text-brand-eggplant/80 shadow-sm"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-brand-eggplant leading-tight">
              Realistic AI Roleplay
            </h3>
            <p className="text-base text-brand-eggplant/70 leading-relaxed">
              Practice customer service, sales, and difficult conversations with realistic AI characters that react dynamically to your team's speech.
            </p>
          </motion.div>
          {/* Card Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromRight}
            transition={{ ...transition, delay: 0.15 }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="w-full aspect-[4/3] rounded-3xl bg-card-peach flex items-center justify-center border border-brand-eggplant/5 shadow-sm transition-colors duration-300 hover:bg-card-peach/90 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-white/60 rounded-2xl border border-white shadow-inner flex items-center justify-center w-24 h-24"
              >
                <MessageSquare className="w-10 h-10 text-brand-eggplant/20 stroke-[1.5]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Card Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromLeft}
            transition={{ ...transition, delay: 0.15 }}
            className="w-full md:w-1/2"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="w-full aspect-[4/3] rounded-3xl bg-card-cream flex items-center justify-center border border-brand-eggplant/5 shadow-sm transition-colors duration-300 hover:bg-card-cream/90 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-white/60 rounded-2xl border border-white shadow-inner flex items-center justify-center w-24 h-24"
              >
                <Brain className="w-10 h-10 text-brand-eggplant/20 stroke-[1.5]" />
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Text Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromRight}
            transition={transition}
            className="w-full md:w-1/2 space-y-4 text-left"
          >
            <motion.div
              variants={iconPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.1 }}
              className="w-10 h-10 rounded-xl bg-card-cream flex items-center justify-center text-brand-eggplant/80 shadow-sm"
            >
              <Brain className="w-5 h-5" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-brand-eggplant leading-tight">
              EQ Centric
            </h3>
            <p className="text-base text-brand-eggplant/70 leading-relaxed">
              Focus on emotional intelligence, tone, and empathy. Our AI helps your team understand the subtle cues and nuances of every human conversation.
            </p>
          </motion.div>
        </div>

        {/* Feature Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromLeft}
            transition={transition}
            className="w-full md:w-1/2 space-y-4 text-left order-2 md:order-1"
          >
            <motion.div
              variants={iconPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.1 }}
              className="w-10 h-10 rounded-xl bg-card-sage flex items-center justify-center text-brand-eggplant/80 shadow-sm"
            >
              <BarChart3 className="w-5 h-5" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-brand-eggplant leading-tight">
              Granular Analytics
            </h3>
            <p className="text-base text-brand-eggplant/70 leading-relaxed">
              Track improvements over time. Get detailed, actionable feedback on conversation flows, key performance metrics, and individual areas of growth.
            </p>
          </motion.div>
          {/* Card Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideFromRight}
            transition={{ ...transition, delay: 0.15 }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transition, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="w-full aspect-[4/3] rounded-3xl bg-card-sage flex items-center justify-center border border-brand-eggplant/5 shadow-sm transition-colors duration-300 hover:bg-card-sage/90 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-white/60 rounded-2xl border border-white shadow-inner flex items-center justify-center w-24 h-24"
              >
                <BarChart3 className="w-10 h-10 text-brand-eggplant/20 stroke-[1.5]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
