<template>
    <div class="flex flex-wrap content-around flex-row">
        <button @click="$emit('add_first')" class="w-1/3 flex-auto m-2 bg-green-500 text-white font-bold py-2 px-4 border">
         {{ 'Добавить в начало' }}
        </button>
        <button @click="$emit('add_last')" class="w-1/3 flex-auto m-2 bg-green-500 text-white font-bold py-2 px-4 border">
          {{ 'Добавить в конец' }}
        </button>
        <button @click="$emit('delete_first')" class="w-1/3 flex-auto m-2 bg-green-500 text-white font-bold py-2 px-4 border">
          {{ 'Удалить первый' }}
        </button>
        <button @click="$emit('delete_last')" class="w-1/3 flex-auto m-2 bg-green-500 text-white font-bold py-2 px-4 border">
          {{ 'Удалить последний' }}
        </button>
    </div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped>

</style>
