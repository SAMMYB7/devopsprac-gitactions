import { useState, useEffect } from 'react'
import { FaCloud, FaBolt, FaPalette, FaRocket, FaCheckCircle, FaTachometerAlt, FaMagic, FaTimes, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showManual, setShowManual] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const manualSections = [
    {
      title: "What is CI/CD?",
      icon: <FaGitAlt />,
      content: `
        Continuous Integration/Continuous Deployment (CI/CD) is a DevOps practice that automates the integration and deployment of code changes.
        
        **Continuous Integration (CI):**
        • Developers frequently merge code changes into a central repository
        • Automated builds and tests run on every commit
        • Early detection of integration issues
        • Faster feedback loops for development teams
        
        **Continuous Deployment (CD):**
        • Automated deployment of tested code to production
        • Reduced manual intervention and human errors
        • Faster time-to-market for new features
        • Consistent and reliable deployment processes
      `
    },
    {
      title: "Cloud DevOps Benefits",
      icon: <FaCloud />,
      content: `
        Cloud DevOps combines cloud computing with DevOps practices for scalable, efficient software delivery.
        
        **Key Benefits:**
        • **Scalability**: Auto-scaling infrastructure based on demand
        • **Cost Efficiency**: Pay-as-you-use model reduces operational costs
        • **Global Reach**: Deploy applications worldwide with edge locations
        • **High Availability**: Built-in redundancy and disaster recovery
        • **Security**: Enterprise-grade security with compliance standards
        • **Monitoring**: Real-time insights and observability tools
      `
    },
    {
      title: "GitHub Actions Workflow",
      icon: <FaBolt />,
      content: `
        GitHub Actions provides powerful automation directly in your repository.
        
        **Core Concepts:**
        • **Workflows**: Automated processes triggered by events
        • **Jobs**: Sets of steps that execute on the same runner
        • **Steps**: Individual tasks within a job
        • **Actions**: Reusable units of code
        
        **Common Use Cases:**
        • Automated testing on pull requests
        • Building and publishing Docker images
        • Deploying to cloud platforms
        • Code quality checks and security scans
        • Notifications and integrations
      `
    },
    {
      title: "Container Orchestration",
      icon: <FaDocker />,
      content: `
        Containers and orchestration platforms enable consistent, scalable deployments.
        
        **Docker Benefits:**
        • Consistent environments across development stages
        • Lightweight and portable applications
        • Simplified dependency management
        • Faster startup times compared to VMs
        
        **Kubernetes Features:**
        • Automated deployment and scaling
        • Service discovery and load balancing
        • Self-healing and rolling updates
        • Configuration and secret management
        • Multi-cloud and hybrid deployments
      `
    },
    {
      title: "AWS Cloud Services",
      icon: <FaAws />,
      content: `
        Amazon Web Services provides comprehensive cloud infrastructure for DevOps.
        
        **Key Services:**
        • **EC2**: Scalable virtual servers in the cloud
        • **ECS/EKS**: Container orchestration services
        • **Lambda**: Serverless computing platform
        • **CodePipeline**: Continuous delivery service
        • **CloudFormation**: Infrastructure as Code
        • **CloudWatch**: Monitoring and observability
        • **S3**: Object storage for artifacts and static assets
        • **RDS**: Managed database services
      `
    },
    {
      title: "Best Practices",
      icon: <FaCheckCircle />,
      content: `
        Essential practices for successful CI/CD and Cloud DevOps implementation.
        
        **CI/CD Best Practices:**
        • Maintain a single source of truth in version control
        • Automate everything: builds, tests, deployments
        • Test early and often with comprehensive test suites
        • Use feature flags for safe deployments
        • Monitor and measure deployment metrics
        
        **Cloud DevOps Best Practices:**
        • Infrastructure as Code (IaC) for reproducible environments
        • Implement proper security and access controls
        • Use monitoring and alerting for proactive issue detection
        • Practice disaster recovery and backup strategies
        • Optimize costs with resource management
      `
    }
  ]

  const features = [
    {
      title: "Cloud DevOps",
      description: "Mastering modern deployment strategies with CI/CD pipelines",
      icon: <FaCloud />
    },
    {
      title: "GitHub Actions",
      description: "Automating workflows for seamless development cycles",
      icon: <FaBolt />
    },
    {
      title: "Frontend Excellence",
      description: "Creating beautiful, responsive user interfaces",
      icon: <FaPalette />
    },
    {
      title: "Performance",
      description: "Optimized for speed and user experience",
      icon: <FaRocket />
    }
  ]

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Cloud DevOps</span>
            <br />
            Practice Project
          </h1>
          <p className="hero-subtitle">
            Exploring modern development workflows with style and sophistication
          </p>
          <button className="cta-button" onClick={() => setShowManual(true)}>
            <span>Get Started</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Features</span>
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="tech-items">
            {['React', 'Vite', 'CSS3', 'GitHub Actions', 'DevOps', 'Cloud'].map((tech, index) => (
              <div key={index} className="tech-item" style={{animationDelay: `${index * 0.1}s`}}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number"><FaCheckCircle /></div>
              <div className="stat-label">Responsive</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><FaTachometerAlt /></div>
              <div className="stat-label">Fast Loading</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><FaMagic /></div>
              <div className="stat-label">Modern Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Cloud DevOps Practice. Built with ❤️ and React.</p>
        </div>
      </footer>

      {/* CI/CD Manual Modal */}
      {showManual && (
        <div className="manual-overlay" onClick={() => setShowManual(false)}>
          <div className="manual-container" onClick={(e) => e.stopPropagation()}>
            <div className="manual-header">
              <h2>CI/CD & Cloud DevOps Manual</h2>
              <button className="manual-close" onClick={() => setShowManual(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="manual-content">
              {manualSections.map((section, index) => (
                <div key={index} className="manual-section">
                  <div className="manual-section-header">
                    <div className="manual-section-icon">{section.icon}</div>
                    <h3>{section.title}</h3>
                  </div>
                  <div className="manual-section-content">
                    {section.content.split('\n').map((line, lineIndex) => {
                      if (line.trim() === '') return <br key={lineIndex} />;
                      
                      const trimmedLine = line.trim();
                      
                      // Handle bullet points FIRST
                      if (trimmedLine.startsWith('•')) {
                        const bulletText = trimmedLine.slice(1).trim();
                        // Check if bullet text has bold formatting
                        if (bulletText.includes('**')) {
                          const formattedText = bulletText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                          return (
                            <li key={lineIndex} className="manual-bullet" 
                                dangerouslySetInnerHTML={{__html: formattedText}} />
                          );
                        }
                        return <li key={lineIndex} className="manual-bullet">{bulletText}</li>;
                      }
                      
                      // Handle any line that starts and ends with ** (subheadings)
                      if (trimmedLine.startsWith('**') && trimmedLine.includes('**') && trimmedLine !== '**') {
                        // Extract text between first ** and last **
                        const match = trimmedLine.match(/^\*\*(.*?)\*\*(.*)$/);
                        if (match) {
                          const title = match[1]; // Text between the asterisks
                          const rest = match[2]; // Any text after the closing **
                          // If there's a colon after **, remove it
                          const cleanTitle = rest.startsWith(':') ? title : title;
                          return <h4 key={lineIndex} className="manual-subheading">{cleanTitle}</h4>;
                        }
                      }
                      
                      // Handle regular paragraphs (any remaining text)
                      if (trimmedLine) {
                        return <p key={lineIndex} className="manual-paragraph">{trimmedLine}</p>;
                      }
                      
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
