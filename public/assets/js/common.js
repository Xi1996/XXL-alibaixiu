$('#logout').on('click', function() {
    var bool = confirm('确定登出账号？');
    if (bool) {
        $.ajax({
            type: "post",
            url: "/logout",
            success: function(res) {
                location.href = 'login.html';
            }
        });
    }
});