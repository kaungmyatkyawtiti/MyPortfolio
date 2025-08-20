import { Sun } from 'lucide-react';

export default function ThemeToggle() {
  return (
    <button
      onClick={() => console.log("theme toggle")}
    >
      <Sun className="h-6 w-6 text-yellow-300" />
    </button>
  );
}
