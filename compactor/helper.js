function isWhitespace(char) {
  switch (char) {
    case " ":
    case "\n":
    case "\r":
    case "\t":
      return true;
  }

  return false;
}

function isAlpha(char) {
  switch (char) {
    case "e":
    case "t":
    case "a":
    case "o":
    case "i":
    case "n":
    case "s":
    case "h":
    case "r":
    case "d":
    case "l":
    case "c":
    case "u":
    case "m":
    case "w":
    case "f":
    case "g":
    case "y":
    case "p":
    case "b":
    case "v":
    case "k":
    case "x":
    case "j":
    case "q":
    case "z":
    case "E":
    case "T":
    case "A":
    case "O":
    case "I":
    case "N":
    case "S":
    case "H":
    case "R":
    case "D":
    case "L":
    case "C":
    case "U":
    case "M":
    case "W":
    case "F":
    case "G":
    case "Y":
    case "P":
    case "B":
    case "V":
    case "K":
    case "X":
    case "J":
    case "Q":
    case "Z":
    case "_":
    case "$":
      return true;
  }

  return false;
}

function isReserved(keyword) {
  switch (keyword) {
    case "globalThis":
    case "Infinity":
    case "NaN":
    case "undefined":
      return true;
  }

  return false;
}
