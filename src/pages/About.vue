<template>
  <div>
    <nav
      class="font-sans bg-white text-center flex justify-between
        items-center my-4 mx-auto container overflow-hidden pl-3 pr-3"
    >
      <a href="#">
        <span class="font-black text-2xl">1D Printer</span>
      </a>
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >Printer</a
          >
        </li>
        <li>
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >Colors</a
          >
        </li>
        <li>
          <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >Testimonials</a
          >
        </li>
      </ul>
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
            Buy
          </button>
        </li>
      </ul>
    </nav>
    <section class="font-sans flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <img src="../assets/img/1DPrinter.jpg" alt="" />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-8">
        <h1 class="my-4 font-normal">App Features</h1>
        <p class="leading-normal mb-4 w-2/3 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    <section
      class="my-8 font-sans container max-w-xl m-auto flex flex-col
        lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div class="w-full lg:w-1/2">
        <img src="../assets/img/black-toner.jpg" alt="" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold"
          >best app ever</label
        >
        <h1 class="my-4 font-normal">Our Work Flow</h1>
        <p class="leading-normal mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
    <section
      class="my-8 pt-8 font-sans container max-w-xl m-auto flex
        flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold"
          >best app ever</label
        >
        <h1 class="my-4 font-normal">Our Work Flow</h1>
        <p class="leading-normal mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="w-full lg:w-1/2">
        <img src="../assets/img/cyan-toner.jpg" alt="" />
      </div>
    </section>
    <section
      class="my-8 font-sans container max-w-xl m-auto flex flex-col
        lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div class="w-full lg:w-1/2">
        <img src="../assets/img/magenta-toner.jpg" alt="" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold"
          >best app ever</label
        >
        <h1 class="my-4 font-normal">Our Work Flow</h1>
        <p class="leading-normal mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
    <section
      class="my-8 pt-8 font-sans container max-w-xl m-auto flex
        flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold"
          >best app ever</label
        >
        <h1 class="my-4 font-normal">Our Work Flow</h1>
        <p class="leading-normal mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="w-full lg:w-1/2">
        <img src="../assets/img/yellow-toner.jpg" alt="" />
      </div>
    </section>

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
        <button class="w-full bg-black hover:bg-black text-white py-2 px-4" type="button">
          Buy
        </button>
      </div>
    </form>

    <section class="font-sans container m-auto text-center py-8">
      <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700"
        >Various Aspects</label
      >
      <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">Those are important in Vanue Management</h1>
      <hr class="border-b w-8 m-auto my-6" />
      <div class="flex flex-wrap justify-between items-start">
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <img
            class="w-14 h-14 rounded-full mr-4 bg-gray-300"
            src="https://placekitten.com/150/150"
            alt=""
          />
          <h2 class="my-4 font-medium">Cras ornare tristique elit.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
            Aenean dignissim pellentesque felis.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <img
            class="w-14 h-14 rounded-full mr-4 bg-gray-300"
            src="https://placekitten.com/150/150"
            alt=""
          />
          <h2 class="my-4 font-medium">Vivamus vestibulum ntulla nec ante.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <img
            class="w-14 h-14 rounded-full mr-4 bg-gray-300"
            src="https://placekitten.com/150/150"
            alt=""
          />
          <h2 class="my-4 font-medium">Praesent placerat risus quis eros.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
            ultricies in, diam. Sed arcu. Cras consequat.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <img
            class="w-14 h-14 rounded-full mr-4 bg-gray-300"
            src="https://placekitten.com/150/150"
            alt=""
          />
          <h2 class="my-4 font-medium">Fusce pellentesque suscipit nibh.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate
            magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus.
          </p>
        </div>
      </div>
    </section>
    <footer class="font-sans bg-black text-white py-8 px-4">
      <div class="mx-auto max-w-xl overflow-hidden flex justify-between items-center">
        <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
          <li>
            <a href="/" class="block mr-4 w-32">
              <span class="font-black text-white text-2xl pl-2">1D Printer</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
              >Product</a
            >
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
              >Company</a
            >
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
              >FAQs</a
            >
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
              >About</a
            >
          </li>
        </ul>
        <p class="inline-block py-2 px-3 text-gray-700 text-xs">
          ©2020 1D Printer
        </p>
      </div>
    </footer>
  </div>
</template>
