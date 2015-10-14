angular.module('NotPhotos').controller('TheController', TheController);

function TheController(PhotoFactory) {
  var self = this;

  this.title = "Wagwan Photomon?"

  PhotoFactory.getPhotos()
    .then(function(res) {
      self.photos = res;
    })

  this.edit = PhotoFactory.editPhoto()

}