<template>
  <form id="form">
    <form-field label="Email">
      <!-- TODO validate -->
      <input class="input" placeholder="Email input">

    </form-field>

    <form-field label="Phone number">
      <!-- TODO validate -->
      <input class="input" placeholder="10 digits">

    </form-field>

    <form-field label="Quantity">
      <!-- TODO create custom select -->
      <form-select :options="quantityOptions" />
    </form-field>

    <form-field label="Colors">
      <p>Each printer can only print one color,
        choose it/them:</p>
      <form-select :options="colorOptions" />
    </form-field>

    <button type="submit" class="button is-link">
      <!-- TODO set dynamic price depending on quantity -->
      Buy for ${{ price }}
    </button>
  </form>
</template>

<script>
import FormField from './FormField'
import FormSelect from './FormSelect'

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

export default {
  components: {
    FormField,
    FormSelect,
  },

  data () {
    return {
      quantityOptions,
      colorOptions,
      price: 9.99
    }
  }
}
</script>

<style scoped>
.select {
  margin-right: 10px;
}
</style>
