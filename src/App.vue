<script>
import Header from './components/Header.vue'
import Home from './components/pages/Home.vue'
import News from './components/pages/News.vue' // TODO: remove
import Footer from './components/Footer.vue'
import AboutUs from './components/pages/AboutUs.vue'
import PlayerDetails from './components/pages/PlayerDetails.vue'


// 1. Create a routes object with all your navbar routes
const routes = {
  '/': Home,
  '/news': News,
  '/about': AboutUs,
  '/player': PlayerDetails
}

export default {
  data() {
    // 2. Change the currentPath to be the value of the routes variable
    return {
      currentPath: routes['/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = routes[window.location.hash.slice(1)];
    });
  },
  components: {
    Header,
    Footer,
  }
}
</script>

<template>
  <Header />
  <!-- <RouterLink to="/news">Go to news</RouterLink>  -->
  <!-- 4. Change this to be a dynamic component -->
  <!-- <component :is="currentPath" /> -->
  <RouterView>

  </RouterView>
  <Footer />
</template>

<style></style>
