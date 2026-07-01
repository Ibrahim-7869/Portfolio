import { useState } from 'react';
import { Server, Database, Cloud, Brain, Monitor, Settings, Check } from 'lucide-react';

const skillGroups = [
  {
    title: 'BACKEND & APIS',
    icon: Server,
    items: ['Python', 'Django', 'FastAPI', 'Node.js/Express', 'PHP', 'REST APIs'],
  },
  {
    title: 'DATABASES',
    icon: Database,
    items: ['MySQL', 'SQLite', 'MongoDB', 'Django ORM', 'Schema Design'],
  },
  {
    title: 'DEVOPS & CLOUD',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Linux/Bash'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    items: ['LLM API Integration', 'OpenAI APIs', 'NLP Basics', 'Scikit-learn'],
  },
  {
    title: 'FRONTEND',
    icon: Monitor,
    items: ['React.js', 'JavaScript ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'TOOLS & METHODS',
    icon: Settings,
    items: ['Git/GitHub', 'VS Code', 'Agile/Scrum', 'JSON/YAML', 'SSH'],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section
      id="skills"
      className="relative py-32 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">02</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">02</span>
            <h2 className="font-display text-4xl font-bold text-white">SKILLS & STACK</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Category list */}
          <div className="lg:col-span-4">
            <div className="space-y-1">
              {skillGroups.map((group, index) => (
                <button
                  key={group.title}
                  onClick={() => setActiveGroup(index)}
                  className={`w-full text-left p-4 border transition-all duration-300 ${
                    activeGroup === index
                      ? 'bg-[#141414] border-[#ff6b35]'
                      : 'bg-transparent border-[#262626] hover:border-[#404040]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <group.icon
                        className={`w-4 h-4 ${
                          activeGroup === index ? 'text-[#ff6b35]' : 'text-[#525252]'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-wider ${
                          activeGroup === index ? 'text-white' : 'text-[#525252]'
                        }`}
                      >
                        {group.title}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-xs ${
                        activeGroup === index ? 'text-[#ff6b35]' : 'text-[#404040]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Terminal output */}
            <div className="mt-8 p-4 bg-[#0a0a0a] border border-[#262626] font-mono text-xs">
              <div className="text-[#525252] mb-2">$ cat skills.json | grep -i "primary"</div>
              <div className="text-[#ff6b35]">"backend": "Python"</div>
              <div className="text-[#ff6b35]">"framework": "Django"</div>
              <div className="text-[#ff6b35]">"infrastructure": "Docker"</div>
              <div className="text-white animate-blink">_</div>
            </div>
          </div>

          {/* Right - Skills display */}
          <div className="lg:col-span-8">
            <div className="bg-[#141414] border border-[#262626] p-8 min-h-[400px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#262626]">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {skillGroups[activeGroup].title}
                  </h3>
                  <p className="font-mono text-xs text-[#525252]">
                    {skillGroups[activeGroup].items.length} technologies
                  </p>
                </div>
                <div className="font-mono text-6xl text-[#1a1a1a] font-bold">
                  {String(activeGroup + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Skills list */}
              <div className="grid sm:grid-cols-2 gap-4">
                {skillGroups[activeGroup].items.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-[#262626] hover:border-[#ff6b35] transition-colors"
                  >
                    <Check className="w-4 h-4 text-[#ff6b35]" />
                    <span className="font-mono text-sm text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Python', 'Docker', 'Django', 'AWS', 'Kubernetes', 'FastAPI', 'MySQL', 'Terraform'].map((tech) => (
                <div
                  key={tech}
                  className="p-3 bg-[#141414] border border-[#262626] text-center font-mono text-xs text-[#525252] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
