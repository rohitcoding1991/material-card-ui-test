import ThemeSwitcher from "@/components/ThemeSwitcher";

export const Navbar = () => {
  return (
    <nav className="w-full px-4 md:px-6 lg:px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Material Design
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
