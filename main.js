// TEMPLATES FOR VUE ROTER
const about = {template:
  `
    <div class="templates">
      <p>I am Gonzaga Univeristy graduate with a degree a marketing and just finished a coding bootcamp at PDX Code Guild.</p>
      <p>My currently objective is to find a postion within software engineering to develop my skills. I am quick to pick up new information and able to work well by myself and with others.</p>

      <p>Can work with</p>
      <div class="icons">
        <i class="devicon-html5-plain colored"></i>
        <i class="devicon-css3-plain colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-mongodb-plain colored"></i>
        <i class="devicon-python-plain colored"></i>
        <i class="devicon-django-plain colored"></i>
      </div>
    </div>
    `}

const projects = {template:
  `
  <div>
    <div class="projects">
      <div class="description">
        <p>AmbitioUs is my capstone project for the PDX Code Guild bootcamp. The
        app is a platform for people to share goals with other people who want
        to achieve grand goals.</p>
        <p>The app itself is still underdevelopement but it was built with Vue,
        Python, and Django.</p>
      </div>
      <div class="visuals">
        <img src="ambitious.gif">
      </div>
    </div>
  </div>
  `}

const currentlyLearning = {template:
  `
    <div>
      <p>Although there is no impossible, it does not mean that we cannot
      continue to grow and improve in all aspects of life. The moment we become
      comfortable, is the moment we watch the world go by.</p>
      <br>
      <p>Below is a list of items I am currently working on to beceome
      proficient at.</p>

    </div>
  `}

const goals = {template:
  `
    <div>
      <p>OTHER THINGS</p>
    </div>
  `}

// VUE ROTER INSTANCE & ROUTES
const routes = [
  { path: '/', component: about },
  { path: '/about', component: about },
  { path: '/projects', component: projects },
  { path: '/currently-learning', component: currentlyLearning },
  { path: '/goals', component: goals }
]

const router = new VueRouter({
  routes
})

// VUE NAVBAR
Vue.component('sidenav', {
  template: `
    <div>
      <li>
        <i class="fa fa-user"></i>
        <router-link to="about" class='routes'>About</router-link>
      </li>
      <li>
        <i class="fa fa-project-diagram"></i>
        <router-link to="projects" class='routes'>Projects</router-link>
      </li>

      <li>
        <i class="fas fa-burn"></i>
        <router-link to="goals" class='routes'>Goals</router-link>
      </li>
    </div>
  `,
});

Vue.component('my-section-head', {
  template: `
    <div>
      <div class='left-side'>
        <h1>Rafael Castellanos-Welsh</h1>
        <h2>Typed.js will go here</h2>
      </div>
      <div class="right-side">
        <a href="https://www.linkedin.com/in/rafaelcastellanos-welsh/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/rafawelsh"><i class="fab fa-github"></i></a>
        <a href="mailto:mrrafael1912@gmail.com"><i class="far fa-envelope"></i></a>
        <button><a href="rafael_resume.pdf" download="rafael_resume.pdf">Download My Resume</a></button>

      </div>
    </div>
  `,
});

var app = new Vue({
  router
}).$mount('#app');
