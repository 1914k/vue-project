<template>
  <transition name='show' @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected">
      <app-bar @left="unselectTodo" />
      <todo :todo="selected.todo" :active="true" @close="unselectTodo" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import AppBar from "./AppBar";
import Todo from "./Todo";
export default {
  data() {
    return {
      curSelected: undefined
    }
  },
  components: {
    AppBar,
    Todo
  },
  computed: {
    ...mapState(['selected', 'unselect'])
  },
  methods: {
    ...mapMutations(['unselectTodo']),
    handleEnter(el) {
      this.curSelected = this.selected;
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`,
      })

      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        })
      }, 0);
    },
    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.curSelected.rect.appWidth}px`,
        height: `${this.curSelected.rect.appHeight}px`
      })

      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.curSelected.rect.top}px`,
          left: `${this.curSelected.rect.left}px`,
          width: `${this.curSelected.rect.width}px`,
          height: `${this.curSelected.rect.height}px`,
        })
      }, 0);
    }
  }
}
</script>

<style lang="scss">
.todo-detail {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: top, left, width, height;

  .todo {
    margin: 0;
    padding: 0 20px;
    box-shadow: none;
  }
  .todo_head,
  .todo_body {
    transform: translate3d(0, 0, 0);
  }
  .todo_menu {
    opacity: 0;
  }
  .todo_tasks {
    opacity: 1;
    transform: scaleY(1);
  }
  .app-bar {
    opacity: 1;
    transform:  translate3d(0, 0, 0);
  }
}
.show-enter-to,
.show-leave {
  border-radius: 0;
  .todo {
    padding: 0 20px;
  }
  // .todo_head,
  // .todo_body {
    // transform: translate3d(0, 88px, 0);
  // }
  .todo_menu {
    opacity: 0;
  }
  .todo_tasks {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    max-height: 225px;
    overflow: hidden;
  }
  .app-bar {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.show-leave-to,
.show-enter {
  border-radius: 8px;
  .todo {
    padding: 0;
  }
  .todo_head {
    transform: translate3d(0, -35px, 0);
  }
  .todo_body {
    transform: translate3d(0, 14vh, 0);
  }
  .tood_menu {
    opacity: 1;
  }
  .todo_tasks {
    opacity: 0;
    transform: scale3d(1, 0, 1);
  }
  .app-bar {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;
  .todo,
  .todo_head,
  .todo_body,
  .todo_menu,
  .todo_tasks,
  .app-bar {
    transition: all 0.5s ease;
  }
}
</style>