import Logo from '../img/logo.png'
import { SingOutButton, SingInButton } from '../components/AuthButtons'
export default function UnauthorizedUser() {
  return (
    <div className="mx-auto mt-6 max-w-4xl text-center">
      <img src={Logo} alt="Logo" className="mx-auto w-40" />

      <h1 className="text-2xl font-bold text-blue-500">
        Bienvenido a Producción Abbe
      </h1>

      <p className="mt-5 text-gray-200">
        Lo sentimos, el usuario que ha iniciado sesión no cuenta con los
        permisos necesarios para acceder a esta aplicación.
      </p>

      <p className="mt-3 text-gray-200">
        Este sistema es de uso exclusivo para personal autorizado.
      </p>

      <p className="mt-3 text-gray-200">
        Por favor, contacta a tu supervisor o al departamento de sistemas para
        solicitar acceso.
      </p>
      <div className="mt-5 flex justify-center gap-4">
        <SingOutButton />
        <SingInButton />
      </div>
    </div>
  )
}
