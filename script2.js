export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E") {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //   result = result + 1
      //   result += 1
      result++
    }
  }
  return result
}
