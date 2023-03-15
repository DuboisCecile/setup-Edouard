// string date example: '18/08/2022 18:18'
const convertStringDate = dateString => {
  const [shortDate, shortTime] = dateString.split(' ')
  const [days, months, years] = shortDate.split('/')
  const [hours, minutes] = shortTime.split(':')
  return `${years}-${months}-${days}T${hours}:${minutes}`
}
