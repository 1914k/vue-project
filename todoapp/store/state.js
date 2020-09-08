export default {
  currentIndex: 0,
  todos: [
    {
      icon: 'user',
      name: '个人',
      tasks: [
        {
          id: 1,
          title: '做饭',
          date: new Date(),
          done: false,
          deleted: false
        }
      ],
      colors: ['#ff6262', '#ffa947']
    },
    {
      icon: 'suitcase',
      name: '工作',
      tasks: [
        {
          id: 3,
          title: '开会',
          date: new Date(),
          done: true,
          deleted: false
        },
        {
          id: 4,
          title: '见客户',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 5,
          title: '完成设计图',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 6,
          title: '汇报工作',
          date: new Date(),
          done: false,
          deleted: false
        }
      ],
      colors: ['#5b9df9', '#47bfff']
    },
    {
      icon: 'home',
      name: '家庭',
      tasks: [
        {
          id: 2,
          title: '看电影',
          date: new Date(),
          done: true,
          deleted: false
        }
      ],
      colors: ['#2c7d59', '#3ba776']
    }
  ],
  selected: null,
  unselect: null,
  editing: null
}