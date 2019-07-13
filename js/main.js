// TEMPLATES FOR VUE ROTER
const about = {template:
  `
    <div class="templates">
      <h1>About Me.</h1>
      <p>I have a BBA with a concentration in Marketing from Gonzaga University. I conducted digital marketing campaigns at the Unity Multicultural Education Center and more recently at KBOO radio station. Recently, I finished a coding bootcamp course from PDX Code Guild and received a certificate in Python Based Web Development.</p>
      <p>My current objective is to find a position within software engineering to develop my skills. I am furthering my coding knowledge post bootcamp into other JavaScript libraries. I can pick up new information quickly and be efficient in it.</p>

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
          <p>AmbitioUs is my capstone project from the PDX Code Guild bootcamp. The
          app is a platform where users can design a long-term goal with subsequent milestones to ensure a gradual progression towards the goal. The app is still under development and I will continue to work on it as I progress in my skills.</p>
          <p>AmbitioUs was built using Django and REST APIs. The templates are using a combination of Django and Vue, for reactivity.</p>
        </div>
        <div class="visuals">
          <img src="img/ambitious.gif">
        </div>
      </li>
      <hr>
      <li>
        <div class="description">
          <p>Con Ganas is a clothing line that I started while in an entrepenuership class at Gonzaga. It represents the pride I have as a Latino man and the pride Latinx people showcase on a daily basis.</p>
          <p>Con Ganas means “to do something full heartedly”.</p>
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
      <p>I love to challenge myself to try new things. The mindset of growth is one that I constantly strive to be in.</p>
      <ul>
      <li>
        <h2>Coding</h2>
        <p>I have continued my education post bootcamp focusing on becoming a confident full stack developer. I have studied Node, MongoDb, and VueRouter on my own. I am moving towards working on more projects with a VENM stack. I will also start to study React to become better verse in current JavaScript frameworks.</p>
      </li>
        <li>
          <h2>Running</h2>
          <p>I discovered the joy of running at the beginning of this year. I finished a half marathon in late March and just recently started training for a full marathon. I will be running the Portland Marathon in October 6th!</p>
        </li>
        <li>
          <h2>Music</h2>
          <p>I want to play at a local jam session in Portland, OR. I have been playing saxophone for around 12 years and want to play in new scenes.</p>
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
