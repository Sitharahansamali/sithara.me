import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Brain, Sparkles, Cloud, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code,
    color: '#7C3AED',
    skills: [
      { name: 'Python', level: 'Expert', desc: 'Primary language for AI/ML pipelines, FastAPI & Data Science' },
      { name: 'Java', level: 'Advanced', desc: 'Object-oriented application building & Spring Boot' },
      { name: 'C', level: 'Intermediate', desc: 'Systems programming & low-level memory concepts' },
      { name: 'C#', level: 'Intermediate', desc: 'Desktop application development & .NET basics' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: '#22D3EE',
    skills: [
      { name: 'PyTorch', level: 'Advanced', desc: 'Deep neural networks, model fine-tuning & computer vision' },
      { name: 'TensorFlow', level: 'Advanced', desc: 'Keras neural architectures & model deployment' },
      { name: 'Scikit-learn', level: 'Expert', desc: 'Supervised/unsupervised ML, regression & classification' },
      { name: 'Hugging Face', level: 'Advanced', desc: 'Transformers, pre-trained models & NLP pipelines' },
      { name: 'OpenCV', level: 'Advanced', desc: 'Image processing, object detection & video frames' },
      { name: 'Pandas', level: 'Expert', desc: 'Data cleaning, tabular manipulation & feature engineering' },
      { name: 'NumPy', level: 'Expert', desc: 'Multi-dimensional arrays, matrix math & linear algebra' },
      { name: 'Matplotlib', level: 'Advanced', desc: 'Data visualization, plots & analytical charts' },
      { name: 'Whisper', level: 'Advanced', desc: 'OpenAI speech-to-text transcription & audio parsing' },
      { name: 'LangGraph', level: 'Advanced', desc: 'Stateful multi-agent workflows & RAG orchestration' },
      { name: 'Google Gemini', level: 'Advanced', desc: 'Multimodal LLM API integration & prompt engineering' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: '#38BDF8',
    skills: [
      { name: 'AWS', level: 'Intermediate', desc: 'EC2, S3 storage, IAM security & cloud hosting' },
      { name: 'Microsoft Azure', level: 'Intermediate', desc: 'Azure App Services, Blob Storage & AI services' },
      { name: 'Render', level: 'Advanced', desc: 'Serverless model & web application cloud hosting' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Containers',
    icon: Wrench,
    color: '#6366F1',
    skills: [
      { name: 'Docker', level: 'Advanced', desc: 'Containerization, multi-stage builds & compose files' },
      { name: 'Docker Hub', level: 'Advanced', desc: 'Container image publishing & registry management' },
      { name: 'GitHub Actions', level: 'Advanced', desc: 'CI/CD automation, automated testing & deployment' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    color: '#14B8A6',
    skills: [
      { name: 'MongoDB', level: 'Advanced', desc: 'NoSQL document database design & aggregation queries' },
      { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational schema, SQL queries, indexes & foreign keys' },
      { name: 'Supabase', level: 'Advanced', desc: 'BaaS Postgres, real-time subscriptions & Auth' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    color: '#38BDF8',
    skills: [
      { name: 'React', level: 'Advanced', desc: 'Modern component-based interactive web interfaces' },
      { name: 'Next.js', level: 'Advanced', desc: 'React framework SSR & App Router' },
      { name: 'Astro', level: 'Advanced', desc: 'Ultra-fast static content-driven sites & SSR' },
      { name: 'JavaScript', level: 'Advanced', desc: 'ES6+ async logic, DOM manipulation & client scripts' },
      { name: 'HTML', level: 'Expert', desc: 'Semantic HTML5 structure & accessibility standards' },
      { name: 'CSS', level: 'Advanced', desc: 'Custom styling, flexbox/grid, animations & glassmorphism' },
      { name: 'Tailwind CSS', level: 'Advanced', desc: 'Utility-first rapid responsive UI styling' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    color: '#7C3AED',
    skills: [
      { name: 'FastAPI', level: 'Expert', desc: 'Async Python REST APIs, Pydantic validation & OpenAPI' },
      { name: 'PHP', level: 'Intermediate', desc: 'Server-side web scripting & database operations' },
      { name: 'REST APIs', level: 'Expert', desc: 'JSON web services, authentication & endpoint architecture' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    icon: Sparkles,
    color: '#22D3EE',
    skills: [
      { name: 'Git', level: 'Expert', desc: 'Branch management, pull requests, merges & commit history' },
      { name: 'GitHub', level: 'Expert', desc: 'Repository management, code reviews & projects' },
      { name: 'VS Code', level: 'Expert', desc: 'Primary IDE, debugging, extensions & workspace setup' },
      { name: 'Google Colab', level: 'Expert', desc: 'Cloud GPU/TPU notebook training & ML prototyping' },
      { name: 'Anaconda', level: 'Advanced', desc: 'Conda virtual environments & dependency resolution' }
    ]
  }
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]"
          >
            <Brain className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#F8FAFC] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Technical <span className="text-gradient">Skills.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#94A3B8]"
          >
            Categorized tools, frameworks, and languages I leverage for AI and software engineering.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#6D28D9] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                  : 'border border-white/10 bg-[#111827] text-[#CBD5E1] hover:border-white/20 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'border border-[#7C3AED] bg-[#7C3AED]/20 text-[#F8FAFC] shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                    : 'border border-white/10 bg-[#111827] text-[#94A3B8] hover:border-white/20 hover:text-[#CBD5E1]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, categoryIndex) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                  className="glass-panel group relative overflow-hidden rounded-3xl p-6 bg-[#111827]"
                >
                  {/* Category Glow Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0F172A] transition-transform duration-300 group-hover:rotate-6"
                      style={{ color: cat.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F8FAFC]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {cat.title}
                      </h3>
                      <span className="text-xs text-[#94A3B8]">{cat.skills.length} Technologies</span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill relative flex items-center gap-2 rounded-xl border border-white/10 bg-[#0F172A]/90 px-3.5 py-2 text-xs font-semibold text-[#CBD5E1] transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/15 hover:text-white hover:-translate-y-1"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                        <span>{skill.name}</span>
                        <span className="ml-1 text-[10px] text-[#94A3B8] font-normal">({skill.level})</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
