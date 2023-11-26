<script setup lang="ts">
import type { Gender, Popularity, Length } from '@/data'
import { names } from '@/data'

// vanilla javascript script : yang memiliki banyak masalah, seperti jika kita ganti gender dengan selain yang ada maka itu akan jalan juga contoh jika options.gender yang harusnya hanya unisex, girl, and boy tapi bisa diganti dengan yang lain dan program nya masih jalan ini yang menjadi masalah, jadi harus di refactor di typescript yang membatasi itu menggunakan typesript union
// const options = reactive({
//   gender: "Unisex",
//   popularity: "Unique",
//   length: "Long"
// })

// cara 1
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


const selectedNames = ref<string[]>([])

// names.value.push("testing")
// names.value.push(3)

const computeSelectedNames = () => {
  const filterNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === "All") return true
      else return name.length === options.length
    })
  selectedNames.value = filterNames.map(name => name.name)
};

const optionsArray = [
  {
    title: "1) Choose a gender",
    category: "gender",
    buttons: ["Boy", "Unisex", "Girl"] as Gender[]
  },
  {
    title: "2) Choose the name's popularity",
    category: "popularity",
    buttons: ["Trendy", "Unique"] as Popularity[]
  },

  {
    title: "3) Choose name's length",
    category: "length",
    buttons: ["Long", "All", "Short"] as Length[]
  }
]
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
      <Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />
      <button class="primary" @click="computeSelectedNames">Find Names</button>
    </div>
    <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        <h4>{{ name }}</h4>
        <p>x</p>
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


.primary {
  background-color: red;
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card {
  background-color: red;
  width: 26%;
  color: white;
  border-radius: 1rem;
  padding: .1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -23%;
  left: 92.5%;
  cursor: pointer;
  color: dark;
}
</style>
