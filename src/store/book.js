import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
        { id: 1, title: 'Ma Eain Kan', available: true },
        { id: 2, title: 'Remembrance', available: true },
        { id: 3, title: 'The Story of Engineer', available: false }
      ]
  },
  getters: {
    availableBooks: state => {
        return state.books.filter(book => book.available);
      }
  },
  mutations: {
    toggleAvailability(state, book) {
        const index = state.books.findIndex(b => b.id === book.id);
        state.books[index].available = !state.books[index].available;
      }
  },
  actions: {
    async rentBook(context, book) {
        // commit multiple mutations
        context.commit('logDateTime');
        context.commit('saveUsername');
  
        // commit mutation after API call
        await LibraryAPI.rentBook(book);
        context.commit('toggleAvailability', book);
      }
  }
});