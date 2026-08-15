import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal, { type ProjectData } from './ProjectModal';
import { ExternalLink, Sparkles, ArrowRight, Clock, Award, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projects: ProjectData[] = [
  {
    id: 'voice-to-action',
    title: 'Voice to Action AI Agent Platform',
    status: 'Ongoing',
    duration: '2025 - Present',
    highlights: ['Speech AI', 'LangGraph Agents', 'RAG Memory'],
    description:
      'An AI-powered voice assistant platform combining speech recognition, Retrieval-Augmented Generation (RAG), stateful AI agents, and workflow automation to execute contextual voice interactions capable of executing intelligent tasks.',
    problem:
      'Traditional voice assistants handle basic single-turn queries but lack stateful task orchestration, contextual memory retrieval, and the capability to execute multi-step workflows automatically.',
    solution:
      'Engineered a multi-agent framework using LangGraph and Whisper AI to process streaming audio inputs, query a ChromaDB vector index for contextual memory, and execute automated actions.',
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
    results: 'Built an end-to-end voice platform capable of contextual multi-turn conversation and automated task execution with sub-second response times.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#E63946] via-[#F97316] to-[#FB923C]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Audio Latency', value: '<120ms' },
      { label: 'RAG Accuracy', value: '98.4%' },
      { label: 'Agents Orchestrated', value: '4 Stateful' }
    ]
  },
  {
    id: 'techpulse-ai',
    title: 'TechPulse AI',
    status: 'Completed',
    duration: '2025',
    highlights: ['GenAI News Engine', 'n8n Automation', 'FastAPI'],
    description:
      'An AI-powered technology news platform that automatically gathers global tech news, categorizes articles using Generative AI, and publishes organized content through automated workflows.',
    problem:
      'Tech news feeds are overwhelmed with uncurated noise and redundant content. Manual aggregation is slow and lacks automated intelligence.',
    solution:
      'Built an automated pipeline utilizing n8n webhooks and Google Gemini LLM to fetch raw articles, generate concise summaries, tag topic categories, and publish structured content.',
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
    results: 'Automated 100% of daily news curation, processing over 500 articles daily with instant AI summaries.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#F97316] via-[#FB923C] to-[#E63946]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Articles / Day', value: '500+' },
      { label: 'AI Summaries', value: 'Instant' },
      { label: 'Automation Rate', value: '100%' }
    ]
  },
  {
    id: 'pneumonia-xray',
    title: 'Pneumonia Chest X-Ray Classifier',
    status: 'Completed',
    duration: '2025',
    highlights: ['Medical AI', 'Grad-CAM Explainability', 'Cloud Deployed'],
    description:
      'A deep learning application detecting pneumonia from chest X-ray images using EfficientNet-B0 with Grad-CAM explainability for medical validation.',
    problem:
      'Black-box AI models in medical diagnostics lack transparency, making it difficult for healthcare professionals to verify why a specific image was flagged.',
    solution:
      'Integrated Grad-CAM heatmap visualization into an EfficientNet-B0 PyTorch convolutional neural network to highlight exact lung region activations corresponding to pneumonia indicators.',
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
    results: 'Achieved 96.2% diagnostic accuracy on validation datasets while providing actionable visual heatmaps for clinicians.',
    github: 'https://github.com/Sitharahansamali',
    demo: 'https://render.com',
    gradient: 'from-[#E63946] via-[#F97316] to-[#FB923C]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Model Accuracy', value: '96.2%' },
      { label: 'Explainability', value: 'Grad-CAM' },
      { label: 'Inference Time', value: '<250ms' }
    ]
  },
  {
    id: 'hallease',
    title: 'HallEase - Event & Hall Management System',
    status: 'Completed',
    duration: '2024 - 2025',
    highlights: ['Faculty Platform', 'Supabase & Next.js', 'Automated Mailjet'],
    description:
      'A modern web-based Event and Hall Management System developed for the Faculty of Computing and Technology to streamline hall reservations, event scheduling, and administrative management.',
    problem:
      'Manual hall reservation processes caused double-booking conflicts, delayed administrative approvals, and poor communication between students and faculty staff.',
    solution:
      'Created an end-to-end full-stack web application featuring real-time availability checking, automated Mailjet email notifications, role-based access control, and intuitive scheduling dashboards.',
    keyFeatures: [
      'Secure Student & Faculty Authentication',
      'Hall Reservation & Availability Calendar',
      'Event Scheduling & Approval Workflows',
      'Automated Email Notifications (Mailjet)',
      'Role-Based Access Control (Admin, Student, Staff)',
      'Responsive Modern Interface (Next.js & Tailwind CSS)'
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Mailjet', 'Google Gemini'],
    architecture: [
      'Next.js App Router providing fast server-rendered pages and API routes',
      'Supabase PostgreSQL relational schema enforcing constraints to eliminate double bookings',
      'Mailjet transactional email integration dispatching instant status notifications',
      'Exploring Google Gemini integration for smart event summary generation'
    ],
    challenges: [
      'Preventing concurrent booking race conditions across simultaneous student requests',
      'Designing flexible role-based permission policies for multi-department staff'
    ],
    role: 'Full-Stack Developer - Designed the database schema, built the Next.js frontend and Supabase API integrations, and implemented automated notifications.',
    results: 'Streamlined faculty hall bookings, reducing approval processing time by 80% and eliminating double-booking conflicts completely.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#F97316] via-[#E63946] to-[#FB923C]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Booking Clashes', value: '0%' },
      { label: 'Approval Speed', value: '80% Faster' },
      { label: 'Users Supported', value: 'Faculty Wide' }
    ]
  },
  {
    id: 'newsguard-ai',
    title: 'NewsGuard AI',
    status: 'Completed',
    duration: '2024',
    highlights: ['Fake News Classifier', 'ML Predictions', 'MongoDB History'],
    description:
      'A machine learning credibility platform built with machine learning, FastAPI, and MongoDB that predicts news credibility while maintaining prediction history.',
    problem:
      'Misinformation spreads rapidly across digital platforms without fast, automated verification mechanisms accessible to general readers.',
    solution:
      'Trained NLP text classification models and exposed them via a FastAPI microservice backed by MongoDB prediction tracking.',
    keyFeatures: [
      'NLP Text Vectorization & Classification',
      'FastAPI Real-Time Credibility Scoring Engine',
      'Prediction Confidence Score & Risk Analysis',
      'Historical Verification Logging (MongoDB)',
      'Modern Interactive Web Frontend'
    ],
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'MongoDB', 'React', 'Tailwind CSS'],
    architecture: [
      'Scikit-learn TF-IDF & PassiveAggressive classification model pipeline',
      'FastAPI inference endpoint returning credibility probability metrics',
      'MongoDB data store recording historical user queries & verification analytics'
    ],
    challenges: [
      'Balancing model precision vs recall on complex satirical news text',
      'Preventing adversarial evasion through text preprocessing pipelines'
    ],
    role: 'Machine Learning Engineer - Preprocessed datasets, trained NLP classifiers, built the prediction API, and logged verification history.',
    results: 'Achieved 94.8% classification accuracy on news verification benchmarks with historical audit logs.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#E63946] via-[#FB923C] to-[#F97316]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Model Precision', value: '94.8%' },
      { label: 'Inference', value: '<100ms' }
    ]
  },
  {
    id: 'zapverse',
    title: 'ZapVerse Platform',
    status: 'Completed',
    duration: '2024',
    highlights: ['Full-Stack Web', 'Spring Boot', 'Azure & GitHub Actions'],
    description:
      'A university social networking platform that enables students to communicate, publish posts, and collaborate through a secure full-stack web application.',
    problem:
      'University students lack a dedicated, secure internal network tailored to campus announcements, peer collaboration, and verified student identity.',
    solution:
      'Built a Java Spring Boot platform integrated with Supabase and Azure cloud hosting to foster safe campus communication.',
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
    results: 'Successfully deployed a full-stack campus web app with automated Azure deployments.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#F97316] via-[#E63946] to-[#FB923C]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Deploy Pipeline', value: 'GitHub Actions' },
      { label: 'Cloud Hosting', value: 'Azure' }
    ]
  },
  {
    id: 'octave-datastorm',
    title: 'OCTAVE DataStorm Hackathon',
    badge: 'Hackathon Project',
    status: 'Completed',
    duration: 'Hackathon Edition',
    highlights: ['AI Hackathon', 'Rapid Prototyping', 'Team Collaboration'],
    description:
      'Developed an AI-powered solution during the OCTAVE DataStorm Hackathon by collaborating in a multidisciplinary team to solve a real-world problem using data analytics and artificial intelligence.',
    problem:
      'High-pressure hackathon challenge requiring rapid dataset exploratory analysis, ML model building, and innovative AI-driven decision tools within a tight timeframe.',
    solution:
      'Collaborated in a multidisciplinary team to perform rapid EDA, engineer predictive features, train ML models, and build an interactive decision dashboard for real-world impact.',
    keyFeatures: [
      'Exploratory Data Analysis & Feature Engineering under tight hackathon deadlines',
      'Predictive Machine Learning & Statistical Modeling',
      'Data-Driven Decision Making & Strategy Dashboard',
      'Rapid Prototyping & Agile Team Collaboration',
      'Executive Pitch Presentation & AI Solution Demo'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Data Analytics', 'Generative AI'],
    architecture: [
      'Aggressive dataset pre-processing and outlier detection pipeline in Python',
      'Machine learning model comparison suite for selecting optimal predictive metrics',
      'Streamlit interactive dashboard visualizing analytical insights for pitch evaluation'
    ],
    challenges: [
      'Iterating through multiple model hypotheses rapidly within time limits',
      'Synthesizing complex data analytics into clear strategic executive recommendations'
    ],
    role: 'AI & Data Specialist - Conducted data cleaning, built predictive models, designed analytics visualizations, and co-presented the hackathon pitch.',
    learnings: [
      'Deepened skills in rapid hackathon prototyping and agile teamwork',
      'Learned techniques for delivering high-impact data analytics under strict time constraints',
      'Enhanced AI model evaluation and real-world problem framing capabilities'
    ],
    results: 'Delivered a functional AI prototype and pitch presentation praised by hackathon judges for analytical rigor and rapid execution.',
    github: 'https://github.com/Sitharahansamali',
    demo: '#',
    gradient: 'from-[#E63946] via-[#F97316] to-[#FB923C]',
    mockupBg: 'bg-gradient-to-br from-[#121214] via-[#18181B] to-[#1F1F23]',
    metrics: [
      { label: 'Format', value: 'Hackathon' },
      { label: 'Focus', value: 'Data & AI' },
      { label: 'Execution', value: 'Rapid Prototype' }
    ]
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Glow Ambient Lights */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#E63946]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FB923C]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E63946]" />
            <span>Featured Innovations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#FAFAFA] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Featured <span className="text-gradient">Projects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#A1A1AA]"
          >
            Production AI platforms, speech processing agents, medical deep learning models, hackathon innovations, and web platforms.
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
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className="glass-panel group relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#18181B]"
              >
                {/* Accent Top Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Project Info Column */}
                  <div className={`flex flex-col space-y-5 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Status & Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.badge && (
                        <span className="rounded-full border border-[#E63946]/40 bg-[#E63946]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FAFAFA]">
                          {project.badge}
                        </span>
                      )}
                      {project.status && (
                        <span className="rounded-full border border-[#F97316]/40 bg-[#F97316]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F97316]">
                          {project.status}
                        </span>
                      )}
                      {project.duration && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#A1A1AA]">
                          <Clock className="h-3.5 w-3.5 text-[#E63946]" />
                          <span>{project.duration}</span>
                        </span>
                      )}
                      {project.highlights?.map((h) => (
                        <span key={h} className="rounded-full border border-white/10 bg-[#121214] px-3 py-1 text-xs font-semibold text-[#D4D4D8]">
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-extrabold text-[#FAFAFA] sm:text-3xl lg:text-4xl"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Overview */}
                    <p className="text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
                      {project.description}
                    </p>

                    {/* Animated Metrics Bar */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2.5 rounded-2xl border border-white/10 bg-[#121214]/80 p-3 text-center">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-sm font-bold text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {m.value}
                            </p>
                            <p className="text-[10px] font-semibold text-[#A1A1AA] uppercase tracking-wider">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-[#121214] px-3 py-1 text-xs font-semibold text-[#D4D4D8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E63946] to-[#F97316] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(230,57,70,0.5)]"
                      >
                        <span>Learn More & Architecture</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#121214] px-4 py-2.5 text-xs font-bold text-[#D4D4D8] transition-colors hover:border-[#E63946] hover:text-white"
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
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#121214] px-4 py-2.5 text-xs font-bold text-[#D4D4D8] transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Graphic Preview Mockup Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group/mockup overflow-hidden rounded-3xl border border-white/15 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                      <div className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl ${project.mockupBg} p-6 flex flex-col justify-between border border-white/10`}>
                        {/* Mockup Top Window Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500/80" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <span className="h-3 w-3 rounded-full bg-green-500/80" />
                          </div>
                          <span className="font-mono text-[11px] font-medium text-[#A1A1AA]">{project.id}.ai</span>
                        </div>

                        {/* Center Visual Graphics */}
                        <div className="my-auto text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-lg">
                            <Sparkles className="h-8 w-8 animate-pulse text-[#F97316]" />
                          </div>
                          <h4 className="mt-4 text-lg font-bold text-[#FAFAFA] tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {project.title}
                          </h4>
                          <p className="mt-1 text-xs text-[#D4D4D8] font-mono">
                            {project.badge ? project.badge : 'AI Systems Active'}
                          </p>
                        </div>

                        {/* Bottom Metric Tags */}
                        <div className="flex items-center justify-between rounded-xl bg-black/60 p-2.5 backdrop-blur-md text-[11px] font-mono text-[#D4D4D8] border border-white/10">
                          <span>Role: AI/ML</span>
                          <span className="text-[#F97316]">Status: Verified Node</span>
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
