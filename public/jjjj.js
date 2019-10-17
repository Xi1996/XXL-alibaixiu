var num = [1, 2, 3, 4, 5, 3, 2, 1, 4];
var val = 3;


var removeElement = function(nums, val) {
    nums.forEach(function(i, ele) {
        if (ele == val) {
            num.splice(i, 1);
            i--;
        }
    });

    return num.length;
};
removeElement(num, val);