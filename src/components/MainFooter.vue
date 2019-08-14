<template>
    <div class="m-2 bg-gray-100 border-2 p-2 ">
      <h2 class="p-1">{{ 'Добавить новый объект'}}</h2>
      <label class="p-1">{{'Заголовок*'}}<input v-model="model.title" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /></label>
      <i class="fas fa-plus-circle cursor-pointer" v-tooltip="'Добавить еще'" @click="attr_num++"></i><label  class="p-1">{{'Добавить пункт'}}</label>
      <div v-for="i in attr_num" :key="i">
        <input v-model="model.attributes[i - 1]" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <label class="p-1">{{'Описание'}}<input v-model="model.description" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /></label>
      <button @click="add_object" class="my-4 bg-green-500 text-white font-bold py-2 px-4 border">{{ 'Добавить' }}</button>
    </div>
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {
      attr_num: 1,
      model: {
        title: '',
        attributes: [],
        description: ''
      }
    }
  },
  methods: {
    add_object () {
      this.$emit('add_object', this.model)
      this.model = {
        title: '',
        attributes: [],
        description: ''
      }
    }
  }
}
</script>
