/* eslint-disable tailwindcss/no-custom-classname */
import './Loading.css'
export default function Loading() {
  return (
    <div className="flex flex-col text-blue-500">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster m-auto"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <p className="m-auto mt-5">Cargando...</p>
    </div>
    // <div classNameName="flex items-center justify-center p-8">
    //   <div classNameName="h-20 w-20 animate-spin rounded-full border-y-2 border-blue-500"></div>
    //   <p classNameName="ml-4 text-lg font-medium text-blue-500">Cargando...</p>
    // </div>
  )
}
