$('#modifyForm').on('submit', function() {
    $.ajax({
        type: "put",
        url: "/user/password",
        data: $(this).serialize(),
        success: function(res) {
            location.href = 'login.html';
        }
    });
    return false;
});