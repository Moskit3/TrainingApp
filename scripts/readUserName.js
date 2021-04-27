function readUserName(user_id) {
  firebase
    .database()
    .ref("/users/" + user_id + "/")
    .once("value")
    .then((snapshot) => {
      console.log(Object.values(snapshot.val()));
      writeUserName(Object.values(snapshot.val()));
      //console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function writeUserName(data) {
  var element = document.getElementById("userName");
  element.innerHTML = data[0];
}
