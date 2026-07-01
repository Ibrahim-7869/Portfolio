import { MapPin, Calendar, Cpu, Award } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">01</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header - magazine style */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">01</span>
            <h2 className="font-display text-4xl font-bold text-white">ABOUT ME</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Main content - asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left column - main text */}
          <div className="lg:col-span-7">
            {/* Intro paragraph with large first letter */}
            <p className="text-white text-lg leading-relaxed mb-8">
              <span className="font-display text-6xl font-bold text-[#ff6b35] float-left mr-3 mt-1 leading-none">
                I
              </span>
              'm a Computer Science student in my 7th semester at Islamia University of Bahawalpur, with a strong passion for backend development and cloud infrastructure. My journey began with Python and has evolved into building robust, scalable systems using modern DevOps practices.
            </p>

            <p className="text-[#737373] leading-relaxed mb-8">
              During my internship at MarkDev, I developed a complete Social Media Management platform, gaining hands-on experience in full-stack development. I've since focused on backend technologies, working with Django, FastAPI, and building RESTful APIs with proper authentication and database design.
            </p>

            <p className="text-[#737373] leading-relaxed mb-12">
              Currently, I'm deepening my DevOps skills through my{' '}
              <span className="text-[#ff6b35]">100 Days of DevOps</span> project, where I'm building cloud-native infrastructure using Docker, Kubernetes, Terraform, and AWS. I believe in writing clean, maintainable code and automating everything that can be automated.
            </p>

            {/* Objective box */}
            <div className="border-l-2 border-[#ff6b35] pl-6 py-2">
              <h3 className="font-mono text-xs text-[#ff6b35] mb-2 uppercase tracking-wider">Current Objective</h3>
              <p className="text-white leading-relaxed">
                Seeking a Junior Python Developer / Backend Developer role to build and maintain scalable backend applications, APIs, and AI-powered features in a collaborative engineering team.
              </p>
            </div>
          </div>

          {/* Right column - info cards */}
          <div className="lg:col-span-5">
            {/* Personal info card */}
            <div className="bg-[#141414] border border-[#262626] p-8 mb-6">
              <h3 className="font-mono text-xs text-[#525252] mb-6 uppercase tracking-wider">Personal Info</h3>

              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                  <span className="text-[#525252] font-mono text-sm">Location</span>
                  <span className="text-white flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#ff6b35]" />
                    Bahawalpur, PK
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                  <span className="text-[#525252] font-mono text-sm">Semester</span>
                  <span className="text-white flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-[#ff6b35]" />
                    7th / 8
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                  <span className="text-[#525252] font-mono text-sm">GPA</span>
                  <span className="text-white flex items-center gap-2">
                    <Award className="w-3 h-3 text-[#ff6b35]" />
                    3.56 / 4.0
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#525252] font-mono text-sm">Focus</span>
                  <span className="text-white flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-[#ff6b35]" />
                    Backend & DevOps
                  </span>
                </div>
              </div>
            </div>

            {/* Languages card */}
            <div className="bg-[#141414] border border-[#262626] p-8">
              <h3 className="font-mono text-xs text-[#525252] mb-6 uppercase tracking-wider">Languages</h3>

              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'Java', 'C++', 'PHP'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 border border-[#262626] text-white font-mono text-sm hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-6 p-6 bg-[#ff6b35]/10 border border-[#ff6b35]/30">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white font-mono text-sm">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
