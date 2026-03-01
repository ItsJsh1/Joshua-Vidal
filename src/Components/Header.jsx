import { useTheme } from "../context/ThemeContext";
import { profile, certifications } from "../context/data/portfolioData";
import { Moon, Sun, MapPin, Laptop, BadgeCheck, Mail, Award, Download, GraduationCap } from "lucide-react";

export default function Header() {
  const { isDark, toggleDark } = useTheme();

  // A reusable card style — notice how we pass isDark to change colors
  const cardClass = `rounded-xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] transition-all duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`;

  return (
    <div className={cardClass}>
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        
        {/* Left: Profile pic + info */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto">
          {/* Profile Picture */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-400 flex-shrink-0">
            <img
              src={profile.profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
              // If image fails to load, show initials area
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Name, location, roles */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2">
              {profile.name}
              <BadgeCheck size={20} className="text-blue-500" fill="currentColor" stroke="white" />
            </h1>
            <p className="text-sm opacity-70 flex items-center justify-center sm:justify-start gap-1">
              <MapPin size={14} />
              {profile.location}
            </p>
            {/* 
              .join(" | ") turns ["Software Developer", "FullStack Developer"]
              into "Software Developer | FullStack Developer"
            */}
            <p className="text-xs sm:text-sm opacity-70 flex items-center justify-center sm:justify-start gap-1">
              <Laptop size={14} />
              {profile.roles.join(" | ")}
            </p>

            {/* School */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
              <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0">
                <img
                  src={profile.schoolLogo}
                  alt="School"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="w-full h-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>'; }}
                />
              </div>
              <p className="text-xs sm:text-sm opacity-70">{profile.school}</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
              {/* Email Me button */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 bg-gray-50 text-gray-900 font-semibold text-xs sm:text-sm px-3 py-1.5 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.2)] hover:bg-blue-500 hover:text-white transition animate-pump"
              >
                <Mail size={14} />
                Email Me
              </a>

              {/* Certifications button */}
              <button className="flex items-center gap-1.5 bg-gray-50 text-gray-900 font-semibold text-xs sm:text-sm px-3 py-1.5 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.2)] hover:bg-blue-500 hover:text-white transition">
                <Award size={14} />
                Certifications
              </button>

              {/* Download Accomplishment Report button */}
              <button className="relative overflow-hidden flex items-center gap-1.5 bg-gray-50 text-gray-900 font-semibold text-xs sm:text-sm px-3 py-1.5 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.2)] hover:bg-blue-500 hover:text-white transition">
                <span className="absolute inset-0 animate-shine"></span>
                <Download size={14} className="relative" />
                <span className="relative">Download Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Dark mode toggle */}
        <button
          onClick={toggleDark}
          className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </div>
  );
}