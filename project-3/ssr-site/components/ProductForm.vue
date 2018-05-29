<template>
  <form id="form" @submit.prevent="submitForm">
    <form-field label="Email" :error="errors.email">

      <input class="input"
        placeholder="Email input"
        v-model="email">

    </form-field>

    <form-field label="Phone number" :error="errors.phone">

      <input class="input"
        placeholder="10 digits"
        v-model="phone">

    </form-field>

    <form-field label="Quantity">
      <quantity-select v-model="quantity" :options="quantityOptions" />
    </form-field>

    <form-field label="Colors">
      <p>Each printer can only print one color,
        choose {{quantity > 1 ? 'them' : 'it'}}:</p>
      <quantity-select
        v-for="(color, index) in colors"
        :key="index"
        @input="value => updateColor(index, value)"
        :value="color"
        :options="colorOptions" />
    </form-field>

    <button type="submit" class="button is-link">
      Buy for ${{quantity*price | toMoney}}
    </button>
  </form>
</template>

<script>
import validation from '../utils/validation'
import FormField from './FormField'
import QuantitySelect from './QuantitySelect'

const quantityOptions = [
  {value: 1, label: 'Buy 1'},
  {value: 2, label: 'Buy 2'},
  {value: 3, label: 'Buy 3'}
]
const colorOptions = [
  {value: 'black', label: 'Black'},
  {value: 'cyan', label: 'Cyan'},
  {value: 'magenta', label: 'Magenta'},
  {value: 'yellow', label: 'Yellow'}
]

const defaultColor = colorOptions[0].value

export default {
  components: {
    FormField,
    QuantitySelect
  },

  data () {
    return {
      email: '',
      phone: '',
      quantity: 1,
      colors: [defaultColor],
      price: 9.9999999,
      quantityOptions,
      colorOptions,
      shouldValidate: false
    }
  },

  filters: {
    toMoney (value) {
      return Math.floor(value * 100) / 100
    }
  },

  watch: {
    quantity () {
      while (this.colors.length < this.quantity) {
        this.colors.push(defaultColor)
      }

      while (this.colors.length > this.quantity) {
        this.colors.pop()
      }
    }
  },

  computed: {
    errors () {
      let messages = {}
      if (!this.shouldValidate) {
        return messages
      }

      messages.email = validation.validateEmail(this.email)
      messages.phone = validation.validatePhone(this.phone)

      return messages
    },
    formIsValid () {
      for (let field in this.errors) {
        if (this.errors[field]) {
          // message not empty
          return false
        }
      }
      // all messages were empty, form is valid
      return true
    },
    formData () {
      return {
        email: this.email,
        phone: this.phone,
        quantity: this.quantity,
        colors: this.colors
      }
    }
  },

  methods: {
    updateColor (index, value) {
      this.colors[index] = value
    },
    submitForm () {
      this.shouldValidate = true
      if (this.formIsValid) {
        console.info('sending:')
        console.info(this.formData)
        console.log('Submitted successfully!')
      }
    }
  }
}
</script>
