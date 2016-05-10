$(document).ready(function() {

    // переменная для хранения массива случайных чисел
    var randomWordsArray;
    // счетчик для вывода слов в столбик
    var i = 0;
    // счетчик для вывода слов по одному (слайдами)
    var j = 0;
    // переменная для хранения случайного числа
    var randomNum;
    // функция получения случайного числа от 0 до длины массива случайных слов(аргумент)
    function getRandomInt(itemsArray){
        return Math.floor(Math.random() * itemsArray.length);
    }

    $("form").submit(function() {
        console.log("лог из обработчика формы submit, ниже - лог из аякса -console.log(data)- где data - массив случайных чисел");
        var n = $("#random-words-number").val();
        $.ajax({
            url: "/words/random.json?" + "n=" + n,
            type: "GET",
            success: function(data){
                console.log(data);
                $("#random-numbers-list").text(data.join(", "));
                randomWordsArray = data;
            }
        });
        return false;
    });

    $("#reset-all").click(function(){
        $("#random-numbers-list").text("");
        $("#words-list").text("");
        i = 0;
        $("#one-word").text("");
        j = 0;
        $("#random-num").text("");
        randomWordsArray = null;
        $("#random-words-number").val("");
    });

    $("#list-hide-show").click(function(){
        $("#random-numbers-list").slideToggle("slow");
    });

    $("#show-next-word").click(function() {
        if ( i < randomWordsArray.length ) {
            $("#words-list").append("<li>" + randomWordsArray[i] + "</li>");
            i += 1;
        } else {
            // alert("Показаны все слова");
            $("#words-list").text("");
            $("#words-list").append("<li>" + randomWordsArray[0] + "</li>");
            i = 1;
        }
    });

    $("#reset-list").click(function(){
        $("#words-list").text("");
        i = 0;
    });

    $("#show-one-word").click(function() {
        if ( j < randomWordsArray.length ) {
            $("#one-word").text(j+1 + " -> " + randomWordsArray[j]);
            j += 1;
        } else {
            // alert("Показаны все слова.");
            $("#one-word").text("1 -> " + randomWordsArray[0]);
            j = 1;
            // $("#one-word").text("");
        }
    });

    $("#reset-one-word").click(function(){
        $("#one-word").text("");
        j = 0;
    });

    $("#show-random-number").click(function() {
        randomNum = getRandomInt(randomWordsArray);
        $("#random-num").text(randomNum + 1);
        console.log(randomNum);
    });

    $("#reset-random-number").click(function(){
        $("#random-num").text("");
    });

});