import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    sections: [
        { id: 1, title: 'Email', icon: 'mail', description: 'Lorem Ipsum', link: '/'},
        { id: 2, title: 'Downloads', icon: 'downloads', description: 'Lorem Ipsum', link: '/'},
        { id: 3, title: 'GAA Newsletter', icon: 'newsletter', description: 'Lorem Ipsum', link: '/'},
        { id: 4, title: 'Tickets', icon: 'tickets', description: 'Lorem Ipsum', link: '/'},
        { id: 5, title: 'Club Map', icon: 'map', description: 'Lorem Ipsum', link: '/'},
        { id: 6, title: 'GMS', icon: 'doc', description: 'Lorem Ipsum', link: '/'},
        { id: 7, title: 'GRMA', icon: 'circle', description: 'Lorem Ipsum', link: '/'},
        { id: 8, title: 'Child Welfare E - vetting', icon: 'globe', description: 'Lorem Ipsum', link: '/'},
        { id: 9, title: 'Insurance', icon: 'padlock', description: 'Lorem Ipsum', link: '/'},
        { id: 10, title: 'Membership Form', icon: 'person', description: 'Lorem Ipsum', link: '/'},
        { id: 11, title: 'GDPR Repository', icon: 'server', description: 'Lorem Ipsum', link: '/'},
        { id: 12, title: 'Player Transfer System', icon: 'plane', description: 'Lorem Ipsum', link: '/'},
        { id: 13, title: 'MIS', icon: 'tent', description: 'Lorem Ipsum', link: '/'},
        { id: 14, title: 'Nat Club Draw', icon: 'shield', description: 'Lorem Ipsum', link: '/'},
        { id: 15, title: 'E-learning', icon: 'graduation', description: 'Lorem Ipsum', link: '/'},
      ],
    notifications: [
        { id: 1, title: 'article 1', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 2, title: 'article 2', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 3, title: 'article 3', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 4,  title: 'article 4', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 5, title: 'article 5', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 6, title: 'article 6', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' }    
]
},
// mounted() {
//   if (localStorage.name) {
//     this.name = localStorage.name;
//   }
// },
// watch: {
//   name(newName) {
//     localStorage.name = newName;
//   }
// }
}).$mount('#app');
