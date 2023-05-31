import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faAngleDown, faChevronDown, faMagnifyingGlass, faChevronLeft, faChevronRight, faStar, } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faTwitter, faInstagram, faYoutube, faCartShopping, faAngleDown, faChevronDown, faMagnifyingGlass, faChevronLeft, faChevronRight, faStar, faEnvelope)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
