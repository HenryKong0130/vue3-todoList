import { ref } from "vue";
import * as todoStorage from "../utils/todoStorage";
export default function useNewTodo(todosRef) {
  const newTodoRef = ref("");
  const addTodo = () => {
    //新增一个任务
    // console.log(newTodoRef.value);
    const value = newTodoRef.value && newTodoRef.value.trim();
    if (!value) {
      //没有任何输入直接返回
      return;
    }
    const todo = {
      id: todoStorage.generateId(),
      title: value,
      completed: false,
    };
    todosRef.value.push(todo);
    newTodoRef.value = "";
  };
  return {
    newTodoRef,
    addTodo,
  };
}
