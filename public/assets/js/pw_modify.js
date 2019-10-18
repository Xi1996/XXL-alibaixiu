// $('#modifyForm').on('submit', function() {
//     $.ajax({
//         type: "put",
//         url: "/user/password",
//         data: $(this).serialize(),
//         success: function(res) {
//             location.href = 'login.html';
//         }
//     });
//     return false;
// });


$('#modifyForm').on('sumbit', function() {
    $.ajax({
        type: "put",
        url: "/users/password",
        data: $(this).serialize(),
        success: function(res) {
            location.href = "login.html";
        }
    });
    return false;
});