<template>
  <div class="select">
    <select @change="onSelect">
      <option v-for="(option, index) in options"
        :key="index"
        :value="option.value">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onSelect (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
