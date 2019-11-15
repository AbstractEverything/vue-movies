export default {
  arrayAppend(key, value) {
    let item = localStorage.getItem(key)
    item = item ? JSON.parse(item) : []

    if ( ! item.includes(value)) {
      item.push(value)
      localStorage.setItem(key, JSON.stringify(item))
    }
  },
  arrayGet(key) {
    let item = localStorage.getItem(key)

    return item ? JSON.parse(item) : []
  },
}