// TEMPLATES FOR VUE ROTER
const about = {template:
  `
    <div class="templates">
      <h1>About Me.</h1>
      <p>I am Gonzaga Univeristy graduate with a degree in marketing and just finished a coding bootcamp at PDX Code Guild.</p>
      <p>My current objective is to find a postion within software engineering to develop my skills. I am quick to pick up new information and able to work well by myself and with others.</p>

      <p>I can work with</p>
        <div class="icons">
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-mongodb-plain colored"></i>
          <i class="devicon-python-plain colored"></i>
          <i class="devicon-django-plain colored"></i>
        </div>

        <p>As I recently graduated the bootcamp, I am actively looking for more opportunities to collaborate with others in new projects. My portfolio will reflect my growth in skills.</p>

      </div>
    </div>
    `}

const projects = {template:
  `
  <div class="projects">
    <h1>My Projects.</h1>
    <ul>
      <li>
        <div class="description">
          <p>AmbitioUs is my capstone project for the PDX Code Guild bootcamp. The
          app is a platform for people to share goals with other people who want
          to achieve grand goals.</p>
          <p>The app itself is still underdevelopement but it was built with Vue,
          Python, and Django.</p>
        </div>
        <div class="visuals">
          <img src="img/ambitious.gif">
        </div>
      </li>
      <li>
        <div class="description">
          <p>Con Ganas is a clothing line that promotes Latinx people to be
          proud of who they are and push through the adversity of today's world.
          </p>
          <p>I started Con Ganas while in an entrepenuership class at Gonzaga.</p>
          <p>The website is currently unavailable but I do plan on bringing this
          idea back to life.</p>
        </div>
        <div class="visuals">
          <img src="img/conganas.gif">
        </div>
      </li>
    </ul>
  </div>
  `}


const goals = {template:
  `
    <div class="goals">
      <h1>Current Goals.</h1>
      <p>I love to challenge myself to try new things. The mindset of growth is one that I constantly strive to be in. I find a sense of discovery to be very important. That being said, I do new activities no to the detriment of myself or my previous goals. When there is time and available energy, I try to grow.</p>
      <ul>
        <li>
          <h2>Running</h2>
          <p>I discovered the joy of running at the beginning of this year. I finished a half marathon in late March and just recently started training for a full marathon. I will be running the Portland Marathon in October 6th!</p>
        </li>
        <li>
          <h2>Music</h2>
          <p>After graduating from Gonzaga I found myself not practicing my saxophone as much as before. After 11 years of playing the saxophone, I owe it to myself to at least play once in a jam session somewhere around town. If you play an instrument and would like to jam together, let me know.</p>
        </li>
      </ul>
    </div>
  `}

// VUE ROTER INSTANCE & ROUTES
const routes = [
  { path: '/', component: about },
  { path: '/about', component: about },
  { path: '/projects', component: projects },
  { path: '/goals', component: goals }
]

const router = new VueRouter({
  routes
})

// VUE NAVBAR
Vue.component('sidenav', {
  template: `
    <div>
      <li
        <router-link to="about" class='routes'>
        <i class="fa fa-user"></i>
        <span>About</span>
        </router-link>
      </li>
      <li
        <router-link to="projects" class='routes'>
        <i class="fa fa-project-diagram"></i>
        <span>Projects</span>
        </router-link>
      </li>

      <li <router-link to="goals" class='routes'>
        <i class="fas fa-burn"></i>
        <span>Goals</span>
        </router-link>
      </li>
    </div>
  `,
});

Vue.component('my-section-head', {
  template: `
    <div>
      <div class='nc-items'>
        <h1>Rafael Castellanos-Welsh</h1>
        <h2><span class='container'></span></h2>
      </div>
    </div>
  `,
});

var app = new Vue({
  router
}).$mount('#app');
