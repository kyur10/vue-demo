import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([
    { id: 1, name: "User1" },
    { id: 2, name: "Keyur" },
  ]);

  return { users };
});
