import { SingInButton } from '../components/AuthButtons'
import Logo from '../img/logo.png'
export default function Welcome() {
  return (
    <div className="mx-auto mt-6 max-w-4xl text-center">
      <img src={Logo} alt="Logo" className="mx-auto w-40" />

      <h1 className="text-3xl font-bold text-blue-500">
        Bienvenido al portal interno de Producción Abbe
      </h1>

      <p className="mt-5 text-gray-200">
        Este sitio es exclusivo para nuestro equipo de trabajo.
      </p>

      <p className="mt-5 text-gray-200">
        Para poder acceder a la información confidencial de la empresa y
        herramientas internas, por favor inicia sesión con tus credenciales de
        empleado.
      </p>

      <p className="my-5 text-gray-200">
        Recuerda que este sitio y sus contenidos son privados y confidenciales.
      </p>

      <SingInButton />

      <p className="mt-5 font-bold text-blue-500">
        ¡Que tengas un excelente día de trabajo!
      </p>
    </div>
  )
}
