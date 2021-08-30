const details = {
    name: 'kirshan',
    friends: ['sunil', 'Amir'],
    getFriends: function () {
      this.friends.forEach(friend => {
        console.log(this.name + " is friends with " + friend);
      });
    }
  }
  details.getFriends();