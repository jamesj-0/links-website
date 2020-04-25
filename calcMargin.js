function calcMargin(arr) {
  let margin = 0
  switch (arr.length) {
    case 1:
      margin = '1.9rem'
      break
    case 2:
      margin = '1rem'
      break
    case 3:
      margin = '0.9rem'
      break
    case 4:
      margin = '0.7rem'
      break
    case 5:
      margin = '0.7rem'
      break
    case 6:
      margin = '0.4rem'
      break
  }
  return margin
}

export { calcMargin }
