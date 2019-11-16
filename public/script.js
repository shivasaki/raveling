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
    //get current date
    const date = firebase.firestore.Timestamp.fromDate(new Date())

    // get topics and contents of the day
    firebase.firestore().collection("topics").where("publishedDate", "==", date)
        .get().then(function (topics) {

            // handle each topics
            topic.forEach(function (topic) {

                // generate content

            });
        }).catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}

$(function () {
    //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
    $('.modal-image').on('change', 'input[type="file"]', function (e) {
        var file = e.target.files[0],
            reader = new FileReader(),
            $preview = $(".preview");
        t = this;

        // 画像ファイル以外の場合は何もしない
        if (file.type.indexOf("image") < 0) {
            return false;
        }

        // ファイル読み込みが完了した際のイベント登録
        reader.onload = (function (file) {
            return function (e) {
                //既存のプレビューを削除
                $preview.empty();
                // .prevewの領域の中にロードした画像を表示するimageタグを追加
                $preview.append($('<img>').attr({
                    src: e.target.result,
                    width: "100%",
                    class: "preview",
                    title: file.name
                }));
            };
        })(file);

        reader.readAsDataURL(file);
    });
});