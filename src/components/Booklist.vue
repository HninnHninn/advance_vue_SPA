<template>
    <div>
        <div class="list" v-for="book in availableBooks" :key="book.id">
        <span>{{ book.title }}</span>
        <button @click="rentBook(book)">Rent</button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    // ...
    methods: {
      ...mapActions([
        'rentBook'
      ])
    }
  };
</script>