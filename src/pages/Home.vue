<template>
  <div><b>
      PINIA Demo
    </b>
    Using Options & Composition API</div>
  <br>
  <div>Counter: {{ count }}</div>
  <div>Double Count: {{ doubleCount }}</div>
  <div>Custom Count: {{ customCount(3) }}</div>
  <div>Name: {{ name }}</div>
  <!-- <div>doubleValue: {{ doubleValue }}</div> -->
  <div>
    <button @click="add()">Increment</button>
    <button @click="counter.$reset()">Reset</button>
  </div>
  <br>
  <span>Users</span>
  <div v-for="user in users" :key="user.id">
    <div>{{ user.id }} -> {{ user.name }}</div>
  </div>
  <div>User with id 2: {{ getUserById(2).name }}</div>
</template>

<!-- Composition API -->
<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { ref } from 'vue';

const counter = useCounterStore();
const search = ref("Type here");

const { count, doubleCount, name, customCount, getUserById, users } = storeToRefs(counter);

const { increment } = counter;

counter.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});

function add() {
  counter.$patch({
    count: counter.count + 1,
    name: Math.random().toPrecision(2) + ' xyz'
  });
  // counter.count++;
  // counter.name = Math.random() + 'dsds';
}

</script>

<!-- Options API -->
<!-- <script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  computed: {
    // ...mapState(useCounterStore, {
    //   counter: 'count',
    //   doubleCounter: 'doubleCount',
    //   doubleValue: (state) => state.doubleCount + 1
    // }),
    ...mapWritableState(useCounterStore, ['count', 'doubleCount','name'])
  },
  mounted(){
    this.$subscribe((mutation,state)=>{
      console.log(mutation), console.log(state); 
    })
  },
  methods: {
    ...mapActions(useCounterStore, ['increment','$reset','$patch','$subscribe']),
    add() {
      this.count++; // need to use writablestate for changing the state which is count here
      this.$patch({
        count: count++,
        name: Math.random() +"asddf"
      })
    }
  }
};
</script> -->

<!-- <template>
  <div>Home Page</div>
</template>

<script setup>
const props = defineProps(['name']);

console.log(props);
</script> -->
