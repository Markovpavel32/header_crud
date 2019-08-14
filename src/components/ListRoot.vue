<template functional>
  <div class="flex flex-col">
    <div v-for="(card, index) in props.list" :key="index" class="flex flex-wrap border-2 m-2 bg-teal-100">
      <div class="w-1/5 text-green-400 border-b-2 p-2">{{ index + 1 }}</div>
      <div class="w-1/5 inline-block border-b-2 p-2">{{card.title}}</div>
      <div class="inline-block w-3/5 flex flex-wrap border-b-2 p-2">
        <div class="w-1/3 inline-block pb-2" v-for="paragraph in card.attributes" :key="paragraph">
          {{ paragraph }}
        </div>
      </div>
      <div class="p-4">{{ card.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-root',
  functional: true
}
</script>

<style scoped>

</style>
