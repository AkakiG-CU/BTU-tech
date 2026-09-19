// 'this' keyword in object
const user = {
    userName: 'user',
    logUser() {
        console.log(this.userName);
    }
};
user.logUser();
// 'this' context
const user1 = { userName: 'myUser' };
const anotherUser = { userName: 'anotherUser' };
function log() { console.log(this.userName); }
user1.log = log;
anotherUser.log = log;
user1.log();
anotherUser.log();
