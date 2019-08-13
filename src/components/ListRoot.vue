<template>
  <div>
    <div v-for="card in list" :key="card.title">
      {{card.title}}
      <div v-for="paragraph in card.attributes" :key="paragraph">
        {{ paragraph }}
      </div>
      {{ card.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-root',
  props: {
    list: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
