document.getElementById('registerForm').addEventListener('submit', function (event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('密码和确认密码不匹配喵！');
        event.preventDefault(); // 阻止表单提交
    }
});