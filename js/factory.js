angular.module('NotPhotos').factory('PhotoFactory', function($http, $q) {
  var PhotoFactory = {
    getPhotos: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/photos')
        .success(function(res) {
          deferred.resolve(res);
        })
        .error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
    },
    editPhoto: function(photo) {
      console.log("you're in edit photo")
      console.log(photo)
      return 'returning from edit';
    }


  }
  return PhotoFactory;
});
