import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../utils/todoStorage.js";

const validHash = ["all", "active", "completed"];

export default function newFilter(todosRef) {
  const visibilityRef = ref("all");
  function handleHashChange() {
    const hash = location.hash.replace(/#\/?/, "");
    if (validHash.includes(hash)) {
      visibilityRef.value = hash;
    } else {
      visibilityRef.value = "all";
    }
  }

  onMounted(() => {
    window.addEventListener("hashchange", handleHashChange);
  });

  onUnmounted(() => {
    window.removeEventListener("hashchange", handleHashChange);
  });

  const FilteredTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value);
  });
  const remainingRef = computed(() => {
    return filter(todosRef.value, "active").length;
  });
  const completedRef = computed(() => {
    return filter(todosRef.value, "completed").length;
  });
  return {
    visibilityRef,
    FilteredTodosRef,
    remainingRef,
    completedRef,
  };
}
