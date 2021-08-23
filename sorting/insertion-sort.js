function insertionSort(array) {
  for (let j = 1; j < array.length; j++) {
    key = array[j]
    i = j - 1
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      i -= 1
    }
    array[i + 1] = key
  }
  return array
}