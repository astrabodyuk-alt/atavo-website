export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ["Websites", "SEO", "Apps", "Automation"],
    Company: ["About", "Projects", "Pricing", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-[#111111] border-t border-[#202020]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#2283FF] flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-syne)" }}>A</span>
              </div>
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                ATAVO
              </span>
            </div>
            <p className="text-[#525252] text-sm leading-relaxed max-w-xs mb-6">
              We build digital experiences that convert. Modern websites, SEO, apps, and automation for UK businesses.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "ig"].map((s, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-xl bg-[#1c1c1c] border border-[#282828] flex items-center justify-center text-[#525252] hover:text-white hover:border-[#333333] cursor-pointer transition-all duration-200 text-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p
                className="text-white text-sm font-semibold mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-[#525252] hover:text-[#A0A0A0] text-sm cursor-pointer transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#202020] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#333333] text-sm">© {currentYear}</span>
            <span className="text-[#2283FF] text-sm font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
              atavo.co.uk
            </span>
          </div>
          <p className="text-[#333333] text-xs tracking-wide">
            Built by an entrepreneur like you
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#2283FF] animate-pulse" />
            <span className="text-[#333333] text-xs">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
