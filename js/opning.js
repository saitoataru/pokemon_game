// chapter01＿オオキド博士
let chapter01_story = 1;
$('#next_text_btn_01').click(function (){
        console.log(chapter01_story);
    if (chapter01_story === 1) {
        $('#conversation01').text("ポケモンの秘密はたくさんある・・・");
        chapter01_story = chapter01_story + 1;
    }else if (chapter01_story === 2){
        $('#conversation01').text("パートナーを選んでポケモンの世界へ飛び込もう！！");
        chapter01_story = chapter01_story + 1;
        console.log(chapter01_story);
    }else if (chapter01_story ===3){
        $('.cp_01_wrapper').fadeOut(2000);
        chapter01_story = chapter01_story + 1;
        $('.cp_02_wrapper').show();
        };
    });
// chapter02_ポケモン選択と名前入力
let chapter02_story = 1;
console.log(chapter02_story);
$('#next_text_btn_02').click(function (){
    if (chapter02_story === 1) {
        $('#conversation02').text("君の名前を教えてくれるかい？");
        chapter02_story = chapter02_story + 1;
        console.log(chapter02_story);
    }else if (chapter02_story === 2){
        $('.cp_02_01_wrapper').hide();
        $('.cp_02_02_wrapper').show();
        chapter02_story = chapter02_story + 1;
        console.log(chapter02_story);
    }else if (chapter02_story ===3){
        // $('.cp_01_wrapper').hide();
        // $('.cp_02_wrapper').show();
        };
    });
// $('#save').click(function(){
//     if()

// });

//名前の入力
    //save
$("#save").on("click",function(){
    const name = $("#text_area").val();
    localStorage.setItem("name",name);
    alert("保存しました")
    if(name===""){
        alert("名前を入力してください！！");
    }
    else {
        $('.cp_02_02_wrapper').hide();
        $('.cp_02_03_wrapper').show();
    };
});
    //clear クリックイベント
$("#clear").on("click",function(){
    localStorage.removeItem("name");
    alert("削除しました");
    $("#text_area").val("");
});
//chaper02_終了
$('#next_text_btn_02_03').on("click",function(){
    $('.cp_02_03_wrapper').hide();
    $('.cp_03_wrapper').show();
});

