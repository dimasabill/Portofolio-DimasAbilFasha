import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Getol App",
      category: "Location-Based Marketplace",
      image: "/getol.png",
      color: "#3b82f6",
      link: "https://getol.mattoworks.com/"
    },
    {
      title: "Memory-Ai",
      category: "AI Web Application",
      image: "/memory.png",
      color: "#8b5cf6",
      link: "#"
    },
    {
      title: "Ifanno Footwear",
      category: "Premium E-Commerce",
      image: "/ifanno.png",
      color: "#10b981",
      link: "https://ifanno-footwear.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Selected Work.</h2>
          <p className="section-desc">
            A collection of projects showcasing my focus on clean code, 
            intuitive design, and performant architectures.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card ${index === 0 ? 'large' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link || "#"} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="project-link">
                    View Project <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <p className="project-category" style={{ color: project.color }}>{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
