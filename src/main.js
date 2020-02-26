import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  data: {
    sections: [
        { id: 1, title: 'Email', icon: 'email', description: 'Lorem Ipsum  Suspendisse mauris nib', link: '/'},
        { id: 2, title: 'Downloads', icon: 'downloads', description: 'Lorem Ipsum venenatis venenatis', link: '/'},
        { id: 3, title: 'GAA Newsletter', icon: 'newsletter', description: 'Lorem Ipsum venenatis venenatis', link: '/'},
        { id: 4, title: 'Tickets', icon: 'tickets', description: 'Lorem Ipsum  Suspendisse mauris nibh', link: '/'},
        { id: 5, title: 'Club Map', icon: 'clubmap', description: ' Nullam porttitor consequat est in consectetu', link: '/'},
        { id: 6, title: 'GMS', icon: 'gms', description: 'Vestibulum ultrices lacinia finibus', link: '/'},
        { id: 7, title: 'GRMA', icon: 'grma', description: ' Phasellus efficitur mauris a erat laoreet molestie', link: '/'},
        { id: 8, title: 'Child Welfare E - vetting', icon: 'childwelfare', description: 'Aenean lacinia auctor metus.', link: '/'},
        { id: 9, title: 'Insurance', icon: 'insurance', description: 'Lorem Ipsum efficitur non diam ', link: '/'},
        { id: 10, title: 'Membership Form', icon: 'membership', description: 'Lorem Ipsum', link: '/'},
        { id: 11, title: 'GDPR Repository', icon: 'gdpr', description: 'Lorem Ipsum', link: '/'},
        { id: 12, title: 'Player Transfer System', icon: 'playertransfer', description: 'Lorem Ipsum', link: '/'},
        { id: 13, title: 'MIS', icon: 'mis', description: 'Lorem Ipsum', link: '/'},
        { id: 14, title: 'Nat Club Draw', icon: 'purchasepower"', description: 'Lorem Ipsum', link: '/'},
        { id: 15, title: 'E-learning', icon: 'elearning', description: 'Lorem Ipsum', link: '/'},
      ],
    notifications: [
        { id: 1, title: 'article 1', date: '24-01-20', time:'7:01 pm', description: 'The deadline for submitting expenses is this Friday 11th October.' },
        { id: 2, title: 'article 2', date: '28-01-20', time:'10:00 am', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, title: 'article 3', date: '01-02-20', time:'1:00 pm', description: 'Donec suscipit, nisi non venenatis venenatis.' },
        { id: 4,  title: 'article 4', date: '14-02-20', time:'9:00 am', description: 'Donec bibendum massa a eros dignissim, non commodo lacus sollicitudin.' },
        { id: 5, title: 'article 5', date: '18-02-20', time:'3:30 pm', description: 'Pellentesque eu venenatis nunc, Curabitur ac risus.' },
        { id: 6, title: 'article 6', date: '24-02-20', time:'5:14 pm', description: 'Cras a auctor veli, Aenean lacinia auctor metus.' }    
]
}
}).$mount('#app');
