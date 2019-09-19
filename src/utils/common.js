
const common = {
  // weui的时间3数组转yyyy-mm-dd
  turnDatePicker (arr) {
    let year = arr[0] + ''
    let month = arr[1] < 10 ? '0' + arr[1]:arr[1]
    let day = arr[2] < 10 ? '0' + arr[2]:arr[2]
    return `${year}-${month}-${day}`
  }
}

export default common
