import { createStore } from "vuex";

const store = createStore({
    state: {
        userName: "Hello",
        chatName: "Okeee",
        rank: 287,
        userStatus: "online",
        chatStatus: "online",
        rp: 99,
        thl: 2528,
        activeFriend: 0,
        totalFriend: 15,
    }
});
export default store;