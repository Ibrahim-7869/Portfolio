import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

const education = {
  degree: 'BS Computer Science',
  school: 'Islamia University of Bahawalpur',
  location: 'Bahawalpur, Punjab',
  years: '2023 – Present',
  gpa: '3.56',
  maxGpa: '4.0',
  currentSem: 7,
  totalSems: 8,
  coursework: [
    'Python Programming',
    'Django Web Development',
    'Database Management Systems',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
  ],
};

export default function Education() {
  const progress = (education.currentSem / education.totalSems) * 100;

  return (
    <section
      id="education"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">05</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">05</span>
            <h2 className="font-display text-4xl font-bold text-white">EDUCATION</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Main degree card */}
          <div className="lg:col-span-8">
            <div className="bg-[#141414] border border-[#262626] overflow-hidden">
              {/* Header with large number */}
              <div className="relative p-8 border-b border-[#262626]">
                <div className="absolute right-8 top-8 font-display text-8xl font-bold text-[#1a1a1a]">
                  {education.currentSem}
                </div>
                <GraduationCap className="w-6 h-6 text-[#ff6b35] mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-[#ff6b35]">{education.school}</p>
              </div>

              {/* Details */}
              <div className="p-8">
                {/* Meta row */}
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#262626]">
                  <div className="flex items-center gap-2 text-[#525252]">
                    <MapPin className="w-3 h-3" />
                    <span className="font-mono text-xs">{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#525252]">
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono text-xs">{education.years}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-green-500">IN PROGRESS</span>
                  </div>
                </div>

                {/* GPA and Progress */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {/* GPA */}
                  <div className="p-6 bg-[#0a0a0a] border border-[#262626]">
                    <div className="font-mono text-xs text-[#525252] mb-3 uppercase">Current GPA</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-display text-4xl font-bold text-white">{education.gpa}</span>
                      <span className="text-[#525252]">/ {education.maxGpa}</span>
                    </div>
                    <div className="h-1 bg-[#262626] overflow-hidden">
                      <div
                        className="h-full bg-[#ff6b35]"
                        style={{ width: `${(parseFloat(education.gpa) / parseFloat(education.maxGpa)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="p-6 bg-[#0a0a0a] border border-[#262626]">
                    <div className="font-mono text-xs text-[#525252] mb-3 uppercase">Degree Progress</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-display text-4xl font-bold text-white">{Math.round(progress)}%</span>
                      <span className="text-[#525252]">complete</span>
                    </div>
                    <div className="h-1 bg-[#262626] overflow-hidden">
                      <div
                        className="h-full bg-[#ff6b35]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Semester indicators */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: education.totalSems }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2 ${
                        i < education.currentSem ? 'bg-[#ff6b35]' : 'bg-[#262626]'
                      }`}
                    />
                  ))}
                </div>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-[#525252]" />
                    <span className="font-mono text-xs text-[#525252] uppercase tracking-wider">
                      Relevant Coursework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-[#0a0a0a] border border-[#262626] text-white font-mono text-xs hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Side info */}
          <div className="lg:col-span-4">
            {/* Graduation estimate */}
            <div className="bg-[#141414] border border-[#262626] p-8 mb-6">
              <div className="font-mono text-xs text-[#525252] uppercase mb-4">Expected Graduation</div>
              <div className="font-display text-3xl font-bold text-white mb-2">2025</div>
              <div className="text-[#737373] text-sm">
                {education.totalSems - education.currentSem} semesters remaining
              </div>
            </div>

            {/* Focus areas */}
            <div className="bg-[#141414] border border-[#262626] p-8">
              <div className="font-mono text-xs text-[#525252] uppercase mb-6">Focus Areas</div>
              <ul className="space-y-3">
                {['Backend Development', 'API Design', 'Cloud Infrastructure', 'Database Systems'].map((focus, i) => (
                  <li key={focus} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#ff6b35]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-white text-sm">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning note */}
            <div className="mt-6 p-6 border-l-2 border-[#ff6b35] bg-[#0a0a0a]">
              <p className="text-[#737373] text-sm leading-relaxed">
                Continuously expanding knowledge through self-learning and hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
