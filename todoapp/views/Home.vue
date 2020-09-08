<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search"/>
    <avatar />
    <gradient />
    <todo-list />
    <todo-detail />
    <todo-editing />
    <floating-button />
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import Avatar from "../components/Avatar.vue";
import Gradient from "../components/Gradient";
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";
import TodoEditing from '../components/TodoEditing.vue'
import FloatingButton from '../components/FloatingButton.vue'
export default {
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: white
}
</style>