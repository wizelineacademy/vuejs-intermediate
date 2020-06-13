<template>
  <div class="min-h-screen">
    <form class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8">
      <div class="relative border rounded mb-4 shadow appearance-none label-floating">
        <input
          class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
          id="email"
          type="email"
          placeholder="Email"
        />
        <label
          class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
          for="email"
        >
          Email
        </label>
      </div>
      <div class="relative border rounded mb-4 shadow appearance-none label-floating">
        <input
          class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
          id="phone"
          type="phone"
          placeholder="Phone"
        />
        <label
          class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
          for="phone"
        >
          Phone
        </label>
      </div>
      <div class="relative border rounded mb-4 shadow appearance-none label-floating">
        <select class="w-full py-2 px-3 text-gray-700 leading-normal rounded" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label
          class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
          for="quantity"
        >
          Quantity (max 3)
        </label>
      </div>

      <div class="flex justify-between">
        <div class="relative border rounded mb-4 shadow appearance-none label-floating">
          <select class="w-full py-2 px-3 text-gray-700 leading-normal rounded" id="quantity">
            <option value="black">Black</option>
            <option value="cyan">Cyan</option>
            <option value="yellow">Yellow</option>
            <option value="magenta">Magenta</option>
          </select>
          <label
            class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
            for="quantity"
          >
            Color #1
          </label>
        </div>

        <div class="relative border rounded mb-4 shadow appearance-none label-floating">
          <select class="w-full py-2 px-3 text-gray-700 leading-normal rounded" id="quantity">
            <option value="black">Black</option>
            <option value="cyan">Cyan</option>
            <option value="yellow">Yellow</option>
            <option value="magenta">Magenta</option>
          </select>
          <label
            class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
            for="quantity"
          >
            Color #2
          </label>
        </div>

        <div class="relative border rounded mb-4 shadow appearance-none label-floating">
          <select class="w-full py-2 px-3 text-gray-700 leading-normal rounded" id="quantity">
            <option value="black">Black</option>
            <option value="cyan">Cyan</option>
            <option value="yellow">Yellow</option>
            <option value="magenta">Magenta</option>
          </select>
          <label
            class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
            for="quantity"
          >
            Color #3
          </label>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button class="w-full bg-black hover:bg-black text-white py-2 px-4" type="submit">
          Buy
        </button>
      </div>
    </form>
  </div>
</template>
