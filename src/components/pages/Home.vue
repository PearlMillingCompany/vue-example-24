<script>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
export default {
    data() {
        return {
            description: "Welcome to Fúthub",
            copy: "This is copy. It's a string. Paragraph paragraph paragraph.",
        }
    }, 
    components: {
        Header,
        Footer,

      
    }
}
</script>

<template>
   
    <div class="backgroundWithImage">
        <div class="description">
            <h1>{{ description }}</h1>
            <p>The Home Of Football</p>
        </div>
    </div>
    <div>
        {{ copy }}
    </div>
  
</template>

<style scoped>
.backgroundWithImage {
    height: calc(-500px + 280vh);
    background-size: 150%;  
    background-repeat: no-repeat;
    background-image: url(https://theanalyst.com/wp-content/uploads/2024/04/dominic-solanke-celebrates-scoring-a-goal.jpg);
}

.description {
    color: var(--color-heading);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: min(80%, 650px);
    height: calc(-40px + 20vh);
    margin: 0 auto; /* auto-center */ 
}
.description * {
    margin: 0;
}
</style>