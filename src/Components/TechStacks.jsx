import { useTheme } from "../context/ThemeContext";
import { techStacks } from "../context/data/portfolioData";

export default function TechStacks() {
  const { isDark } = useTheme();

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "databases", label: "Databases" },
  ];

  return (
    <div className={`rounded-xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] transition-all duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Tech Stack</h2>
      </div>

      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <div key={category.key}>
            <h3 className="text-sm font-semibold mb-2 opacity-80">{category.label}</h3>
            <div className="flex flex-wrap gap-3">
              {techStacks[category.key]?.map((tech, index) => (
                <div
                  key={index}
                  className="relative group transition-all hover:scale-110 cursor-pointer"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={`w-6 h-6 object-contain ${isDark && category.key === 'databases' ? 'invert' : ''}`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10 ${
                    isDark ? "bg-gray-700 text-white" : "bg-gray-900 text-white"
                  }`}>
                    {tech.name}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                      isDark ? "border-t-gray-700" : "border-t-gray-900"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}