const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  validateEmail: email => {
    if (!email) {
      return 'This field is required'
    }
    return emailRegex.test(email) ? '' : 'Not a valid email'
  },
  validatePhone: phone => {
    if (!phone) {
      return 'This field is required'
    }
    if (phone.match(/\D/g)) {
      return 'Should have only digits'
    }
    return phone.length === 10 ? '' : 'Should be 10 digits'
  }
}
