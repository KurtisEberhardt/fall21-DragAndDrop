<template>
  <div class="Rooms container-fluid col-6 py-2 text-center" dropzone="zone" @dragover.prevent @drop.prevent="moveItem">
    <div class="row justify-content-center">
      <div class="col-3 text-light bg-info rounded-pill p-1">
        {{ roomProp.name }}
      </div>
    </div>
    <transition-group name="item" tag="div" class="row space-evenly mt-3">
      <Item @draggable="true" v-for="i in items" :key="i.id" :room-id="roomProp.id" :item-prop="i" />
    </transition-group>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { itemService } from '../services/ItemService'
export default {
  props: {
    roomProp: { type: Object, required: true }
  },
  setup(props) {
    return {
      items: computed(() => AppState.rooms[props.roomProp.id].items),
      moveItem() {
        console.log('im schmoovin', props.roomProp.id)
        itemService.moveItem(props.roomProp.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.Rooms {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}
</style>
