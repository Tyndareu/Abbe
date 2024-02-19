import { departmentList } from '../../components/Constants'

const getDepartmentText = (offer) => {
  const deps = Object.keys(offer.department)
    .filter((key) => offer.department[key])
    .map((key) => departmentList.Admin[key])

  return deps.join(' ')
}

const DepartmentsRow = ({ offer, onClick }) => {
  const noDepartments = !Object.values(offer.department).some((val) => val)
  const text = noDepartments ? 'Sin Departamento' : getDepartmentText(offer)

  return (
    <td
      className={` text-center ${
        noDepartments && 'bg-red-500 font-bold text-gray-200'
      }`}
      onClick={onClick}
    >
      {text}
    </td>
  )
}

export default DepartmentsRow
