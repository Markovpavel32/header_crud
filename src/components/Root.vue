<template>
    <div class="container mx-auto px-4">
      <main-header
        @add_first="add_first"
        @add_last="add_last"
        @delete_first="delete_first"
        @delete_last="delete_last"
      ></main-header>
      <list-root :list="list"></list-root>
      <main-footer></main-footer>
    </div>
</template>

<script>
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import response from '../assets/js/data'
import ListRoot from './ListRoot'
export default {
  name: 'main-page',
  components: { ListRoot, MainHeader, MainFooter },
  data () {
    let list = [...response.data]
    return {
      list
    }
  },
  methods: {
    add_first () {
      this.list.unshift(this.list[0])
    },
    add_last () {
      this.list.push(this.list[this.list.length - 1])
    },
    delete_first () {
      this.list.shift()
    },
    delete_last () {
      this.list.pop()
    }
  }
}
</script>
