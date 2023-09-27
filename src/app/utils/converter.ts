/**
 * Convert special characters
 * @param str
 * @returns string
 */
function decode(str: string) {
  const txt = new DOMParser().parseFromString(str, 'text/html')

  return txt.documentElement.textContent
}

export default decode
