function MainCtrl($scope, Service)
{
    $scope.callService = function()
    {
        Service.get(function(result)
        {
            alert(result.message);
        });
    };
}