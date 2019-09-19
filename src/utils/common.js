
const common = {
  // weui的时间3数组转yyyy-mm-dd
  turnDatePicker(arr) {
    let year = arr[0] + ''
    let month = arr[1] < 10 ? '0' + arr[1] : arr[1]
    let day = arr[2] < 10 ? '0' + arr[2] : arr[2]
    return `${year}-${month}-${day}`
  },

  // 验证年龄是否符合范围
  validateAgeRange(min, minFlag, max, maxFlag, birth) {
    let maxBirth = minFlag == 'D' ? this.getDateBeforeNDays(min) : this.getDateBeforeNYear(min)
    let minBirth = maxFlag == 'D' ? this.getDateBeforeNDays(max) : this.getDateBeforeNYear(max)
    
    console.log('被保人生日应该在',minBirth,'之后')
    console.log('被保人生日应该在',maxBirth,'之前')
    console.log('而被保人生日是',birth)
    // console.log(minDate, birth, maxDate)
    return this.isDuringDate(minBirth, maxBirth,  birth)
  },
  // 获取年龄
  getAge(birth) {
    var birthArr = birth.split("-");
    var d = new Date();
    var yearDiff = d.getFullYear() - birthArr[0];
    var monthDiff = d.getMonth() + 1 - birthArr[1];
    var dayDiff = d.getDate() - birthArr[2];
    var age = monthDiff < 0 || (monthDiff == 0 && dayDiff < 0) ? yearDiff - 1 : yearDiff; //判断有没有到生日,没到就减1
    return age = age < 0 ? 0 : age;
  },
  // 获取N天之前的日期
  getDateBeforeNDays(dayNumber) {
    let today = new Date()
    let date = new Date(today.valueOf() - dayNumber * 24 * 60 * 60 * 1000)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  },
  // 获取N年前的日期
  getDateBeforeNYear(yearNumber) {
    let today = new Date()
    return `${today.getFullYear() - yearNumber}-${today.getMonth() + 1}-${today.getDate()}`
  },
  // 判断一个日期是否在指定范围内
  isDuringDate(begin, end, birth) {
    birth = new Date(birth.replace(/-/g, '/'))
    begin = new Date(begin.replace(/-/g, '/'))
    end = new Date(end.replace(/-/g, '/'))
    return (birth >= begin && birth <= end)
  }
}

export default common
