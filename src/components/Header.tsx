const NAV_LINKS = [
  { label: 'Theses', href: '#theses' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="border-b border-navy-700">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="/" className="font-serif text-xl font-semibold tracking-tight text-gray-100">
          Pedro Sampaio
        </a>
        <nav className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
