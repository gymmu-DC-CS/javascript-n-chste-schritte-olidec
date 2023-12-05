// export function aufgabe01(args) {
//   const input = args
//   const result = []

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement != "e" && currentElement != "E") {
//       result.push(currentElement)
//     }
//   }
//   return result.join("")
// }

export function zeichenZuZahl(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt() === 69 ||
      currentElement.charCodeAt() === 101
    ) {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe01(args) {
  const input = args
  return input.replaceAll("E", "").replaceAll("e", "")
}

export function aufgabe02(args) {
  // const input = args
  // const result = input.toUpperCase()
  // return result
  return args.toUpperCase()
}

// export function aufgabe03(args) {
//   const input = args
//   let result = 0

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement != "e" && currentElement != "E") {
//       result++
//     }
//   }
//   return input.length - result
// }

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }
  return result
}

// export function aufgabe03(args) {
//   const input = args
//   let result = 0

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement === "e") {
//       result++
//     }
//     if (currentElement === "E") {
//       result++
//     }
//   }
//   return result
// }

export function aufgabe04(args) {
  const input = args
  let result = 0
  if (input === "" || input === " ") {
    return 0
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " && input[i - 1] != "-") {
      result++
    }
  }
  return result + 1
}

export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}

export function aufgabe06(args) {
  const input = args
  if (input === "") {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].toLowerCase()
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32) {
        return true
      }
    }
  }
  return false
}

export function aufgabe07(args) {
  const input = args
  if (
    (input.indexOf(" und ") != -1 && input.indexOf("Und") != 0) ||
    input.indexOf("Und") === 0 ||
    input === "und"
  )
    return true
  else return false
}

// export function aufgabe08(args) {
//   const input = args
//   const result = []

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement === "e") {
//       result.push(3)
//     } else result.push(currentElement)
//   }
//   return result.join("")
// }

export function aufgabe08(args) {
  return args.replaceAll("e", 3)
}

export function aufgabe09(args) {
  const input = args
  if (input.length === 6) return true
  else return false
}

export function aufgabe10(args) {
  const input = args.toUpperCase()
  let result = true
  if (input.length != 7) result = false
  if (input[0] != "#") result = false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement != 1 &&
      currentElement != 2 &&
      currentElement != 3 &&
      currentElement != 4 &&
      currentElement != 5 &&
      currentElement != 6 &&
      currentElement != 7 &&
      currentElement != 8 &&
      currentElement != 9 &&
      currentElement != 0 &&
      currentElement != "A" &&
      currentElement != "B" &&
      currentElement != "C" &&
      currentElement != "D" &&
      currentElement != "E" &&
      currentElement != "F"
    )
      result = false
  }
  return result
}

export function aufgabe11(args) {
  const input = args
  let result = ""
  if (input.length > 1 || input === "") {
    result = null
  } else {
    result = input.charCodeAt()
  }
  return result
}
