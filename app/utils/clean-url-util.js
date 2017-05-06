export default function cleanUrlUtil(string) {
  string += '';
  return string.toLowerCase().replace(/ /g, '-')
}
