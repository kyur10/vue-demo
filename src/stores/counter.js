import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./UseStore";

/* Composition API */
export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);
  const name = ref("Keyur");

  const userStore = useUserStore();
  console.log(userStore.users);

  const users = userStore.users;
  const doubleCount = computed(() => count.value * 2);

  const customCount = computed(() => {
    return (value) => {
      return value * count.value;
    };
  });

  const getUserById = computed(() => {
    return (id) => userStore.users.find((user) => user.id === id);
  });

  function increment() {
    count.value++;
  }

  function $reset() {
    count.value = 0;
    name.value = "Keyur";
  }

  return {
    count,
    name,
    doubleCount,
    getUserById,
    increment,
    customCount,
    $reset,
    users,
  };
});

/* Options API */
// export const useCounterStore = defineStore('counterStore', {
//   state: () => {
//     return {
//       count: 0,
//       name: 'Keyur'
//     };
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     doubleCountPlusOne() {
//       return this.doubleCount + 1;
//     }
//   },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   }
// });
