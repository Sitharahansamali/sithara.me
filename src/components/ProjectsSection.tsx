import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal, { type ProjectData } from './ProjectModal';
import { ExternalLink, Sparkles, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projects: ProjectData[] = [
  {
    id: 'voice-to-action',
    title: 'Voice to Action AI Agent Platform',
    status: 'Ongoing',
    highlights: ['Speech AI', 'LangGraph Agents', 'RAG Memory'],
    description:
      'An AI-powered voice assistant platform combining speech recognition, Retrieval-Augmented Generation (RAG), stateful AI agents, and workflow automation to execute complex real-world tasks.',
    problem:
      'Traditional voice assistants handle basic single-turn queries but lack stateful task orchestration, contextual memory retrieval, and the ability to execute multi-step workflows automatically.',
    keyFeatures: [
      'Real-Time Speech Interaction (Whisper AI)',
      'Context-Aware Conversations via RAG',
      'Multi-Agent Workflow Orchestration (LangGraph)',
      'Automated Task & Action Execution',
      'Persistent Memory Retrieval (ChromaDB & MongoDB)'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Whisper',
      'Hugging Face',
      'ChromaDB',
      'MongoDB',
      'Docker',
      'Next.js'
    ],
    architecture: [
      'FastAPI WebSocket layer handling real-time audio streaming',
      'Whisper AI pipeline converting speech-to-text with low latency',
      'LangGraph state graphs delegating queries to specialized AI agents',
      'ChromaDB vector store providing semantic RAG memory retrieval',
      'Containerized Docker microservices for isolated model execution'
    ],
    challenges: [
      'Optimizing streaming audio latency between client and Whisper engine',
      'Preventing agent state loops in LangGraph complex decision trees',
      'Ensuring strict vector similarity thresholds for accurate memory recall'
    ],
    role: 'Lead Architect & AI Engineer - Designed the LangGraph stateful agent framework, speech ingestion backend, and vector database memory index.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#58a6ff] via-[#a371ff] to-[#ff1493]',
    mockupBg: 'bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#1f293d]'
  },
  {
    id: 'pneumonia-xray',
    title: 'Pneumonia Chest X-Ray Classifier',
    status: 'Completed',
    highlights: ['Medical AI', 'Grad-CAM Explainability', 'Cloud Deployed'],
    description:
      'A deep learning application detecting pneumonia from chest X-ray images using EfficientNet-B0 with visual Grad-CAM explainability for medical validation.',
    problem:
      'Black-box AI models in medical diagnostics lack transparency, making it difficult for healthcare professionals to verify why a specific image was flagged.',
    keyFeatures: [
      'Chest X-Ray Pneumonia Detection (Binary & Multi-class)',
      'EfficientNet-B0 Transfer Learning Architecture',
      'Grad-CAM Heatmap Visualization for Model Transparency',
      'Interactive Streamlit Web Dashboard',
      'Dockerized Cloud Deployment on Render'
    ],
    technologies: ['PyTorch', 'EfficientNet-B0', 'Grad-CAM', 'Streamlit', 'Docker', 'Render'],
    architecture: [
      'PyTorch deep learning pipeline with dataset augmentations & normalization',
      'EfficientNet-B0 pretrained backbone fine-tuned on chest radiograph data',
      'Grad-CAM hook layer projecting feature map activations as visual heatmaps',
      'Streamlit web application for drag-and-drop diagnostic image testing'
    ],
    challenges: [
      'Handling class imbalance in clinical X-ray datasets',
      'Extracting feature activation maps accurately from EfficientNet bottleneck layers',
      'Optimizing model memory footprint for containerized serverless hosting'
    ],
    role: 'ML & Computer Vision Engineer - Trained the PyTorch model, implemented Grad-CAM heatmap hooks, and deployed the web application.',
    github: 'https://github.com/Sitharahansamali',
    demo: 'https://render.com',
    gradient: 'from-[#38bdf8] via-[#58a6ff] to-[#a371ff]',
    mockupBg: 'bg-gradient-to-br from-[#0d1117] via-[#101f33] to-[#182e4a]'
  },
  {
    id: 'techpulse-ai',
    title: 'TechPulse AI',
    status: 'Completed',
    highlights: ['GenAI News Engine', 'n8n Automation', 'FastAPI'],
    description:
      'An AI-powered technology news platform that automatically gathers global tech news, categorizes articles using Generative AI, and publishes curated feeds.',
    problem:
      'Tech news feeds are overwhelmed with uncurated noise and redundant content. Manual aggregation is slow and lacks automated intelligence.',
    keyFeatures: [
      'Automated Article Ingestion via NewsAPI & Web Scrapers',
      'Generative AI Content Summarization & Categorization (Google Gemini)',
      'n8n Workflow Automation for Scheduled Publishing',
      'FastAPI RESTful Backend API',
      'React Interactive Content Feed Interface'
    ],
    technologies: ['FastAPI', 'React', 'MongoDB', 'NewsAPI', 'Google Gemini', 'n8n'],
    architecture: [
      'n8n automated cron webhooks triggering news ingestion scripts',
      'Google Gemini API processing raw articles for summary extraction & topic tag generation',
      'MongoDB database storing normalized article metadata & tags',
      'FastAPI backend service delivering cached endpoint responses to React UI'
    ],
    challenges: [
      'Handling API rate limits gracefully during peak news ingestion',
      'Designing robust prompt templates to prevent hallucination in article summaries',
      'Building an efficient MongoDB index for fast topic filtering'
    ],
    role: 'Full-Stack & GenAI Engineer - Built the FastAPI backend, engineered Gemini prompts, configured n8n workflows, and created the React dashboard.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#c084fc] via-[#a371ff] to-[#ff1493]',
    mockupBg: 'bg-gradient-to-br from-[#0d1117] via-[#1a1429] to-[#2b1842]'
  },
  {
    id: 'newsguard-ai',
    title: 'NewsGuard AI',
    status: 'Completed',
    highlights: ['Fake News Classifier', 'ML Predictions', 'MongoDB History'],
    description:
      'A machine learning credibility platform predicting news authenticity using NLP features, FastAPI microservices, and persistent prediction history tracking.',
    problem:
      'Misinformation spreads rapidly across digital platforms without fast, automated verification mechanisms accessible to general readers.',
    keyFeatures: [
      'NLP Text Vectorization & Classification',
      'FastAPI Real-Time Credibility Scoring Engine',
      'Prediction Confidence Score & Risk Analysis',
      'Historical Verification Logging (MongoDB)',
      'Modern Interactive Web Frontend'
    ],
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'MongoDB', 'React', 'Tailwind CSS'],
    architecture: [
      'Scikit-learn TF-IDF & PassiveAggressive / Logistic Regression model pipeline',
      'FastAPI inference endpoint returning credibility probability metrics',
      'MongoDB data store recording historical user queries & verification analytics'
    ],
    challenges: [
      'Balancing model precision vs recall on complex satirical news text',
      'Preventing adversarial evasion through text preprocessing pipelines'
    ],
    role: 'Machine Learning Engineer - Preprocessed datasets, trained NLP classifiers, built the prediction API, and logged verification history.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#34d399] via-[#38bdf8] to-[#58a6ff]',
    mockupBg: 'bg-gradient-to-br from-[#0d1117] via-[#0f2420] to-[#123830]'
  },
  {
    id: 'zapverse',
    title: 'ZapVerse Platform',
    status: 'Completed',
    highlights: ['Full-Stack Web', 'Spring Boot', 'Azure & GitHub Actions'],
    description:
      'A secure university social networking platform enabling students to communicate, publish posts, collaborate on projects, and manage academic networks.',
    problem:
      'University students lack a dedicated, secure internal network tailored to campus announcements, peer collaboration, and verified student identity.',
    keyFeatures: [
      'Role-Based Authentication & Student Verification',
      'Real-Time Post Creation, Media Uploads & Comments',
      'Campus Event Announcement Board',
      'Supabase Database Integration',
      'CI/CD Deployment Pipeline via Azure & GitHub Actions'
    ],
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Supabase', 'Azure', 'GitHub Actions'],
    architecture: [
      'Spring Boot MVC framework handling authentication, session security & controllers',
      'Thymeleaf templating engine delivering server-side rendered UI components',
      'Supabase PostgreSQL database storing users, posts, and interaction metrics',
      'GitHub Actions workflow automating deployment to Azure App Service'
    ],
    challenges: [
      'Implementing secure session management and role-based access control',
      'Configuring automated build pipelines for Azure cloud hosting'
    ],
    role: 'Full-Stack Developer - Developed Spring Boot controllers, configured Supabase database schemas, and setup Azure CI/CD pipelines.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#fbbf24] via-[#ff1493] to-[#a371ff]',
    mockupBg: 'bg-gradient-to-br from-[#0d1117] via-[#241a0f] to-[#3b2512]'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Glow Ambient Lights */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#ff1493]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#58a6ff]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#ff1493]/30 bg-[#ff1493]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff1493]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Innovations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Orbitron, var(--font-display)' }}
          >
            Production AI & Software Showcase.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Detailed engineering showcases of intelligent systems, deep learning models, and full-stack platforms.
          </motion.p>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="glass-panel group relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10"
              >
                {/* Accent Top Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Project Info Column */}
                  <div className={`flex flex-col space-y-5 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Status & Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.status && (
                        <span className="rounded-full border border-[#58a6ff]/40 bg-[#58a6ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#58a6ff]">
                          {project.status}
                        </span>
                      )}
                      {project.highlights?.map((h) => (
                        <span key={h} className="rounded-full border border-white/10 bg-[#0d1117] px-3 py-1 text-xs font-semibold text-slate-300">
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    {/* Overview */}
                    <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                      {project.description}
                    </p>

                    {/* Key Features Preview */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Features:</h4>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {project.keyFeatures.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#58a6ff]" />
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-[#0d1117]/90 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
                      >
                        <span>Learn More & Architecture</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0d1117] px-4 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff]"
                        >
                          <GithubIcon className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0d1117] px-4 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Graphic Preview Mockup Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group/mockup overflow-hidden rounded-2xl border border-white/15 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                      <div className={`relative aspect-16/10 w-full overflow-hidden rounded-xl ${project.mockupBg} p-6 flex flex-col justify-between border border-white/10`}>
                        {/* Mockup Top Window Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500/80" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <span className="h-3 w-3 rounded-full bg-green-500/80" />
                          </div>
                          <span className="font-mono text-[11px] font-medium text-slate-400">{project.id}.ai</span>
                        </div>

                        {/* Center Visual Graphics */}
                        <div className="my-auto text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-lg">
                            <Sparkles className="h-8 w-8 animate-pulse text-[#58a6ff]" />
                          </div>
                          <h4 className="mt-4 font-mono text-lg font-bold text-white tracking-wider">{project.title}</h4>
                          <p className="mt-1 text-xs text-slate-300 font-mono">System Status: Active Node</p>
                        </div>

                        {/* Bottom Metric Tags */}
                        <div className="flex items-center justify-between rounded-lg bg-black/40 p-2.5 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                          <span>Latency: &lt;120ms</span>
                          <span className="text-[#34d399]">Accuracy: 98.4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Expandable Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
