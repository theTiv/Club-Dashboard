import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    sections: [
        { title: 'Email', icon: 'mail', description: 'Lorem Ipsum', link: '/'},
        { title: 'Downloads', icon: 'downloads', description: 'Lorem Ipsum', link: '/'},
        { title: 'GAA Newsletter', icon: 'newsletter', description: 'Lorem Ipsum', link: '/'},
        { title: 'Tickets', icon: 'tickets', description: 'Lorem Ipsum', link: '/'},
        { title: 'Club Map', icon: 'map', description: 'Lorem Ipsum', link: '/'},
        { title: 'GMS', icon: 'doc', description: 'Lorem Ipsum', link: '/'},
        { title: 'GRMA', icon: 'circle', description: 'Lorem Ipsum', link: '/'},
        { title: 'Child Welfare E - vetting', icon: 'globe', description: 'Lorem Ipsum', link: '/'},
        { title: 'Insurance', icon: 'padlock', description: 'Lorem Ipsum', link: '/'},
        { title: 'Membership Form', icon: 'person', description: 'Lorem Ipsum', link: '/'},
        { title: 'GDPR Repository', icon: 'server', description: 'Lorem Ipsum', link: '/'},
        { title: 'Player Transfer System', icon: 'plane', description: 'Lorem Ipsum', link: '/'},
        { title: 'MIS', icon: 'tent', description: 'Lorem Ipsum', link: '/'},
        { title: 'Nat Club Draw', icon: 'shield', description: 'Lorem Ipsum', link: '/'},
        { title: 'E-learning', icon: 'graduation', description: 'Lorem Ipsum', link: '/'},
      ],
    notifications: [
        { title: 'article 1', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { title: 'article 2', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { title: 'article 3', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { title: 'article 4', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { title: 'article 5', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { title: 'article 6', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' }    
],
}
}).$mount('#app')
