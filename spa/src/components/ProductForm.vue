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
      <!-- <form-select /> -->
    </form-field>

    <form-field label="Colors">
      <p>Each printer can only print one color,
        choose it/them:</p>
      <!-- <form-select /> -->
    </form-field>

    <button type="submit" class="button is-link">
      <!-- TODO set dynamic price depending on quantity -->
      Buy for $9.99
    </button>
  </form>
</template>

<script>
import FormField from './FormField'
import FormSelect from './FormSelect'

export default {
  components: {
    FormField,
    FormSelect
  },

  data () {
    return {
    }
  }
}
</script>
