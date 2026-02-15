import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, Award, Briefcase, Code, Brain, Trophy, ExternalLink, ChevronRight, Terminal, Cpu, Facebook } from 'lucide-react';
import './styles.css';

const galleryImages = [
  "/images/about.jpg",
  "/images/aibangla.png",
  "/images/angrybird.png",
  "/images/blockbreaker.png",
  // "/images/celfi.jpg",
  "/images/celfi2.jpg",
  "/images/celfi3.jpg",
  "/images/enigma.png",
  "/images/fundbd.jpg",
  "/images/HM.png",
  "/images/jarvis.jpg",
  "/images/multi_instance.png",
  "/images/omicml.png",
  "/images/opencv.jpg",
  "/images/political.jpg",
  "/images/siam-removebg-preview.png",
  "/images/siamArefin.jpg",
  "/images/skills.jpeg",
  "/images/snake.jpg",
  "/images/sprint.png",
  "/images/sustdlenigma.png",
  "/images/uiu.png"
];




const Portfolio = () => {

  const [current, setCurrent] = useState(0);

const prev = () =>
  setCurrent((current - 1 + galleryImages.length) % galleryImages.length);

const next = () =>
  setCurrent((current + 1) % galleryImages.length);

  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // auto slide
useEffect(() => {
  const t = setInterval(() => next(), 4000);
  return () => clearInterval(t);
}, [current]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Multi-Instance Object Detection",
      subtitle: "1st Place - Duality AI International Competition",
      period: "Jun 2025 - Jul 2025",
      tech: ["YOLOv8", "Ensemble Methods", "FalconCloud", "Computer Vision"],
      description: "Merged synthetic datasets and applied ensemble learning to bridge Sim2Real gap. Implemented custom post-processing (NMS, confidence filtering) to maximize generalization.",
      highlights: ["Won 1st place in USA startup competition", "Advanced ensemble techniques", "Real-world deployment"],
      github: "https://www.kaggle.com/competitions/multi-instance-object-detection-challenge/overview",
      image: "/images/multi_instance.png" // UPDATE THIS PATH
    },
    {
      title: "omicML: Bioinformatics ML Tool",
      subtitle: "Transcriptomic Biomarker Identification",
      period: "Dec 2024 - Oct 2025",
      tech: ["MLOps", "Scikit-learn", "Docker", "FastAPI", "CI/CD"],
      description: "Implemented scalable ML deployment pipelines for biological data analysis. Collaborated with bioinformatics researchers on computational modeling.",
      highlights: ["Cross-functional collaboration", "Production MLOps pipeline", "Research publication"],
      github: "https://plagl1.vercel.app/",
      image: "/images/omicml.png" // UPDATE THIS PATH
    },
    {
      title: "HealthMonitor - AI Health Web App",
      subtitle: "International Client Project (China)",
      period: "Dec 2024 - Jul 2025",
      tech: ["React.js", "Node.js", "MongoDB", "Google Gemini API", "JWT"],
      description: "Full-stack MERN application with custom-trained ML model for cardiovascular disease prediction and intelligent health recommendations.",
      highlights: ["International client delivery", "Custom ML model deployment", "Secure authentication"],
      github: "https://github.com/siamarefin/HealthMonitor",
      image: "/images/HM.png" // UPDATE THIS PATH
    },
    {
      title: "Bengali AI Math Olympiad",
      subtitle: "DL Sprint 3.0 - Top 10",
      period: "2025",
      tech: ["Qwen LLM", "Deepseek", "Transformers", "Prompt Engineering"],
      description: "Improved Bengali mathematical reasoning using Chain-of-Thought prompting and enhanced multilingual problem-solving accuracy.",
      highlights: ["Top 10 finish", "LLM fine-tuning", "Multilingual NLP"],
      github: "https://www.kaggle.com/competitions/dlsprint3",
      image: "/images/sprint.png" // UPDATE THIS PATH
    },
    {
      title: "Bangladeshi Autonomous Driving Detection",
      subtitle: "4th Place - SUST CSE Carnival",
      period: "Jan 2025 - Feb 2025",
      tech: ["YOLOv8", "RTDETR", "Data Augmentation", "Ensemble Learning"],
      description: "Enhanced model performance for local autonomous driving scenarios through advanced ensemble techniques and hyperparameter optimization.",
      highlights: ["4th place finish", "Real-world application", "Model optimization"],
      github: "https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024",
      image: "/images/enigma.png" // UPDATE THIS PATH
    },
    {
      title: "Bengali Political News Classification",
      subtitle: "NLP Research Project",
      period: "2024",
      tech: ["BanglaBERT", "GRU", "LSTM", "CNN", "Ensemble Methods"],
      description: "Achieved 93% accuracy classifying Bengali news into political categories using hybrid deep learning architectures.",
      highlights: ["93% accuracy", "Multilingual NLP", "Hybrid architecture"],
      github: "https://github.com/siamarefin/Bangla_news_classification",
      image: "/images/political.jpg" // UPDATE THIS PATH
    }
  ];

  const competitions = [
    { name: "Multi-Instance Object Detection Challenge", position: "1st Place", host: "Duality AI, USA Startup (International)" },
    { name: "ML Olympiad - CO2 Emissions Prediction", position: "1st Runner-up", host: "UIU, TensorFlow & Google" },
    { name: "DL Enigma 1.0", position: "4th Place", host: "SUST CSE Carnival 2024, Bangladesh" },
    { name: "Bengali AI Math Olympiad - DL Sprint 3.0", position: "Top 10", host: "BUET CSE Fest 2025, Bangladesh" },
    { name: "Bhashamul: Bengali IPA Transcription", position: "Top 10", host: "UIU CSE Fest 2024, Bangladesh" },
    { name: "Robi Datathon 3.0", position: "Top 20", host: "Robi Axiata, Bangladesh" }
  ];

  const skills = {
    "Machine Learning & Deep Learning": [
      "Supervised Learning (SVM, Decision Trees, KNN)",
      "CNNs, RNNs, Transformers",
      "Object Detection (YOLO)",
      "Reinforcement Learning",
      "TensorFlow, PyTorch",
      "Feature Engineering, ETL"
    ],
    "MLOps & Deployment": [
      "FastAPI, Docker",
      "CI/CD, GitHub Actions",
      "Model Monitoring",
      "AWS, Hugging Face, Azure Cloud",
      "n8n, ngrok"
    ],
    "Generative AI & LLMs": [
      "Prompt Engineering",
      "LLM Fine-tuning",
      "LangChain, RAG",
      "Vector Databases",
      "Hugging Face",
      "AI Agents"
    ],
    "Full Stack Development": [
      "React.js, Node.js, Express.js",
      "MongoDB, SQL",
      "JWT Authentication",
      "Google Gemini API",
      "RESTful APIs"
    ]
  };

  return (
    <div className="portfolio-container">
      {/* Progress Bar */}
      <div className="progress-bar-wrapper">
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">
            <Terminal className="logo-icon" size={24} />
            <span className="logo-text">
              <span className="logo-name">Siam</span>
              <span className="logo-surname"> Arefin</span>
            </span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link-button">Contact</a>
            <a href="#resume" className="nav-link-button">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <div className="hero-photo-wrapper">
  <img src="/images/fb_profile.jpg" alt="Siam Arefin" className="hero-photo" />
</div>
          <div className="hero-badge">
            <span>🚀 Open to Opportunities in World</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-gradient">Machine Learning</span>
            <br />
            <span className="hero-title-white">Engineer</span>
          </h1>

          <p className="hero-subtitle">
            Specializing in <span className="highlight-cyan">LLM </span>,
            <span className="highlight-cyan">Computer Vision</span>, 
            <span className="highlight-blue"> MLOps</span>, and 
            <span className="highlight-purple"> Generative AI</span>
          </p>

          <p className="hero-description">
            International competition winner • 800+ problems solved • Production ML deployment experience
          </p>

          <div className="hero-buttons">
            <a href="mailto:siam12@student.sust.edu" className="btn-primary">
              <Mail size={20} />
              Get in Touch
            </a>
            <a href="https://github.com/siamarefin" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="hero-info">
            <div className="info-item">
              <MapPin size={16} className="info-icon" />
              <span>Dhaka, Bangladesh </span>
            </div>
            <div className="info-item">
              <Briefcase size={16} className="info-icon" />
              <span>Junior ML Engineer</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          {/* <ChevronRight className="scroll-arrow" size={32} /> */}
        </div>
      </section>

      {/* Gallery section
      <section id="gallery" className="section-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-slash">//</span> Gallery
          </h2>
          <div className="title-underline" />
        </div>

        <div className="carousel">

          <button className="nav left" onClick={prev}>‹</button>

          <div className="carousel-track">

            {galleryImages.map((img, i) => {
              const position =
                i === current
                  ? "active"
                  : i === (current - 1 + galleryImages.length) % galleryImages.length
                  ? "left"
                  : i === (current + 1) % galleryImages.length
                  ? "right"
                  : "hidden";

              return (
                <div
                  key={i}
                  className={`carousel-card ${position}`}
                  onClick={() => setCurrent(i)}
                >
                  <img src={img} alt="" />
                </div>
              );
            })}

          </div>

          <button className="nav right" onClick={next}>›</button>

          <div className="dots">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

        </div>
    </div>
    </section> */}

      {/* About Section */}
      <section id="about" className="section-about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> About Me
            </h2>
            <div className="title-underline" />
          </div>
          
          <div className="about-grid">
            <div>
              <p className="about-text">
                Proactive Machine Learning Engineer with a strong mindset for continuous learning and 
                real-world problem-solving. Proven track record with <span className="text-highlight">1st place 
                in international ML competition</span> and experience deploying models for apps with 
                <span className="text-highlight"> 5M+ downloads</span>.
              </p>
              <p className="about-text">
                Currently complete as a Software Engineer (ML team) Intern at Kite Games Studio, 
                contributing to an Image Generating Android ans IOS app with <span className="text-highlight">700K+ daily active users</span>. 
                Specialized in Computer Vision, MLOps, and deploying production-ready ML systems.
              </p>
              <p className="about-text">
                Strong foundation in algorithms with <span className="text-highlight">800+ problems solved</span> on 
                competitive programming platforms, ensuring optimized and efficient ML implementations.
              </p>
            </div>

            <div className="about-cards">
              <div className="info-card info-card-cyan">
                <h3 className="card-title card-title-cyan">Education</h3>
                <div>
                  <p className="card-heading">BSc in Software Engineering</p>
                  <p className="card-subtext">Shahjalal University of Science and Technology</p>
                  <p className="card-date">Jan 2020 - Nov 2025 | Sylhet, Bangladesh</p>
                </div>
              </div>

              <div className="info-card info-card-purple">
                <h3 className="card-title card-title-purple">Current Focus</h3>
                <ul className="focus-list">
                  <li className="focus-item">
                    <ChevronRight className="focus-icon" size={16} />
                    <span>Advanced MLOps and model deployment at scale</span>
                  </li>
                  <li className="focus-item">
                    <ChevronRight className="focus-icon" size={16} />
                    <span>Generative AI and LLM fine-tuning</span>
                  </li>
                  <li className="focus-item">
                    <ChevronRight className="focus-icon" size={16} />
                    <span>Production Computer Vision systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> Experience
            </h2>
            <div className="title-underline" />
          </div>

          <div className="experience-content">
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Software Engineer (ML Team) Intern</h3>
                  <p className="experience-company">Kite Games Studio</p>
                  <p className="experience-location">Mohakhali DOHS, Dhaka, Bangladesh (Onsite)</p>
                </div>
                <span className="experience-date">Nov 2025 - Jan 2026</span>
              </div>
              <ul className="experience-list">
                <li className="experience-item">
                  <Cpu className="experience-icon" size={20} />
                  <span>Extensive R&D in Image Processing, Machine Learning, and Image Generation for mobile gaming applications</span>
                </li>
                <li className="experience-item">
                  <Cpu className="experience-icon" size={20} />
                  <span>Key contributor to Android app with <strong className="text-highlight">5 Million+ downloads</strong> in 8 months</span>
                </li>
                <li className="experience-item">
                  <Cpu className="experience-icon" size={20} />
                  <span>Currently achieving <strong className="text-highlight">1 Million monthly downloads</strong> and <strong className="text-highlight">700K+ daily active users</strong></span>
                </li>
              </ul>
            </div>

            <div className="research-grid">
              <div className="research-card research-card-purple">
                <div className="research-header">
                  <Brain className="research-icon" size={24} />
                  <div>
                    <h3 className="research-title research-title-purple">Effective Learning: AI-Powered Education</h3>
                    <p className="research-date">May 2025 - Present</p>
                  </div>
                </div>
                <p className="research-description">
                  Developing intelligent learning platform leveraging prompt engineering for personalized, 
                  adaptive education experiences.
                </p>
                <p className="research-supervisor">
                  Supervisor: Fazzle Rabbi Rakib (Lecturer, IICT, SUST)
                </p>
              </div>

              <div className="research-card research-card-blue">
                <div className="research-header">
                  <Brain className="research-icon" size={24} />
                  <div>
                    <h3 className="research-title research-title-blue">omicML: Bioinformatics ML Tool</h3>
                    <p className="research-date">Dec 2024 - Oct 2025</p>
                  </div>
                </div>
                <p className="research-description">
                  Implemented scalable ML deployment and monitoring pipelines using MLOps best practices. 
                  Collaborated with BMB department researchers on computational modeling.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">MLOps</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Backend</span>
                  <span className="tech-tag">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="section-competitions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> Competitions & Awards
            </h2>
            <div className="title-underline" />
          </div>

          <div className="competitions-grid">
            {competitions.map((comp, index) => (
              <div key={index} className="competition-card">
                <div className="competition-content">
                  <Trophy className="competition-icon" size={24} />
                  <div className="competition-info">
                    <h3 className="competition-name">{comp.name}</h3>
                    <div className="competition-position">
                      <Award className="award-icon" size={16} />
                      <span className="position-text">{comp.position}</span>
                    </div>
                    <p className="competition-host">{comp.host}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> Featured Projects
            </h2>
            <div className="title-underline" />
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-layout">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay" />
                  </div>
                  
                  <div className="project-details">
                    <div className="project-header">
                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <p className="project-period">{project.period}</p>
                      </div>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-highlights">
                      <h4 className="highlights-title">Key Highlights:</h4>
                      <ul className="highlights-list">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="highlight-item">
                            <ChevronRight className="highlight-icon" size={16} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech">
                      {project.tech.map((tech, tIndex) => (
                        <span key={tIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> Technical Skills
            </h2>
            <div className="title-underline" />
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">
                  <Code size={24} />
                  {category}
                </h3>
                <div className="skill-list">
                  {skillList.map((skill, sIndex) => (
                    <div key={sIndex} className="skill-item">
                      <div className="skill-dot" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="problem-solving-card">
            <h3 className="problem-solving-title">
              <Terminal size={28} />
              Problem Solving
            </h3>
            <p className="problem-solving-text">
              Solved <span className="problem-count">800+ problems</span> on <a href="https://codeforces.com/profile/siamarefin2000" target="_blank" rel="noopener noreferrer">Codeforces</a> and other competitive 
              programming platforms, demonstrating strong algorithmic thinking and optimization skills.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-number">800+</p>
              <p className="stat-label">Problems Solved</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">6+</p>
              <p className="stat-label">Competition Wins</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">10+</p>
              <p className="stat-label">Production Projects</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">20+</p>
              <p className="stat-label"> Personal Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-slash">//</span> Let's Connect
            </h2>
            <div className="title-underline title-underline-center" />
          </div>

          <p className="contact-intro">
            I'm actively seeking full-time Junior Machine Learning Engineer opportunities. 
            Open to remote positions.
          </p>

          <div className="contact-grid">
            <a href="mailto:siam12@student.sust.edu" className="contact-card">
              <Mail className="contact-icon" size={32} />
              <p className="contact-label">Email</p>
              <p className="contact-value">siam12@student.sust.edu</p>
            </a>

            <a 
              href="https://github.com/siamarefin"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Github className="contact-icon" size={32} />
              <p className="contact-label">GitHub</p>
            </a>

            <a 
              href="https://linkedin.com/in/siamarefin"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Linkedin className="contact-icon" size={32} />
              <p className="contact-label">LinkedIn</p>
            </a>
            <a 
              href="https://www.kaggle.com/habijabii"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <p className="contact-label">Kaggle</p>
            </a>
            <a 
              href="https://www.facebook.com/sdsiam.arefin/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Facebook className="contact-icon" size={32} />
              <p className="contact-label">Facebook</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== RESUME SECTION ===== */}
      <section id="resume" className="resume-section">
        <div className="resume-container">
          <h2>Resume</h2>
          
          {/* Embed PDF */}
          <iframe
            src="/Siam-Arefin.pdf"
            title="Siam Arefin Resume"
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          ></iframe>

          {/* Download button */}
          <div className="resume-download">
            <a
              href="/Siam-Arefin.pdf"
              download="Siam-Arefin.pdf"
              className="download-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <Terminal size={24} />
              <span className="footer-name">
                <span className="footer-firstname">Siam</span> Arefin
              </span>
            </div>

            <div className="footer-social">
              <a href="https://github.com/siamarefin" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/siamarefin" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://kaggle.com/siamarefin" target="_blank" rel="noopener noreferrer" className="social-link">
                <Code size={24} />
              </a>
            </div>

            <p className="footer-copyright">
              © 2026 Siam Arefin. Built with React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;