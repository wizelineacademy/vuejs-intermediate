<template>
  <div class="relative border rounded mb-4 shadow appearance-none label-floating">
    <input
      @input="emitChange"
      class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
      :id="fieldId"
      :type="type"
      :placeholder="placeholder"
    />
    <label
      class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
      :for="fieldId"
    >
      <span>{{ label }}</span> <span v-if="error" class="text-red-600">- {{ error }} </span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'fieldId', 'placeholder', 'value', 'error'],
  methods: {
    emitChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
