//declation of anonymous user
let user

//observing user state
firebase.auth().onAuthStateChanged((fbUser) => { user = fbUser });

//force to sign in
if (!user) {
    firebase.auth().signInAnonymously().catch(e => console.log("ERR-A936"));
}

//set daily topic and topic's contents
try {

} catch (e) { console.log("ERR-A239") }

const getDailyTopics = async () => {
    const date = firebase.firestore.Timestamp.fromDate(new Date())
    firebase.firestore().collection("topics").where("publishedDate", "==", date)
        .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        }).catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}