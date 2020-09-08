<template>
  <div class="avatar" :class="{ avatar_selected: !!selected }">
    <div class="avatar_face">
      <img src="../assets/face.jpg" />
    </div>
    <h2 class="avatar_name">您好，{{user.name}}</h2>
    <p class="avatar_tips">
      加油，再接再厉！！<br />你还有 {{ todayTasks.length }} 个任务没有完成.
    </p>
    <p class="avatar_date">{{ today | dateString }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      today: new Date(),
      user: {
        name: '石头'
      }
    }
  },
  computed: {
    ...mapState(['selected']),
    ...mapGetters(['todayTasks'])
  },
  filters: {
    dateString (val) {
      return dayjs(val).format('YYYY-MM-DD') + "\u3000\u3000 星期" + "日一二三四五六"[dayjs(val).day()]
    }
  }
}
</script>

<style lang="scss">
.avatar {
  display: flex;
  padding: 0 40px;
  height: 35vh;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;
}
.avatar_selected {
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}
.avatar_face {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.avatar_name {
  margin-top: 10px;
  padding: 0 6px;
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 300;
}
.avatar_tips {
  margin-top: 5px;
  padding: 0 6px;
  font-size: 13px;
  font-weight: 100;
  opacity: 0.8;
  line-height: 1.6em;
}
.avatar_date {
  margin-top: 20px;
  margin-bottom: 16px;
  padding: 0 6px;
  font-size: 14px;
}
</style>