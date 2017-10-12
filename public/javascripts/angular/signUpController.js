
/**
 * @Author: bitzo
 * @Date: 17-10-4 下午3:17
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午3:17
 * @Function:
 */

myApp.controller('signUpController', function($scope, $http) {

    $scope.form = {};
    $scope.form.grade = '2017';
    $scope.form.gender = '1';

    $scope.submit = function(form) {
        console.log(form)

        if(!form || Object.keys(form).length <= 6) {
            return alert('请填写表单！');
        }

        if(form.phoneNumber == 0) {
            return alert('请填写正确的手机号')
        }

        if(form.QQ  == 0) {
            return alert('请填写正确的QQ号')
        }

        function isChinese(temp)
        {
            let re=/[^\u4e00-\u9fa5]/;
            if(re.test(temp)) return false;
            return true;
        }

        if(!isChinese(form.username)) {
            return alert('请填写正确的中文姓名！');
        }

        $http({
            method: 'post',
            url: "/api/signUp",
            data: form
        }).then(function success(response) {
            if(response.data.isSuccess) {
                alert(response.data.msg)
            }else{
                alert(response.data.msg)
            }

        }, function error(response) {
            alert(response.data.msg)

        });

        console.log(form)
    }
    
    $scope.remove = function () {
        $('.zixun')[0].style.display = 'none';
    }
});