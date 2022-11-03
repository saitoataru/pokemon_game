// chapter01
let chapter01_story = 1;
$('#next_text_btn_01').click(function () {
    console.log(chapter01_story);
    if (chapter01_story === 1) {
        $('#conversation01').text("ポケモンの秘密はたくさんある・・・");
        chapter01_story = chapter01_story + 1;
    }else if  (chapter01_story === 2){
        $('#conversation01').text("パートナーを選んでポケモンの世界へ飛び込もう！！");
        chapter01_story = chapter01_story + 1;
    }else {
        $(window).load(function() {
            $('.cp_01_wrapper').hide();
            $('.cp_02_wrapper').show();
        
            });

    }
    console.log(chapter01_story);
    
});
