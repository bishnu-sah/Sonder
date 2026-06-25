import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export default function ProductShowcase() {
  return (
    <section id="showcase" className="w-full py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={transition}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-eggplant tracking-tight">
            Product Showcase
          </h2>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column: Scenario Widget Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            transition={{ ...transition, delay: 0.1 }}
            whileHover={{ y: -12 }}
            className="rounded-3xl p-8 md:p-12 flex items-center justify-center min-h-[400px] md:min-h-[500px] cursor-pointer"
          >
            {/* Inner Interactive Widget Mockup */}
            <div
              className="relative w-[66.5%] aspect-[834/906] overflow-hidden rounded-[6%]"
              style={{
                boxShadow: '0 35px 90px rgba(0,0,0,0.14), 0 10px 30px rgba(0,0,0,0.08)',
                filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.18))',
              }}
            >
              <img
                src="/SONDER.png"
                alt="Sonder"
                className="absolute max-w-none h-auto w-[150.4%] left-[-25.5%] top-[-21.3%]"
              />
            </div>
          </motion.div>


          {/* Right Column: Stacked Mockups */}
          <div className="flex flex-col gap-8 justify-between">

            {/* Top Mockup: Laptop Screen Dashboard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
              transition={{ ...transition, delay: 0.25 }}
              whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              className="bg-card-sage rounded-3xl p-6 flex flex-col items-center justify-center border border-brand-eggplant/5 shadow-sm overflow-hidden flex-1 group cursor-pointer"
            >
              <div className="w-full transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="LAPTOP.png"
                  alt="Dashboard Metrics Mockup"
                  className="w-full h-auto rounded-2xl shadow-xl border border-brand-eggplant/5"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
            </motion.div>

            {/* Bottom Mockup: Light Feedback Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
              transition={{ ...transition, delay: 0.4 }}
              whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              className="bg-[#FAF3F0] rounded-3xl p-6 flex flex-col items-center justify-center border border-brand-eggplant/5 shadow-sm overflow-hidden flex-1 group cursor-pointer"
            >
              <div className="w-full transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="LIST.png"
                  alt="User Feedback Table Mockup"
                  className="w-full h-auto rounded-2xl shadow-xl border border-brand-eggplant/5"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
