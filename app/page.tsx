import { ArrowUpRight, Github, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header/Navigation */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-16 md:mb-24 gap-6">
        <div className="flex items-center gap-6">
          {/* Profile Photo */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Leonardo Cruz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 24rem"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Leonardo Cruz</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Software Engineer</p>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li><Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            <li>
              <Link 
                href="/Leonardo_Cruz_Resume.pdf" 
                download="Leonardo_Cruz_Resume.pdf"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
              >
                <Download size={16} /> Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mb-24 md:mb-32">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Building <span className="text-blue-600">scalable solutions</span> through code
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Computer Science graduate from CSU San Marcos specializing in full-stack development 
              and machine learning. Passionate about creating efficient systems and AI-driven applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                View Projects
              </Link>
              <Link 
                href="https://linkedin.com/in/leonardo-cruz-582b73295/" 
                target="_blank"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
              >
                Connect on LinkedIn <ArrowUpRight size={16} className="ml-2" />
              </Link>
              <Link 
                href="/Leonardo_Cruz_Resume.pdf" 
                download="Leonardo_Cruz_Resume.pdf"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
              >
                Download Resume <Download size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Leonardo Cruz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24 md:mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <ProjectCard 
            title="School Management System"
            description="Full-stack system with real-time updates and CI/CD pipelines"
            tech={["Node.js", "React", "AWS RDS/S3", "JWT"]}
            link="https://github.com/Choshibear/CS490-StudentManagementSoftware"
          />
          
          {/* Project 2 */}
          <ProjectCard 
            title="Thyroid Carcinoma Prediction"
            description="ML model with 85% recall for clinical datasets"
            tech={["Python", "Scikit-learn", "ML"]}
          />
          
          {/* Project 3 */}
          <ProjectCard 
            title="Boids Physics Simulation"
            description="Real-time flocking behavior simulation with custom sprites"
            tech={["JavaScript", "HTML5 Canvas"]}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-24 md:mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory 
            title="Languages & Dev"
            skills={["Python", "Kotlin", "C++", "Java", "JavaScript", "TypeScript", "C#"]}
          />
          
          <SkillCategory 
            title="Cloud & DevOps"
            skills={["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]}
          />
          
          <SkillCategory 
            title="AI/ML & Data"
            skills={["Machine Learning", "TensorFlow", "PyTorch", "Data Pipelines", "SQL", "NoSQL"]}
          />
          
          <SkillCategory 
            title="Web & Tools"
            skills={["React", "Angular", "Vue", "Next.js", "Figma", ".NET"]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8 max-w-2xl">
            Currently open to new opportunities and collaborations. Feel free to reach out if you want to build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <ContactLink 
              href="mailto:leonardoangelcruz@gmail.com"
              label="leonardoangelcruz@gmail.com"
            />
            <ContactLink 
              href="tel:+17607129388"
              label="(760) 712-9388"
            />
            <ContactLink 
              href="https://linkedin.com/in/leonardo-cruz-582b73295/"
              label="LinkedIn"
            />
            <ContactLink 
              href="https://github.com/Choshibear"
              label="GitHub"
              icon={<Github size={16} />}
            />
            <ContactLink 
              href="/Leonardo_Cruz_Resume.pdf" 
              label="Download Resume"
              icon={<Download size={16} />}
              download="Leonardo_Cruz_Resume.pdf"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-400 text-sm py-8">
        <p>© {new Date().getFullYear()} Leonardo Cruz. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Project Card Component
const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link 
}: {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}) => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-transform hover:scale-[1.02] h-full flex flex-col">
    <div className="p-6 flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
    {link && (
      <div className="px-6 pb-6">
        <Link
          href={link}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 flex items-center text-sm"
        >
          View on GitHub <ArrowUpRight size={16} className="ml-1" />
        </Link>
      </div>
    )}
  </div>
);

// Skill Category Component
const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="font-bold text-lg mb-4 text-blue-600">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// Contact Link Component
const ContactLink = ({ 
  href, 
  label, 
  icon,
  download
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  download?: string;
}) => (
  <Link
    href={href}
    target={download ? undefined : "_blank"}
    download={download}
    className="px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center hover:shadow-md transition-all flex-1 min-w-[200px]"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </Link>
);