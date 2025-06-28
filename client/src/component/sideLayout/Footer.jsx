import { Link } from "react-router-dom";

export default function Footer() {
  const sections = {
    Product: [
      { label: "Features", to: "/features" },
      { label: "Integrations", to: "/integrations" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
    ],
    Company: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
    Developers: [
      { label: "Developer API", to: "/api" },
      { label: "Documentation", to: "/docs" },
      { label: "Guides", to: "/guides" },
    ],
  };

  return (
    <footer className="bg-gray-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-10">
        {/* Logo */}
        <div className="flex-shrink-0 mr-10">
          <h2 className="text-3xl font-bold font-serif mb-6">Codeup</h2>
        </div>

        {/* Footer Sections + Social */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-8 flex-1">
          {Object.entries(sections).map(([title, links]) => (
            <div key={title} className="flex-1 min-w-[150px]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">{title}</h3>
              <ul>
                {links.map(({ label, to }, idx) => (
                  <li key={idx}>
                    <Link
                      to={to}
                      className="text-gray-400 hover:text-white block py-1 text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Text Links */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white block py-1 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white block py-1 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 Codeup. All rights reserved.
      </div>
    </footer>
  );
}
