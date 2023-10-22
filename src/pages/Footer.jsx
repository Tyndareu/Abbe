export default function Footer() {
  const currentYear = new Date().getFullYear()
  const email = 'flmatamoros@gmail.com'
  const domain = 'https://www.abbe.es'

  return (
    <p className="mb-5 text-center text-xs text-gray-600">
      © {currentYear}{' '}
      <a
        className="transition-colors duration-300 hover:text-orange-900"
        href={domain}
        target="_blank"
        rel="noopener noreferrer"
      >
        Abbe.es
      </a>
      . All rights reserved. | Diseño web por{' '}
      <a
        className="transition-colors duration-300 hover:text-orange-900"
        href={`mailto:${email}`}
      >
        {email}
      </a>{' '}
      - La clave del éxito en línea: diseño web a medida.
    </p>
  )
}
