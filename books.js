//products directives

(function() {
  var app = angular.module('book-directives', []);

 //display images
   //Directive and GalleryController template displays tabs content
   app.directive('bookGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'book-gallery.html',
      controller: function() {
        this.current = 0;

        //set each image
        this.setCurrent = function(imageNumber) {
          this.current = imageNumber || 0;
        };
      },
        controllerAs: 'gallery' //specify gallery as ng-controller to use index.html
    };
  });


   //Directive template displays product name and price
   app.directive('bookTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'book-title.html'
    };
  });

  //Directive template displays product description
   app.directive('bookDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'book-description.html'
    };
  });

   //Directive template displays product specifications
   app.directive('bookDetails', function(){
    return {
      restrict: 'A',
      templateUrl: 'book-details.html'
    };
  });

    //Directive template displays product reviews
   app.directive('bookReviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'book-reviews.html'
    };
  });

    //Directive and TabController template displays tabs content
   app.directive('bookTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'book-tabs.html',
      controller: function() {
        this.tab = 1;

      //set each tab
      this.setTab = function(tab) {
        this.tab = tab;
      };

      //if tab is selected display content
      this.isSet = function(tab) {
        return (this.tab === tab);
      };
        },
        controllerAs: 'tab' //specify tab as controller to use index.html
    };
  });

}) ();