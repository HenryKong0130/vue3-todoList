export default function useRemoveTodo(todosRef) {
  const remove = (item) => {
    todosRef.value.splice(todosRef.value.indexOf(item), 1);
  };
  const removeCompleted = () => {
    todosRef.value = todosRef.value.filter((it) => !it.completed);
  };
  return {
    remove,
    removeCompleted,
  };
}
