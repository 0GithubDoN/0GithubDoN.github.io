"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

const allScreenshots = [
  { src: "/screenshots/gameplay_inside.png", alt: "Gameplay Perspective" },
  { src: "/screenshots/main_menu.png", alt: "Main Menu" },
  { src: "/screenshots/gameplay_behind.png", alt: "Gameplay Chase" },
  { src: "/screenshots/Upgrade-shop.png", alt: "Upgrades Shop" },
  { src: "/screenshots/Skins.png", alt: "Skins Menu" },
  { src: "/screenshots/Global-Ranking.png", alt: "Global Leaderboards" },
  { src: "/screenshots/Game-OVER.png", alt: "Game Over Screen" },
];

/* ── Animated counter component ── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isNumeric = /^\d+$/.test(value);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const target = parseInt(value);
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(eased * target)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, isNumeric, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-5xl font-heading font-bold text-void-cyan mb-2 text-glow-cyan">
        {isInView ? display : (isNumeric ? "0" : value)}
      </div>
      <div className="text-gray-400 font-body">{label}</div>
    </motion.div>
  );
}

/* ── Neon section divider ── */
function NeonDivider() {
  return <div className="neon-divider mx-auto max-w-4xl" />;
}

/* ── Stagger container variants ── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* Parallax for hero */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);

  const openLightbox = useCallback((src: string) => {
    const idx = allScreenshots.findIndex((s) => s.src === src);
    setLightboxIndex(idx >= 0 ? idx : null);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allScreenshots.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + allScreenshots.length) % allScreenshots.length
        : null
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  /* Scroll-to-top visibility + auto-collapse nav */
  const [navExpanded, setNavExpanded] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 600);
      setNavExpanded(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Floating Island Navigation */}
      <motion.nav
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="fixed top-4 left-4 z-50"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-void-dark/50 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-1 pr-1">
            <img
              src="/branding/icon.jpeg"
              alt="Void Dash"
              className="w-7 h-7 rounded-lg flex-shrink-0"
            />
            <span
              className="text-sm font-heading font-bold text-void-cyan whitespace-nowrap"
              style={{ textShadow: "0 0 8px rgba(0, 245, 255, 0.4)" }}
            >
              VOID DASH
            </span>
          </a>

          {/* Expanded Links */}
          <AnimatePresence>
            {navExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center gap-0.5 overflow-hidden"
              >
                <div className="w-px h-4 bg-white/10 mx-1 flex-shrink-0" />
                {[
                  { href: "#features", label: "Features" },
                  { href: "#gameplay", label: "Gameplay" },
                  { href: "#skins", label: "Skins" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setNavExpanded(false)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#download"
                  onClick={() => setNavExpanded(false)}
                  className="ml-0.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-void-cyan/10 text-void-cyan border border-void-cyan/20 hover:bg-void-cyan/20 hover:border-void-cyan/40 transition-all duration-200 whitespace-nowrap"
                >
                  Download
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Arrow */}
          <motion.button
            onClick={() => setNavExpanded((prev) => !prev)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-void-cyan hover:bg-white/[0.06] transition-all duration-200 flex-shrink-0 ml-0.5"
            aria-label={navExpanded ? "Collapse menu" : "Expand menu"}
          >
            <motion.svg
              animate={{ rotate: navExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <motion.img
            src="/screenshots/hero_graphic.png"
            alt="Void Dash Background"
            className="w-full h-full object-cover"
            style={{ opacity: heroOpacity }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-void-dark/70 via-void-dark/50 to-void-dark" />
        </motion.div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => {
              const left = (i * 37) % 100;
              const top = (i * 73) % 100;
              const duration = 2 + ((i * 17) % 30) / 10;
              const delay = ((i * 23) % 20) / 10;

              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-void-cyan rounded-full"
                  style={{ left: `${left}%`, top: `${top}%` }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                  transition={{ duration, repeat: Infinity, delay }}
                />
              );
            })}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* App Icon Logo */}
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-3xl overflow-hidden animate-float"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.2)",
                  "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3)",
                  "0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img
                src="/branding/AppIcon.png"
                alt="Void Dash App Icon"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-wider">
              <span className="text-void-cyan text-glow-cyan">VOID</span>{" "}
              <span className="text-void-magenta text-glow-magenta">DASH</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-4 text-gray-300"
            >
              One tap. Pure reflex. Endless neon.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
            >
              Dash through the neon void as far as you dare. A fast, hypnotic,
              one-tap arcade runner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#download"
                className="px-8 py-4 bg-gradient-neon rounded-lg font-bold text-lg hover:scale-105 transition-transform box-glow-cyan"
              >
                Download Now
              </a>
              <a
                href="#gameplay"
                className="px-8 py-4 border-2 border-void-cyan rounded-lg font-bold text-lg hover:bg-void-cyan/10 transition-colors"
              >
                See Gameplay
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-void-cyan rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-void-cyan rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <NeonDivider />

      {/* Features Section */}
      <section id="features" className="py-20 bg-void-purple/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-void-cyan text-glow-cyan"
          >
            Pure Arcade Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-16 max-w-xl mx-auto"
          >
            Simple to pick up, impossible to put down. Everything you need for
            the ultimate arcade experience.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "One-Tap Control",
                description:
                  "No buttons, no clutter. Tap to flip gravity and dodge obstacles. Easy to learn in one second, brutally hard to master.",
                icon: "👆",
              },
              {
                title: "Global Leaderboards",
                description:
                  "Compete with players worldwide! Sign in to track your best distance and total coins on global leaderboards powered by Unity Gaming Services.",
                icon: "🏆",
              },
              {
                title: "Unique Power Skins",
                description:
                  "Unlock 6 skins with special abilities: Nova (coin magnet), Pulse (15% distance boost), Quasar (3x near-miss coins), Aether (2x coins during Smash), Eclipse (auto-double all coins).",
                icon: "✨",
              },
              {
                title: "Upgrade System",
                description:
                  "Spend coins to upgrade power-ups: Shield (invincibility), Magnet (coin attraction), and Smash (destroy obstacles). Each upgrade increases duration up to 5 levels.",
                icon: "⚡",
              },
              {
                title: "Cloud Save & Accounts",
                description:
                  "Create an account or play as guest. Your progress syncs across devices via cloud save. Link your guest account anytime to keep your progress.",
                icon: "☁️",
              },
              {
                title: "Daily Rewards",
                description:
                  "Log in daily for bonus coins. Build your streak and unlock more content faster. Fair monetization with optional rewarded ads only.",
                icon: "🎁",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group glass-card rounded-xl p-6 hover:border-void-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-void-cyan">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NeonDivider />

      {/* Gameplay Section */}
      <section id="gameplay" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-void-magenta text-glow-magenta"
          >
            How to Play
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-16 max-w-xl mx-auto"
          >
            Simple mechanics, endless depth. Master gravity to survive the void.
          </motion.p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div
                  onClick={() => openLightbox("/screenshots/gameplay_inside.png")}
                  className="aspect-video rounded-xl overflow-hidden border-2 border-void-magenta/30 shadow-lg shadow-void-magenta/10 cursor-pointer group"
                >
                  <img
                    src="/screenshots/gameplay_inside.png"
                    alt="Void Dash Gameplay - Player dashing through neon tunnel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tap to Flip</h3>
                    <p className="text-gray-400">
                      Tap anywhere on the screen to flip gravity. Switch between
                      floor and ceiling to dodge obstacles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collect Coins</h3>
                    <p className="text-gray-400">
                      Grab coins to build your combo multiplier. String them
                      together for massive score boosts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Survive</h3>
                    <p className="text-gray-400">
                      The void speeds up every 30 seconds. One mistake ends your
                      run. How far can you go?
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Screenshot Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
              {allScreenshots.map((screenshot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => openLightbox(screenshot.src)}
                  className="group relative rounded-xl overflow-hidden border border-void-cyan/20 hover:border-void-cyan/50 transition-all duration-300 shadow-lg hover:shadow-void-cyan/20 bg-void-dark/50 cursor-pointer"
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-void-cyan text-sm font-semibold">{screenshot.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NeonDivider />

      {/* Power Skins Section */}
      <section id="skins" className="py-20 bg-void-dark">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-void-magenta text-glow-magenta"
          >
            Power Skins
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Each skin grants unique abilities that change your playstyle. Unlock
            them with earned coins.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Nova",
                power: "Magnetic Pulse",
                description:
                  "Passively pulls coins within 3.5 meters. Never miss a coin again.",
                image: "/skins/nova.png",
                borderColor: "hover:border-orange-400/60",
                glowColor: "hover:shadow-orange-400/20",
              },
              {
                name: "Pulse",
                power: "Tempo Boost",
                description:
                  "Distance points gained are increased by 15%. Climb the leaderboard faster.",
                image: "/skins/pulse.png",
                borderColor: "hover:border-yellow-400/60",
                glowColor: "hover:shadow-yellow-400/20",
              },
              {
                name: "Quasar",
                power: "Near-Miss Star",
                description:
                  "Earn 3 coins instead of 1 for near-misses. Rewards risky play.",
                image: "/skins/quasar.png",
                borderColor: "hover:border-amber-300/60",
                glowColor: "hover:shadow-amber-300/20",
              },
              {
                name: "Aether",
                power: "Overdrive",
                description:
                  "Earn 2x coins for coins collected during Smash power-up. Stack the multipliers.",
                image: "/skins/aether.png",
                borderColor: "hover:border-purple-400/60",
                glowColor: "hover:shadow-purple-400/20",
              },
              {
                name: "Eclipse",
                power: "Dark Doubler",
                description:
                  "Automatically doubles total coins earned at end of run. The ultimate grind accelerator.",
                image: "/skins/eclipse.png",
                borderColor: "hover:border-red-400/60",
                glowColor: "hover:shadow-red-400/20",
              },
              {
                name: "Default",
                power: "Balanced",
                description:
                  "The original prototype. Reliable and balanced. No special effects.",
                image: "/skins/default.png",
                borderColor: "hover:border-cyan-400/60",
                glowColor: "hover:shadow-cyan-400/20",
              },
            ].map((skin, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`group glass-card rounded-xl p-6 ${skin.borderColor} ${skin.glowColor} hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-void-cyan/5 group-hover:bg-void-cyan/10 transition-colors duration-300" />
                  <img
                    src={skin.image}
                    alt={`${skin.name} Skin`}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-center text-void-cyan">
                  {skin.name}
                </h3>
                <p className="text-sm text-void-magenta font-semibold mb-2 text-center">
                  {skin.power}
                </p>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  {skin.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NeonDivider />

      {/* Progression System */}
      <section className="py-20 bg-void-purple/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-void-cyan text-glow-cyan"
          >
            Progression &amp; Upgrades
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-16 max-w-xl mx-auto"
          >
            Earn coins through gameplay, then invest them into powerful upgrades
            that extend your runs.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerItem}
              className="group glass-card rounded-xl p-6 hover:border-void-cyan/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-void-cyan text-center">
                Shield Upgrade
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Grants temporary invincibility. Upgrade to increase duration up
                to 5 levels.
              </p>
              <div className="text-xs text-gray-500 text-center bg-void-dark/50 rounded-lg py-2 px-3">
                Cost: 50 → 100 → 200 → 400 → 800 coins
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="group glass-card rounded-xl p-6 hover:border-void-cyan/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                🧲
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-void-cyan text-center">
                Magnet Upgrade
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Attracts nearby coins automatically. Upgrade to extend the
                effect duration.
              </p>
              <div className="text-xs text-gray-500 text-center bg-void-dark/50 rounded-lg py-2 px-3">
                Cost: 50 → 100 → 200 → 400 → 800 coins
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="group glass-card rounded-xl p-6 hover:border-void-cyan/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                💥
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-void-cyan text-center">
                Smash Upgrade
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Destroy obstacles on contact. Upgrade to smash through more
                obstacles per run.
              </p>
              <div className="text-xs text-gray-500 text-center bg-void-dark/50 rounded-lg py-2 px-3">
                Cost: 50 → 100 → 200 → 400 → 800 coins
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Earn coins by playing, collecting pickups, and building combos.
              Daily login bonuses help you progress faster.
            </p>
            <p className="text-void-cyan text-sm">
              All progression is saved locally and synced to the cloud when you
              create an account.
            </p>
          </motion.div>
        </div>
      </section>

      <NeonDivider />

      {/* Stats Section */}
      <section className="py-20 bg-void-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1-Tap", label: "Control" },
              { value: "6", label: "Power Skins" },
              { value: "Global", label: "Leaderboards" },
              { value: "Cloud", label: "Save" },
            ].map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            * Optional rewarded ads for revives only — no paywalls, no pay-to-win
          </p>
        </div>
      </section>

      <NeonDivider />

      {/* Download Section */}
      <section id="download" className="py-20 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-void-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-void-cyan text-glow-cyan"
          >
            Ready to Dash?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Download Void Dash now and see how far you can survive the endless
            neon void.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.doncode.voiddash"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-void-dark border-2 border-void-cyan rounded-xl hover:bg-void-cyan/10 hover:shadow-lg hover:shadow-void-cyan/20 transition-all duration-300"
            >
              <svg
                className="w-8 h-8 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>

            <div className="text-gray-500">
              <p className="text-sm">Coming soon to iOS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 justify-center text-gray-500 text-sm"
          >
            <span className="flex items-center gap-1">
              <span className="text-void-cyan">✓</span> Free to play
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <span className="text-void-cyan">✓</span> No pay-to-win
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <span className="text-void-cyan">✓</span> Cloud save
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <span className="text-void-cyan">✓</span> Global leaderboards
            </span>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-void-dark border-t border-void-cyan/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/branding/icon.jpeg"
                  alt="Void Dash"
                  className="w-8 h-8 rounded-lg"
                />
                <h3 className="text-xl font-heading font-bold text-void-cyan">Void Dash</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A fast, hypnotic, one-tap arcade runner. Dash through the neon
                void as far as you dare.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-void-cyan">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-void-cyan transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-void-cyan transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delete-account"
                    className="text-gray-400 hover:text-void-cyan transition-colors"
                  >
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-void-cyan">
                Contact
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Questions or feedback?
              </p>
              <a
                href="mailto:lucian3boy@gmail.com"
                className="text-void-cyan hover:text-void-magenta transition-colors text-sm"
              >
                lucian3boy@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-void-cyan/20 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Void Dash. All rights reserved.
            </p>
            <p className="mt-2">Developed by DoN [George Lucian]</p>
          </div>
        </div>
      </footer>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-void-dark/60 hover:bg-void-cyan/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl border border-void-cyan/30 transition-colors z-10"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={allScreenshots[lightboxIndex].src}
              alt={allScreenshots[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[85vw] max-h-[85vh] object-contain rounded-xl cursor-default"
            />

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-void-dark/60 hover:bg-void-cyan/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl border border-void-cyan/30 transition-colors z-10"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-white bg-void-dark/60 hover:bg-void-cyan/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl border border-void-cyan/30 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Caption & Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <p className="text-void-cyan font-semibold text-sm">{allScreenshots[lightboxIndex].alt}</p>
              <p className="text-gray-500 text-xs mt-1">{lightboxIndex + 1} / {allScreenshots.length} &nbsp;·&nbsp; ESC to close &nbsp;·&nbsp; ← → to navigate</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-void-dark/80 border border-void-cyan/40 backdrop-blur-md flex items-center justify-center text-void-cyan hover:bg-void-cyan/20 hover:border-void-cyan/60 transition-all duration-300 box-glow-cyan group"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
