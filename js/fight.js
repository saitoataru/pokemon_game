//ステージの進捗具合を制御
let currentStage =1;

//プレーヤーの体力
let mymonsterHp=100;
let enemyHp=100;

//ランダム数字=攻撃係数
function randomNumber(){
    const num=[5,0,30,40];
    var a = Math.floor(Math.random()*4);
    var attack_val =  num[a];
    console.log(a);
    console.log(attack_val);
    return attack_val;
}

//ランダム数字=回復係数
function recovery_randomNumber(){
    const num=[10,5,5,0];
    var b = Math.floor(Math.random()*4);
    var recovery_val =  num[b];
    console.log(b);
    console.log(recovery_val);
    return recovery_val;
}
//ランダム数字=敵の攻撃行動(攻撃6割、回復4割） 
function enemy_action_randonNumber(){
    var enemy_num = Math.floor(Math.random()*5);
    console.log(enemy_num);
    return enemy_num;
}

//敵の行動
function enemy_action(){
    const enemy_random_val = enemy_action_randonNumber();
    if(enemy_random_val%2===0){
        enemy_val = +20;
        enemyHp = enemyHp - enemy_val;
        // 確認用console
        console.log("敵は"+enemyHp);
        // バトルコメント
        $("#comment_enemy").text("敵の回復。〇〇は"+enemy_val);
        // HP表示
        $("#enemyHp").text(enemyHp);
    }else {
        enemy_val = -20;
        enemyHp = enemyHp - enemy_val;
        // 確認用console
        console.log("敵は"+enemyHp);
         // バトルコメント
         $("#comment_enemy").text("敵の攻撃。〇〇は"+enemy_val);
        // HP表示
        $("#enemyHp").text(enemyHp);
    }
}


//負けの場合
function loseRoute(){
    if(currentStage===1){
    }
}
//相手の攻撃
function applicantHandAttack() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は 質問攻撃を繰り出してきた!!");
    } 
}
//モンスターの種類を定義
function name_def(){
    const name = "ヒトカゲ" 
    // ストレージから引っ張ってくる 
    return name;
}  

function validationJudge(){
    if(playerHp<=0){
        console.log('負け');
        loseRoute();
    } else if(mymonsterHp<=0){

    }
}
//monsterの行動３パターン（攻撃・回復・XX）
$("#attack_click_1").click(function(){
    attackModel();
})
$("#attack_click_2").click(function(){
    recoveryModel();
})
$("#attack_click_3").click(function(){
    attackModel();
})

//mymonster_攻撃行動
function attackModel(){
    const applicantAttack = randomNumber();
    const monster = name_def(); //if分で名前を変更
    if(applicantAttack===5){
        mymonsterHp = mymonsterHp - applicantAttack;
        // 確認用console
        console.log(monster+"は火炎放射＝")
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は火炎放射＝");
        // HP表示
        $("#yourHp").text(mymonsterHp);
        //敵の行動function入れる
        enemy_action();

    }else if(applicantAttack===0){
        mymonsterHp = mymonsterHp - applicantAttack;
        // 確認用console
        console.log(monster+"はミスをした＝")
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
         // バトルコメント
         $("#comment_your").text(monster+"はミスをした＝");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }else if(applicantAttack===30){
        mymonsterHp = mymonsterHp - applicantAttack;
        // 確認用console
        console.log(monster+"は大車輪＝")
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は大車輪＝");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }else{
        mymonsterHp = mymonsterHp - applicantAttack;
        // 確認用console
        console.log(monster+"は守る＝")
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は守る＝");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }
}
//mymonster_回復行動
function recoveryModel(){
    const recovery = recovery_randomNumber();
    const monster = name_def();
    if(recovery===10){
        mymonsterHp = mymonsterHp + recovery;
        // 確認用console
        console.log(monster+"は"+recovery+"回復");
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は"+recovery+"pt回復");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }else if(recovery===5){
        mymonsterHp = mymonsterHp + recovery;
        // 確認用console
        console.log(monster+"は"+recovery+"回復");
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は"+recovery+"pt回復");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }else if(recovery===0){
        mymonsterHp = mymonsterHp + recovery;
        // 確認用console
        console.log(monster+"は"+recovery+"回復");
        console.log(mymonsterHp);
        console.log("残りHPは"+mymonsterHp);
        // バトルコメント
        $("#comment_your").text(monster+"は"+recovery+"pt回復");
        // HP表示
        $("#yourHp").text(mymonsterHp);
         //敵の行動function入れる
         enemy_action();
    }
}