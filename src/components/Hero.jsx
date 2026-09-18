import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Abstract background element */}
      <div className="glow-orb"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="dot"></span> Available for new opportunities
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Creative Developer <br />
          <span className="text-outline">Building Digital</span> <br />
          Experiences.
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Hi, I'm Dimas. I specialize in crafting modern, high-performance web applications with a focus on aesthetics and user experience.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#projects" className="btn-primary">
            View Work <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
