import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experience = {
  role: 'Full Stack Developer Intern',
  company: 'MarkDev',
  location: 'Bahawalpur, Punjab',
  period: 'DEC 2025 – FEB 2026',
  type: 'INTERNSHIP',
  achievements: [
    {
      text: 'Built a responsive SMM web application end-to-end supporting 500+ active user sessions',
      metric: '500+',
      label: 'users',
    },
    {
      text: 'Improved data layer reliability and query performance by ~25% through optimized MySQL schemas',
      metric: '25%',
      label: 'faster',
    },
    {
      text: 'Eliminated cross-browser rendering issues with zero reported UI bugs post-fix',
      metric: '0',
      label: 'bugs',
    },
    {
      text: 'Strengthened team delivery through strict version control and peer code reviews',
      metric: '100%',
      label: 'coverage',
    },
  ],
  tech: ['JavaScript ES6+', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'Git', 'GitHub'],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">03</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">03</span>
            <h2 className="font-display text-4xl font-bold text-white">EXPERIENCE</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Main experience card */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Timeline marker (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              {/* Year badge */}
              <div className="mb-6">
                <div className="font-mono text-7xl font-bold text-[#1a1a1a] leading-none">25</div>
                <div className="font-mono text-xs text-[#525252] mt-2">DEC - FEB</div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="w-px h-32 bg-[#262626]" />
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#ff6b35] -translate-x-1" />
                <div className="absolute top-32 left-0 w-3 h-3 bg-[#262626] border border-[#404040] -translate-x-1" />
              </div>

              {/* Future */}
              <div className="mt-8 font-mono text-xs text-[#404040]">
                <div className="text-[#525252]">NEXT:</div>
                <div className="text-[#ff6b35]">YOUR COMPANY?</div>
              </div>
            </div>
          </div>

          {/* Right - Experience details */}
          <div className="lg:col-span-9">
            <div className="bg-[#141414] border border-[#262626] overflow-hidden">
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[#262626]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-4 h-4 text-[#ff6b35]" />
                      <span className="font-mono text-xs text-[#ff6b35] uppercase tracking-wider">
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-[#737373] text-sm">{experience.company}</p>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="flex items-center gap-2 text-[#525252] font-mono text-xs mb-1">
                      <MapPin className="w-3 h-3" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-2 text-[#525252] font-mono text-xs">
                      <Calendar className="w-3 h-3" />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="p-6 sm:p-8">
                <h4 className="font-mono text-xs text-[#525252] uppercase tracking-wider mb-6">
                  Key Achievements
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {experience.achievements.map((item, index) => (
                    <div
                      key={index}
                      className="group p-5 bg-[#0a0a0a] border border-[#262626] hover:border-[#ff6b35]/50 transition-colors"
                    >
                      <div className="text-4xl font-display font-bold text-[#ff6b35] mb-1">
                        {item.metric}
                      </div>
                      <div className="font-mono text-xs text-[#404040] mb-3 uppercase">
                        {item.label}
                      </div>
                      <p className="text-[#737373] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-[#262626]">
                  <h4 className="font-mono text-xs text-[#525252] uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-[#0a0a0a] border border-[#262626] text-white font-mono text-xs hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Next opportunity callout */}
            <div className="mt-8 p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-[#ff6b35] mb-1">UP NEXT</div>
                  <div className="text-white font-display font-semibold">
                    Your company could be here
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-[#ff6b35] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
