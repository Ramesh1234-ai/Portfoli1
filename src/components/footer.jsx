export function footer() {
  return (
    <>
      <footer className="border-t border-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
              <Brain size={10} className="text-black" />
            </div>
            <span className="display-font font-bold text-sm text-zinc-400">
              NexusAI
            </span>
          </div>
          <p className="text-zinc-600 text-xs">· Built with ♥ by the Rishit</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
            >
              Terms
            </a>
            <a
              href="https://github.com/ramesh1234-ai/HeartSync"
              className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors flex items-center gap-1"
            >
              <Github size={12} /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
