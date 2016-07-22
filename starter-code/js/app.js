/* setup your angular app here */
var app = angular.module("FruitVegSort", []);

app.controller("FVSCtrl", ['$scope', function($scope){
    var fruitVeg = fruit.concat(vegetables);
    $scope.originalFruit = fruit;
    $scope.originalVegetables = vegetables;
    $scope.currentFruit = "";
    $scope.currentVegetable = "";
    $scope.fruitCount = 0;
    $scope.vegCount = 0;
    $scope.win = false;
    $scope.fail = false;
    $scope.allFruit = [];
    $scope.allVegetables = [];
    $scope.fruitAndVeg = fruitVeg;
    
    var shuffleArray = function(array) {
    var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    shuffleArray($scope.fruitAndVeg);

    $scope.winCheck = function(){
        
        for (var i = 0; i < $scope.allFruit.length; i++) {
            if ($scope.originalFruit.indexOf($scope.allFruit[i]) == -1) {
                $scope.fail = true;
                return false;
            }
        }
        for (var i = 0; i < $scope.allVegetables.length; i++) {
            
            if ($scope.originalVegetables.indexOf($scope.allVegetables[i]) == -1) {
                $scope.fail = true;
                return false;
            }
        }
        $scope.win = true;
        console.log($scope.win);
    }

    $scope.toFruit = function(idx){
        $scope.allFruit.push($scope.fruitAndVeg[idx]);
        $scope.fruitAndVeg.splice(idx, 1);
        if ($scope.fruitAndVeg.length == 0) {
            $scope.winCheck();
        }
    }

    $scope.toVegetable = function(idx){
        $scope.allVegetables.push($scope.fruitAndVeg[idx]);
        $scope.fruitAndVeg.splice(idx, 1);
        if ($scope.fruitAndVeg.length == 0) {
            $scope.winCheck();
        }
    }

    $scope.toPoolFromFruit = function(idx){
        $scope.fruitAndVeg.push($scope.allFruit[idx]);
        $scope.allFruit.splice(idx, 1);
        $scope.win = false;
        $scope.fail = false;
    }

    $scope.toPoolFromVeg = function(idx){
        $scope.fruitAndVeg.push($scope.allVegetables[idx]);
        $scope.allVegetables.splice(idx, 1);
        $scope.win = false;
        $scope.fail = false;
    }

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);