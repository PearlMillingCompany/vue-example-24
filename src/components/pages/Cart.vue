<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <cart-item v-for="(item, index) in cartItems" :key="index" :item="item"></cart-item>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [
        
        { id: 1, name: 'Ball 1', value: 10, image: 'https://i5.walmartimages.com/asr/41c77eb5-ece0-4b3a-94ce-4277fb842fc8.d38b7d4b14d33963fccd74e856fc101d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
        { id: 2, name: 'Ball 2', value: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Adidas_Finale_20.jpg/400px-Adidas_Finale_20.jpg' },
        { id: 3, name: 'Ball 3', value: 10, image: 'https://i.ebayimg.com/images/g/gXUAAOSwRKJjgnFJ/s-l1600.jpg' },
        { id: 4, name: 'Ball 4', value: 10, image: 'https://assets.goal.com/images/v3/blt4ed738eb24db5558/Nike_Flight_Premier_League_Third_Ball.jpg?auto=webp&format=pjpg&width=2048&quality=60' },
      ],
    };
  },
};
</script>

<style>

</style>
