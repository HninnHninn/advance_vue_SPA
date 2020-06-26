<template>
    <span>     
        <div>
            <h1>Welcome to the Library!</h1>
            <h1>Hello </h1>
            <h3>We have {{ this.availableBooks.length }} books available</h3>
        </div>   
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
        
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans
    },    
    computed: {
      ...mapGetters([
        'availableBooks'
      ])
    },
};
</script>