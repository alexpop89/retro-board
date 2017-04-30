export default function cleanUrlUtil(string) {
  return string.toLowerCase().replace(/ /g, '-')
}
