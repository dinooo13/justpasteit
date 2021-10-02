import './styles/app.css';
import Vue from 'vue'
import App from './components/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(fas);

Vue.component('icon', FontAwesomeIcon);

new Vue({
    el: '#app',
    components: { App }
})