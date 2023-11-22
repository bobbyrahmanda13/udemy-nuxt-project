<script setup lang="ts">

// vanilla javascript script : yang memiliki banyak masalah, sepert jika kita ganti gender dengan selain yang ada maka itu akan jalan juga contoh jika options.gender yang harusnya hanya unisex, girl, and boy tapi bisa diganti dengan yang lain dan program nya masih jalan ini yang menjadi masalah, jadi harus di refactor di typescript yang membatasi itu menggunakan typesript union
// const options = reactive({
//   gender: "Unisex",
//   popularity: "Unique",
//   length: "Long"
// })

// cara 1
type Gender = "Boy" | "Unisex" | "Girl"
type Popularity = "Trendy" | "Unique"
type Length = "Long" | "All" | "Short"

type OptionsState = {
  gender: Gender
  popularity: Popularity
  length: Length
}
const options = reactive<OptionsState>({
  gender: "Boy",
  popularity: "Unique",
  length: "All"
})

// cara 2
// enum Gender {
//   BOY = 'Boy',
//   UNISEX = 'Unisex',
//   GIRL = 'Girl'
// }
//
// enum Popularity {
//   TRENDY = 'Trendy',
//   UNIQUE = 'Unique',
// }
// enum Length {
//   LONG = 'Long',
//   ALL = 'All',
//   SHORT = 'Short'
// }
//
// interface OptionsState {
//   gender: Gender
//   popularity: Popularity
//   length: Length
// }
//
// const options = reactive<OptionsState>({
//   gender: Gender.BOY,
//   popularity: Popularity.TRENDY,
//   length: Length.ALL
// })

</script>

<template>
  <div class="container content-grid">
    <!-- <NuxtWelcome /> -->
    <h1>Baby Name Generator</h1>
    <p class="breakout">Choose your options and click the "Find Names" button below</p>
    <!-- <div class="full-width bg-darkslateblue"> -->
    <!--   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente laborum blanditiis distinctio nesciunt -->
    <!--     eaque corrupti ipsum, assumenda laudantium ex necessitatibus molestiae sunt perferendis ut provident? Sunt ipsum -->
    <!--     eum dolorum ut nemo animi veniam debitis libero voluptatum deserunt repellat labore, aut dolores assumenda -->
    <!--     repellendus perspiciatis, non itaque. Repellat, ipsum illo deleniti beatae odit cumque consequatur alias corrupti -->
    <!--     asperiores porro voluptatem praesentium pariatur fugit facere esse ratione. Quos incidunt tenetur repellat, -->
    <!--     officia tempora quam omnis quibusdam fugiat! Veniam cum consequatur et exercitationem consectetur quasi officia -->
    <!--     dolore? Architecto sunt magni facere nihil sit, nulla odio blanditiis excepturi mollitia temporibus laudantium hic -->
    <!--     incidunt.</p> -->
    <!-- </div> -->
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option option-left" :class="options.gender === 'Boy' && 'option-active'">Boy</button>
          <button class="option" :class="options.gender === 'Unisex' && 'option-active'">Unisex</button>
          <button class="option option-right" :class="options.gender === 'Girl' && 'option-active'">Girl</button>
        </div>
        <div class="option-container">
          <h4>2) Choose the name's popularity</h4>
          <div class="option-buttons">
            <button class="option option-left" :class="options.popularity === 'Trendy' && 'option-active'">Trendy</button>
            <button class="option option-right"
              :class="options.popularity === 'Unique' && 'option-active'">Unique</button>
          </div>
          <div class="option-container">
            <h4>3) Choose name' length</h4>
            <div class="option-buttons">
              <button class="option option-left" :class="options.length === 'Long' && 'option-active'">Long</button>
              <button class="option" :class="options.length === 'All' && 'option-active'">All</button>
              <button class="option option-right" :class="options.length === 'Short' && 'option-active'">Short</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  color-scheme: dark;
}

.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  /* color: rgb(27, 60, 138); */
}

.content-grid {
  --padding-inline: 2rem;
  --content-max-width: 70ch;
  --breakout-max-width: 85ch;


  --breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr) [breakout-start] minmax(0, var(--breakout-size)) [content-start] min(100% - (var(--padding-inline)*2), var(--content-max-width)) [content-end] minmax(0, var(--breakout-size)) [breakout-end] minmax(var(--padding-inline), 1fr) [full-width-end];
}

.content-grid>:not(.breakout, .full-width),
.full-width> :not(.breakout, .full-width) {
  grid-column: content;
}

.content-grid>.breakout {
  grid-column: breakout;
}

.content-grid>.full-width {
  grid-column: full-width;
  display: grid;
  grid-template: inherit;
}

.bg-darkslateblue {
  background-color: darkslateblue;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: #18181b;
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid red;
  border: none;
  padding: 0.75rem;
  width: 10rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  font-weight: 200;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: red;
  color: white;
}
</style>
