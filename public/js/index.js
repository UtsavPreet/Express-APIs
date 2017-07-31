$(document).ready(function () {

bind('.mainContainer .submit', function () {
    var username = $('.userName').val().trim();
    execute('/login',username);
});

})