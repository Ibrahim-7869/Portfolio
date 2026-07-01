import { useState } from 'react';
import { Folder, Github, ExternalLink, ChevronRight, Star } from 'lucide-react';

type Category = 'all' | 'backend' | 'devops' | 'fullstack';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: Category;
  tech: string[];
  github: string;
  featured: boolean;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Online Job Posting System',
    description: 'Full-stack job board with role-based access control',
    longDescription: 'Delivered a full-stack job board with Django REST Framework, JWT auth, and complete application workflow tracking.',
    category: 'backend',
    featured: true,
    github: 'https://github.com/Ibrahim-7869',
    tech: ['Python', 'Django', 'DRF', 'SQLite', 'JWT'],
    highlights: [
      '8+ REST API endpoints with server-rendered views',
      'JWT authentication with role-based access',
      'Application status workflow with audit logging',
      'CV upload and media file handling',
    ],
  },
  {
    id: 2,
    title: 'Cloud-Native Infrastructure Pipeline',
    description: '100 Days of DevOps journey on AWS',
    longDescription: 'Designing and deploying cloud-native infrastructure using Docker, Kubernetes, and Terraform.',
    category: 'devops',
    featured: true,
    github: 'https://github.com/Ibrahim-7869/100-days-of-devops',
    tech: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions'],
    highlights: [
      'Container orchestration with Kubernetes',
      'Infrastructure as Code with Terraform',
      'CI/CD automation with GitHub Actions',
      'Custom Docker networks and volumes',
    ],
  },
  {
    id: 3,
    title: 'SMM Web Application',
    description: 'Complete Social Media Management platform',
    longDescription: 'Full-stack SMM platform with real-time social media interactions and async data handling.',
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/Ibrahim-7869',
    tech: ['JavaScript', 'PHP', 'MySQL', 'REST API'],
    highlights: [
      'End-to-end product ownership',
      'Real-time interaction updates',
      'Optimized MySQL schema design',
    ],
  },
];

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'backend', label: 'BACKEND' },
  { key: 'devops', label: 'DEVOPS' },
  { key: 'fullstack', label: 'FULLSTACK' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">04</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">04</span>
            <h2 className="font-display text-4xl font-bold text-white">PROJECTS</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4">
          {filters.map((filter, i) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 font-mono text-xs tracking-wider border transition-all whitespace-nowrap ${
                activeFilter === filter.key
                  ? 'bg-[#ff6b35] text-black border-[#ff6b35]'
                  : 'bg-transparent text-[#525252] border-[#262626] hover:border-[#404040] hover:text-[#737373]'
              }`}
            >
              <span className="text-[#404040] mr-2">{String(i + 1).padStart(2, '0')}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`group bg-[#141414] border border-[#262626] overflow-hidden hover:border-[#ff6b35]/50 transition-all ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'grid md:grid-cols-2' : ''}`}>
                {/* Header section */}
                <div className={`p-8 ${project.featured ? '' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      {project.featured && (
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-3 h-3 text-[#ff6b35] fill-[#ff6b35]" />
                          <span className="font-mono text-xs text-[#ff6b35] uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                      )}
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#737373] text-sm">{project.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <Folder className="w-10 h-10 text-[#262626]" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#525252] text-sm leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#0a0a0a] border border-[#262626] text-[#737373] font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ff6b35] font-mono text-xs hover:gap-3 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    VIEW CODE
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Highlights section */}
                <div className={`p-8 bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-[#262626] ${project.featured ? '' : 'hidden'}`}>
                  <h4 className="font-mono text-xs text-[#525252] uppercase tracking-wider mb-6">
                    Implementation Details
                  </h4>
                  <ul className="space-y-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                        <span className="text-[#737373] text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Ibrahim-7869"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs text-[#525252] hover:text-[#ff6b35] transition-colors"
          >
            <Github className="w-4 h-4" />
            VIEW ALL PROJECTS ON GITHUB
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
