import { motion } from 'framer-motion';
import { Terminal, Layout, Database } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <Layout size={24} />,
      title: "Frontend Engineering",
      desc: "Creating fluid, responsive interfaces using React, Next.js, and modern CSS architectures."
    },
    {
      icon: <Terminal size={24} />,
      title: "Backend Development",
      desc: "Building robust APIs and server-side logic using Node.js, Python, and scalable databases."
    },
    {
      icon: <Database size={24} />,
      title: "System Architecture",
      desc: "Designing performant and scalable cloud infrastructure for complex applications."
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Beyond the Code.</h2>
          <p className="section-desc">
            I'm a developer who cares deeply about design and user experience. 
            I bridge the gap between engineering and design to build products that look good and function flawlessly.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
