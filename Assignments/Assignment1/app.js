(function (){
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.check = function () {
    var string = $scope.dishes.split(',');
    var valueOfStr = string.length;
    if(valueOfStr <= 3) {
      $scope.msg="Enjoy!!!";
    }else {
      $scope.msg = "Too much!!!";
    }
  };
}
})();
