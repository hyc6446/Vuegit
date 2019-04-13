/*
*使用localStorage存储数据的工具模块
* 向外暴露的方式
*   1.函数：向外暴露一个功能
*   2.对象：向外暴露多个功能
* */
/* 多个功能 */
const Key = 'todos'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(Key, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(Key || '[]'))
  }
}
