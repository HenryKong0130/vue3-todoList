<template>
  <div id="app">
    <section class="todoapp">
      <!-- 头部区域 -->
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="代办项"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>

      <!-- 中间区域 -->
      <section
        class="main"
        v-show="todosRef.length>0"
      >
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          :checked="allDoneRef"
          @input="$event=>setAllChecked($event.target.checked)"
        />
        <label for="toggle-all">Mark all as complete111</label>
        <!-- 代办选项 -->
        <ul class="todo-list">

          <li
            class="todo"
            :class="{completed:item.completed,editing:item === editingTodoRef}"
            v-for="item in FilteredTodosRef"
            :key="item.id"
          >
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
                v-model="item.completed"
              />
              <label @dblclick="editTodo(item)">{{ item.title }}</label>
              <button
                class="destroy"
                @click="remove(item)"
              ></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="item.title"
              @blur="doneEdit(item)"
              @keyup.enter="doneEdit(item)"
              @keyup.escape="cancelEdit(item)"
            />
          </li>
        </ul>
      </section>

      <!-- 底部 -->
      <footer
        class="footer"
        v-show="todosRef.length>0"
      >
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>{{`item${remainingRef>1?"s":""}`}} left</span>
        </span>
        <!-- 底部导航选项 -->
        <ul class="filters">
          <li><a
              href="#/all"
              :class="{selected:visibilityRef ==='all'}"
            >All</a></li>
          <li><a
              href="#/active"
              :class="{selected:visibilityRef ==='active'}"
            >Active</a></li>
          <li><a
              href="#/completed"
              :class="{selected:visibilityRef ==='completed'}"
            >Completed</a></li>
        </ul>
        <button
          class="clear-completed"
          style="display: none"
          v-show="completedRef > 0"
          @click="removeCompleted"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList.js";
import useNewTodo from "./composition/useNewTodo.js";
import useFilter from "./composition/useFilter.js";
import useEditTodo from "./composition/useEditTodo.js";
import useRemoveTodo from "./composition/useRemoveTodo.js";
export default {
  setup() {
    const { todosRef } = useTodoList();
    return {
      ...useTodoList(),
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEditTodo(todosRef),
      ...useRemoveTodo(todosRef),
    };
  },
};
</script>
