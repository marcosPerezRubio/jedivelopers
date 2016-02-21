'use strict';

(function() {

angular.module('jedivelopersApp')
  .controller('MainController', ['$scope','$http', function($scope, $http) {
    $scope.email = "" ;
    $scope.phone = "";
    $scope.name = "";
    $scope.item = {
      name:"",
      level : 0
    };


    function Item(name,level){
      return {
        name: name,
        level: level
      }
    }

    $scope.master = {};


    $scope.addItem = function(){
      console.log ( $scope.item.name + ' ' + $scope.item.level + ' ');
       $scope.skills.push(new Item($scope.item.name,$scope.item.level));
      $scope.item.name = "";
      $scope.item.level = 3;
    };

    function findItem(name){
      var item = null;
      for (var index in $scope.skills){
        console.log('item for ' + JSON.stringify($scope.skills[index]));
        if($scope.skills[index].hasOwnProperty('name')){
          if($scope.skills[index].name == name){
            item = $scope.skills[index];
            break;
          }
        }
      }
      return item;
    }

    $scope.deleteItem = function(name){
        var item  =findItem(name);
        console.log('item found ' + JSON.stringify(item));
        var index = $scope.skills.indexOf(item);
        console.log('index is ' + index);
        $scope.skills.splice(index,1);
      };

    $scope.reset = function () {
      $scope.name = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.item.name = "";
      $scope.item.level = 3;
      $scope.skills = [];
      $scope.error = null;
      $scope.message = null;
    };

    $scope.submitForm = function(){
        console.log('hone ' + JSON.stringify($scope.phone));
        console.log('mail ' + JSON.stringify($scope.email));
        $http.post('/api/things',{name:$scope.name, email:$scope.email ,skills: $scope.skills, phone:$scope.phone})
      .then(function(data){
          console.log('data ' + JSON.stringify(data));
          $scope.message = "Thank you!";
          $scope.error = null;

      },function(err){
        console.log('error ' + JSON.stringify(err));
        $scope.error = "Something went wrong";
        $scope.message = null;
      });
        $scope.reset();


    };

    $scope.reset();



    $scope.getNumber = function() {
      alert('The number is: [' + $scope.item.level + ']');
    };

    $scope.onChange = function(){
      console.log('The number is Changed ', $scope.item.level);
    };

  }]);


})();
