const totalFriend = require("../data/totalFriend.json");

function getActive() {
    const array = [];
    for (let i in totalFriend) {
        if (totalFriend[i].status === 'online') {
            array.push(totalFriend[i]);
        }
    }
    return array.length;
};
// export default getActive;
console.log(getActive());