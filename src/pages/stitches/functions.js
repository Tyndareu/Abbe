// Stitches
export function calculateTimePerEmbroidery({ stitches, speed, seconds, cuts }) {
  const totalTimeInSeconds = (stitches / speed) * 60 + seconds * cuts
  const formattedTime = formatTime(totalTimeInSeconds)
  return formattedTime
}
export function calculateTotalTime(inputs) {
  const totalTimeInSeconds =
    (inputs.stitches / inputs.speed) * 60 + inputs.seconds * inputs.cuts
  const totalTimeWithItems = totalTimeInSeconds * inputs.garments
  const formattedTime = formatTime(totalTimeWithItems)
  return formattedTime
}
function formatTime(totalTimeInSeconds) {
  const days = Math.floor(totalTimeInSeconds / 86400)
  const hours = Math.floor((totalTimeInSeconds % 86400) / 3600)
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60)
  const seconds = Math.floor(totalTimeInSeconds % 60)

  const formattedDays = String(days).padStart(2, '0')
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  if (days > 0) {
    return `${formattedDays}d ${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  } else {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
}

export function calculateEmbroideryPerHour(inputs) {
  return (
    3600 /
    ((inputs.stitches / inputs.speed) * 60 + inputs.seconds * inputs.cuts)
  ).toFixed(2)
}

export function calculateEmbroideryPrice(inputs) {
  return (
    (inputs.price / 3600) *
    ((inputs.stitches / inputs.speed) * 60 + inputs.seconds * inputs.cuts)
  ).toFixed(2)
}

export function calculateTotalPrice(inputs) {
  return (
    (inputs.price / 3600) *
    ((inputs.stitches / inputs.speed) * 60 + inputs.seconds * inputs.cuts) *
    inputs.garments
  ).toFixed(2)
}
