import { signInWithGoogle, signOutUser } from '../firebase/Api'

export const SingInButton = () => {
  return (
    <button
      onClick={signInWithGoogle}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
    >
      Iniciar Sesión
    </button>
  )
}

export const SingOutButton = () => {
  return (
    <button
      className="max-h-14 w-28 rounded border border-gray-500 bg-transparent p-1 font-semibold text-gray-500 transition-colors duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white"
      onClick={signOutUser}
    >
      Cerrar Sesión
    </button>
  )
}
