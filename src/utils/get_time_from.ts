
export default (date: Date) => {
  date = new Date(date)

  return date.toLocaleTimeString()
}
