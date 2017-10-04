
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

        if(!form || Object.keys(form).length <= 8) {
            return alert('请填写表单！');
        }
        console.log(form)

    }
});