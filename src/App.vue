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
      <section class="main">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
        />
        <label for="toggle-all">Mark all as complete111</label>
        <!-- 代办选项 -->
        <ul class="todo-list">
          <li class="todo">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>学习composition api</label>
              <button class="destroy"></button>
            </div>
            <input
              class="edit"
              type="text"
            />
          </li>
          <li class="todo">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>投递50封简历</label>
              <button class="destroy"></button>
            </div>
            <input
              class="edit"
              type="text"
            />
          </li>
          <li class="todo">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>上午10:30 参加面试</label>
              <button class="destroy"></button>
            </div>
            <input
              class="edit"
              type="text"
            />
          </li>
        </ul>
      </section>

      <!-- 底部 -->
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          <span>items left</span>
        </span>
        <!-- 底部导航选项 -->
        <ul class="filters">
          <li><a
              href="#/all"
              class="selected"
            >All</a></li>
          <li><a
              href="#/active"
              class=""
            >Active</a></li>
          <li><a
              href="#/completed"
              class=""
            >Completed</a></li>
        </ul>
        <button
          class="clear-completed"
          style="display: none"
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
export default {
  setup() {
    const {todosRef} = useTodoList()
    return {
      // ...useTodoList(),
      ...useNewTodo(todosRef),
    };
  },
};
</script>
