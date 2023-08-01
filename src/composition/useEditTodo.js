import { ref, computed } from "vue";

export default function useEditTodo(todosRef) {
  const editingTodoRef = ref(null); //当前正在修改哪一个todo
  let originTitle = null; //存储当前title
  const editTodo = (todo) => {
    // console.log(todo);//拿到当前正在操作的todo
    //{id: '16907753896942e1d', title: '打豆豆', completed: false}
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };
  const doneEdit = (item) => {
    editingTodoRef.value = null;
    const title = item.title.trim(); //拿到当前的代办项目进行后续处理
    if (title) {
      item.title = title;
    } else {
      //去掉首位空白后如果为空,那么就将这项删去
      todosRef.value.splice(todosRef.value.indexOf(item), 1);
    }
  };
  const cancelEdit = (todo) => {
    todo.title = originTitle;
  };

  //计算属性
  const allDoneRef = computed({
    get() {
      const val = todosRef.value.filter((it) => !it.completed).length === 0;
      return val;
    },
  });

  function setAllChecked(checked) {
    todosRef.value.forEach((todo) => {
      todo.completed = checked;
    });
  }

  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef,
    setAllChecked,
  };
}
