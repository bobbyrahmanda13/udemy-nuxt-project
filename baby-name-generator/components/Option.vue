<script setup lang="ts">
import type { Gender, Popularity, Length } from '@/data'

type OptionProps = {
  option: {
    title: string
    category: string
    buttons: Gender[] | Popularity[] | Length[]
  }
  options: {
    gender: Gender
    popularity: Popularity
    length: Length
  }
}

const props = defineProps<OptionProps>()

// solved 1 
// const setOptionValue = (value: Gender | Popularity | Length) => {
//   if (props.option.category === 'gender') {
//     props.options[props.option.category] = value as Gender;
//   } else if ((props.option.category === 'popularity')) {
//     props.options[props.option.category] = value as Popularity;
//   } else if ((props.option.category === 'length')) {
//     props.options[props.option.category] = value as Length;
//   }
// };

// solced 2
const setOptionValue = (value: Gender | Popularity | Length) => {
  switch (props.option.category) {
    case 'gender':
      props.options.gender = value as Gender;
      break;
    case 'popularity':
      props.options.popularity = value as Popularity;
      break;
    case 'length':
      props.options.length = value as Length;
      break;
  }
};

</script>
<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons">
      <button v-for="value in option.buttons" :key="value" class="option"
        :class="options[option.category as 'gender' | 'popularity' | 'length'] === value && 'option-active'" @click="setOptionValue(value)">{{ value
        }}</button>
    </div>
  </div>
</template>
<style scoped>
  
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
