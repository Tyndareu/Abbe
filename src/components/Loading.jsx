export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="size-20 animate-spin rounded-full border-y-2 border-blue-500"></div>
      <p className="ml-4 text-lg font-medium text-blue-500">Cargando...</p>
    </div>
  )
}
