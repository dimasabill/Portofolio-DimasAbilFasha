import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div 
          className="contact-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <h2 className="contact-title">Let's build something extraordinary together.</h2>
            <p className="contact-desc">
              Have a project idea, a partnership proposal, or just want to say hi? Don't hesitate to reach out!
            </p>
            
            <a href="mailto:dimasabilfasha@gmail.com" className="email-link">
              <Mail size={24} />
              dimasabilfasha@gmail.com
            </a>
            
            <div className="social-links">
              <a href="https://github.com/dimasabill" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/dimas-abil-fasha/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={24} /></a>
              <a href="https://www.instagram.com/dimasabill/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram size={24} /></a>
            </div>
          </div>

          <div className="contact-form-container glass">
            <form action="https://formsubmit.co/dimasabilfasha@gmail.com" method="POST" className="contact-form">
              {/* Optional: Configuration for FormSubmit */}
              <input type="hidden" name="_subject" value="New message from your Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required placeholder="Tell me about your idea..."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
        
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Dimas. All rights reserved.</p>
          <p>Designed and built with passion.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
