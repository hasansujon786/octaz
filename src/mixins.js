export const formatNum = {
  computed: {
    formatNumber() {
      // console.log('format number called')
      return (num, now) => {
        let arr, int, val

        arr = Math.abs(num).toFixed(2).split('.')
        int = arr[0]
        if (int.length > 3) {
          int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, 3)}`
        }
        val = ` ${int}.${arr[1]}`
        if (now) { return (num > 0 ? '+' : '-') + val }
        return val
      }
    }
  }
}
