import { useRef, useState, useEffect } from "react";
import { Award, Trophy, Rocket, Star, Crown, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const InteractiveCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.1)",
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXRel = e.clientX - rect.left - width / 2;
    const mouseYRel = e.clientY - rect.top - height / 2;

    x.set(mouseXRel / width);
    y.set(mouseYRel / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-700 ease-out group-hover:border-white/25 group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)] group-hover:from-white/[0.12] group-hover:to-white/[0.04] overflow-hidden ${className}`}
    >
      <div
        className="relative z-10 h-full flex flex-col items-center justify-start pt-8 pb-4"
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon: Icon, color }) => {
  return (
    <motion.div
      animate={{ y: [-4, 4, -4], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`mx-auto p-4 rounded-2xl bg-transparent border border-transparent mb-6 shadow-lg ${color} 
        group-hover:bg-white/5 group-hover:border-white/10 group-hover:scale-110 group-hover:shadow-xl
        transition-all duration-300 ease-out`}
    >
      <Icon size={40} strokeWidth={1.5} />
    </motion.div>
  );
};

const Prizes = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const winners = [
    {
      place: "1st Place",
      amount: "$500",
      icon: Trophy,
      color: "text-yellow-100",
      spotlight: "rgba(253, 224, 71, 0.2)",
      border: "hover:border-yellow-500/40",
      perks: ["Mentorship", "Internship", "Certificate"],
      id: 1,
      order: "lg:order-2",
    },
    {
      place: "2nd Place",
      amount: "$300",
      icon: Crown,
      color: "text-slate-200",
      spotlight: "rgba(226, 232, 240, 0.2)",
      border: "hover:border-slate-400/40",
      perks: ["Mentorship", "Interview Prep", "Certificate"],
      id: 2,
      order: "lg:order-1",
    },
    {
      place: "3rd Place",
      amount: "$200",
      icon: Award,
      color: "text-orange-100",
      spotlight: "rgba(253, 186, 116, 0.2)",
      border: "hover:border-orange-500/40",
      perks: ["Mentorship", "Swag", "Certificate"],
      id: 3,
      order: "lg:order-3",
    },
  ];

  return (
    <section className="relative min-h-screen py-24 text-white overflow-hidden flex flex-col justify-center perspective-1000">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-4 text-white">
              <span className="font-light">Cosmic</span>{" "}
              <span className="font-bold italic bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                Rewards
              </span>
            </h2>
          </motion.div>
          <p className="text-lg text-gray-400 font-semi-bold max-w-xl mx-auto">
            Choose your constellation and embark on an interstellar journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-end">
          {winners.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className={`w-full transform transition-all duration-500 ${p.order} ${
                p.id === 1 ? "lg:h-[500px] z-10" : "lg:h-[440px] z-0"
              }`}
            >
              <InteractiveCard
                spotlightColor={p.spotlight}
                className={`group ${p.border} shadow-2xl`}
              >
                <FloatingIcon icon={p.icon} color={p.color} />

                <h3
                  className={`text-xl font-medium mb-1 tracking-wide ${p.color}`}
                >
                  {p.place}
                </h3>

                <div className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {p.amount}
                </div>

                <div className="w-full space-y-3 px-6 mb-auto">
                  {p.perks.map((perk, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-400 border border-white/5 py-2 rounded-full group-hover:bg-white/5 transition-colors duration-300"
                    >
                      <Star size={10} className="fill-current opacity-50" />
                      {perk}
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Prizes;
