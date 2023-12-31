const LOCAL_KEY = "todomvc";


export function  generateId(){
  return Date.now() + Math.random().toString(16).substr(2,4)
}


/**
 * 从本地localstorage中获取待办列表
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 *保存所有列表
 * @param {*} todos
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}
