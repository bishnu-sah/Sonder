import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Choose Scenario',
    description: 'Select from a library of pre-built roleplay cases.',
  },
  {
    number: '2',
    title: 'Start Conversation',
    description: 'Engage with the AI avatar in real-time.',
  },
  {
    number: '3',
    title: 'Receive Feedback',
    description: 'Get a breakdown of performance metrics.',
  },
  {
    number: '4',
    title: 'Track Progress',
    description: 'Monitor performance dashboards.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1 },
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-24 px-6 md:px-12 bg-[#FAF8F5]/50 border-t border-b border-brand-eggplant/5">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-eggplant tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-brand-eggplant/60 max-w-md mx-auto">
            Four simple steps to level up your team's communication.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative"
        >
          
          {/* Connecting line for desktop — animated */}
          <motion.div 
            variants={lineVariants}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
            className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-brand-eggplant/10 z-0 origin-left"
          ></motion.div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={stepVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col items-center text-center space-y-4 relative z-10 group cursor-pointer"
            >
              {/* Circular Step Number */}
              <motion.div 
                variants={circleVariants}
                transition={{ duration: 0.5, ease: "backOut", delay: idx * 0.1 }}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(35, 21, 44, 0.03)" }}
                className="w-24 h-24 rounded-full border border-brand-eggplant/10 bg-[#FAF8F5] flex items-center justify-center text-2xl font-serif font-semibold text-brand-eggplant shadow-sm transition-all duration-300 group-hover:border-brand-eggplant/30 group-hover:shadow-md"
              >
                {step.number}
              </motion.div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-semibold text-brand-eggplant">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-eggplant/65 leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
