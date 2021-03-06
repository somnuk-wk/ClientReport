/**
* @controller touch002Controller -
*/
app.controller("touch002Controller", function($scope, models, $rootScope, dbService){

  /**
  * Start query.
  * Trigger when user click ((display)) button.
  */
  $scope.$on("startQuery", function(event, data){

    // Parse query.
    var query = models.parseQuery(data);

    // Start request.
    dbService.post("/report/touch001", query, function(data){
      $rootScope.$broadcast("displayGraph", data);
      $rootScope.$broadcast("displayTable", data);
    });

  });
});
