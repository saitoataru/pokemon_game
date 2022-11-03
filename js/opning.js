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
        $('.cp_01_wrapper').hide();
        $('.cp_02_wrapper').show();
        };
    });
// chapter02_ポケモン選択と名前入力
let chapter02_story = 1;
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
        $('.cp_01_wrapper').hide();
        $('.cp_02_wrapper').show();
        };
    });
