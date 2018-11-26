
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vuejs
window.Vue = require('vue');
import moment from 'moment';      // importing moment
import VueRouter from 'vue-router';
Vue.use(VueRouter)



// list of filter
// filter to make upercase
Vue.filter('upText', function(text){
	//return text.toUpperCase()
	return text.charAt(0).toUpperCase() + text.slice(1)
});

// filter for time using moment js
// for this date filter we have add momentjs
// npm install moment --save 
// and add this at top of ur page import moment from 'moment';
// here moment is not a funtion so we have to put created in moment
Vue.filter('myDate', function(created){
	return moment(created).format('MMMM Do YYYY');
});




//Vuejs Routes
let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/users', component: require('./components/Users.vue') }
  ]

//register router
  const router = new VueRouter({
        mode:'history',
        routes // short for `routes: routes`
  }) 

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
