import { useTheme } from "../context/ThemeContext";

export default function AboutMe() {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] transition-all duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <h2 className="text-xl font-bold mb-3">About Me</h2>
      <p className="text-sm leading-relaxed opacity-80 md:text-justify">
        {/* Replace this with your actual bio */}
        Hi! I’m Joshua, a passionate Full Stack Developer based in Taguig, Metro Manila. 
        I love building clean, efficient web applications and am always excited to take 
        on new challenges. When I’m not coding, I enjoy doing photography and video 
        editing. I’m currently an OJT gaining hands-on experience in the tech field 
        and am actively looking for a full-time opportunity where I can apply my skills, 
        grow as a developer, and contribute to meaningful projects.
      </p>
    </div>
  );
}