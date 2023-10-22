// Context
import { useMainContext } from '../context/MainContext'
// Constants
import { departmentList, usersRolesList } from '../components/Constants'
// Assets
import Logo from '../img/logo.png'
// Components
import { SingOutButton } from '../components/AuthButtons'

const buttonClassSelect = 'border-b-4 border-blue-500 text-gray-200'
const buttonClassHover =
  'border-b-4 border-transparent hover:text-gray-200 hover:border-blue-500 transition-colors duration-300'
export default function Nav() {
  const {
    department,
    setDepartment,
    userRole,
    setShowOffer,
    offerManagementNav,
    setOfferManagementNav
  } = useMainContext()

  let departments = []
  if (userRole && userRole !== usersRolesList.guest) {
    departments = Object.values(departmentList[userRole])
  }

  return (
    <nav className="p-4 text-white">
      <div className="mx-auto flex justify-around capitalize  text-gray-300">
        <img src={Logo} alt="Logo" className="flex h-10 w-20 object-cover" />

        <div className="mb-2 flex flex-wrap justify-center gap-y-2">
          {departments.map((item) => {
            const buttonClass =
              item === department ? buttonClassSelect : buttonClassHover

            return (
              <button
                key={item}
                className={`${buttonClass} mx-4`}
                onClick={() => {
                  setOfferManagementNav(false)
                  setDepartment(item)
                  setShowOffer(false)
                }}
              >
                {item}
              </button>
            )
          })}
          {userRole === usersRolesList.admin && (
            <button
              className={
                department === departmentList.GestionNav.endOffers ||
                department === departmentList.GestionNav.deletedOffers
                  ? `${buttonClassSelect}  mx-4`
                  : `${buttonClassHover} mx-4`
              }
              onClick={() => {
                setOfferManagementNav(true)
                setDepartment(departmentList.GestionNav.endOffers)
                setShowOffer(false)
              }}
            >
              Finalizado
            </button>
          )}
        </div>
        <SingOutButton />
      </div>
      {offerManagementNav && (
        <div className="flex justify-center text-orange-500">
          {userRole === usersRolesList.admin && (
            <nav className="flex gap-5">
              {Object.values(departmentList.GestionNav).map((item) => (
                <button
                  key={item}
                  className={
                    item === department
                      ? 'rounded bg-orange-900/80 p-1 text-gray-200'
                      : 'rounded p-1 transition-colors duration-300 hover:bg-orange-900 hover:text-gray-200'
                  }
                  value={item}
                  type="button"
                  onClick={() => {
                    setDepartment(item)
                    setShowOffer(false)
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      )}
    </nav>
  )
}
