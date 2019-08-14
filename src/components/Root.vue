<template>
    <div class="container mx-auto px-4 flex flex-col">
      <main-header class="w-full"
        @add_first="add_first"
        @add_last="add_last"
        @delete_first="delete_first"
        @delete_last="delete_last"
      ></main-header>
      <div class="m-2 p-3 border-b border-t">
        {{ 'Список объектов' }}
        <div class="float-right">
          <i @click="view_mode = 'list'" class="fas fa-th-list mx-2 cursor-pointer" v-tooltip="'список'"></i>
          <i @click="view_mode = 'gallary'" class="fas fa-th mx-2 cursor-pointer" v-tooltip="'галлерея'"></i>
        </div>
      </div>
      <list-root v-if="view_mode === 'list'" :list="list"></list-root>
      <gallary-root v-else :list="list"></gallary-root>
      <main-footer @add_object="add_object"></main-footer>
    </div>
</template>

<script>
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import response from '../assets/js/data'
import ListRoot from './ListRoot'
import GallaryRoot from './GallaryRoot'
export default {
  name: 'main-page',
  components: { GallaryRoot, ListRoot, MainHeader, MainFooter },
  data () {
    let list = [...response.data]
    return {
      list,
      view_mode: 'list'
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
    },
    add_object (model) {
      this.list.push(model)
    }
  }
}
</script>

<style lang="scss">
  .tooltip {
    display: block !important;
    z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
     margin-bottom: 5px;

  .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  }

  &[x-placement^="bottom"] {
     margin-top: 5px;

  .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  }

  &[x-placement^="right"] {
     margin-left: 5px;

  .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  }

  &[x-placement^="left"] {
     margin-right: 5px;

  .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  }

  &[aria-hidden='true'] {
     visibility: hidden;
     opacity: 0;
     transition: opacity .15s, visibility .15s;
   }

  &[aria-hidden='false'] {
     visibility: visible;
     opacity: 1;
     transition: opacity .15s;
   }
  }
</style>
