<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">

      <slot />

    </div>
    <p v-if="error" class="help is-danger">{{error}}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>
