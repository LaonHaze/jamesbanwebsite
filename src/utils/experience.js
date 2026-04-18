export function getYearsExperience() {
  const start = new Date(2019, 10)
  const now = new Date()
  return Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365.25))
}
