(function(){
'use strict';
angular.module("LunchCheck",[])
.controller('LunchCheckController',fLunchCheck);

fLunchCheck.$inject = ['$scope'];
function fLunchCheck($scope)
{
    $scope.ListFood = "";
    $scope.MessageNotice ="";
    $scope.btnCheck_Click = function()
    {
      if(CheckNull($scope.ListFood)==1)
      {
        $scope.MessageNotice= "Please enter data first";
      }
      else
      {
        if(CountList($scope.ListFood)<4)
        {
          $scope.MessageNotice= "Enjoy!";
        }
        else
        {
          $scope.MessageNotice= "Too much!";
        }
      }
      console.log('AA');
    };
}

function CheckNull(string)
{
    if(string === "")
    {
        return 1;
    }
    return 0;
}

function CountList(string)
{
  var ArrString = string.split(",");
  return ArrString.length;
}


})();