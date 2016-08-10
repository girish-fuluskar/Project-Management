angular.module('app.controllers', [])
     
.controller('dashboardCtrl', function($scope, chartData) {  
  $scope.effortExtended = chartData.getEffortExtended()
  .then(function(effortExtendedData) {
        $scope.effortExtended = effortExtendedData;
        console.log($scope.effortExtended);
  }, function(err) {            
      var alertPopup = $ionicPopup.alert({
          title: 'Search Failed!',
          template: 'There was some problem with server.'
      });
  });
  $scope.effortDate = chartData.getEffortDate()
  .then(function(effortdata){
    var effortDateLabel = [];
    var effortDateSeries = [];
    var data1 = [];        
    for(var i=0;i<effortdata[0].buckets.length;i++){
      var a=[];
      effortDateLabel.push(new Date(effortdata[0].buckets[i].key_as_string).toISOString().slice(0,10));
      //loop for getting value with bucket                  
      for(var j=0;j<effortdata[0].buckets[i].aggregations.length;j++){
        a.push(effortdata[0].buckets[i].aggregations[j].value);                
      }
      data1.push(a);
    }
    //loop for names from bucket, which to take only once
    for(var h=0;h<effortdata[0].buckets[h].aggregations.length;h++){
      effortDateSeries.push(effortdata[0].buckets[h].aggregations[h].name);            
    }
    $scope.effortDateLabel = effortDateLabel;
    $scope.effortDateSeries = effortDateSeries;         
    var realignData = _.unzip(data1);    
    $scope.effortDateData = realignData;
    $scope.effortDate = effortdata;
    console.log($scope.effortDate);
  }, function(err){
    var alertPopup = $ionicPopup.alert({
        title: 'Search Failed!',
        template: 'There was some problem with server.'
    });
  });
  $scope.burndownData = chartData.getBurndownData()
    .then(function(burndowndata){
      var burndownLabel = [];
      var burndownSeries = [];
      var data1 = [];
      for(var i=0;i<burndowndata[0].buckets.length;i++){
        var a=[];
        burndownLabel.push(new Date(burndowndata[0].buckets[i].key_as_string).toISOString().slice(0,10));
        //loop for getting value with bucket                  
        for(var j=0;j<burndowndata[0].buckets[i].aggregations.length;j++){
          a.push(burndowndata[0].buckets[i].aggregations[j].value);                
        }
        data1.push(a);
      }
      //loop for names from bucket, which to take only once
      for(var h=0;h<burndowndata[0].buckets[h].aggregations.length;h++){
        burndownSeries.push(burndowndata[0].buckets[h].aggregations[h].name);            
      }
      $scope.burndownLabel = burndownLabel;
      $scope.burndownSeries = burndownSeries;         
      var realignBurndownData = _.unzip(data1);    
      $scope.burndownData = realignBurndownData;      
      console.log($scope.burndowndata);
    }, function(err){
    var alertPopup = $ionicPopup.alert({
        title: 'Search Failed!',
        template: 'There was some problem with server.'
    });
  });
  $scope.spentEffortExtended = chartData.getSpentEffortExtended()
    .then(function(spentEffortData){
      for(var k=0;k<spentEffortData.length;k++){

      }
    },function(err){
      var alertPopup = $ionicPopup.alert({
        title: 'Search Failed!',
        template: 'There was some problem with server.'
    });
  });

  //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: true,

        // Number - Number of animation steps
        animationSteps: 60,

        // String - Animation easing effect
        animationEasing: "easeOutQuart",

        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: null,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        // Number - The scale starting value
        scaleStartValue: null,

        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",

        // Number - Pixel width of the scale line
        scaleLineWidth: 1,

        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: false,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 12,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: "#666",

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    }; 
})
   
.controller('reportCtrl', function($scope) {

})
   
.controller('updatesCtrl', function($scope) {

})
   
.controller('addNewSprintCtrl', function($scope) {

})
      
.controller('signUpCtrl', function($scope) {

})
   
.controller("signInCtrl", function($scope) {
  /*$scope.click =  function(){
    //$ionicLoading.show();
    //clearing the userProfile at the time of user login
    $scope.dataFromService=[];
    $scope.authTokenForLogin= btoa(this.emailid+":"+this.password);

    $http.defaults.headers.common.Authorization="Basic "+$scope.authTokenForLogin;
    $http.get('http://169.44.112.56:8084/psd2demoapp/user/profile').then(function(resp){
        $ionicLoading.hide();
        console.log('Success', resp);
        $scope.dataFromService=resp;
     //   StorageService.remove($scope.dataFromService);
        //StorageService.add($scope.dataFromService) ;
        $state.go('tabsController.dashboard');
         // JSON object
        // $scope.allAccountDetails=resp;
      }, function(err){
        console.error('ERR', err);
        $scope.dataFromService=err;
        //$ionicLoading.hide();
      });
  }*/
})


.controller('MyCtrl', function($scope) {
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
})    

/*.controller("ExampleController", function($scope) {
 
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [18, 38, 40, 49, 81, 43, 77]
    ];
    
    $scope.dohnutdata = [65, 59, 80, 81, 56, 55, 40];
    $scope.piedata = [65, 59, 80, 81, 56, 55, 40];
    $scope.polardata = [65, 59, 80, 81, 56, 55, 40];
    $scope.numberdata = 2345;

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];


     //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: true,

        // Number - Number of animation steps
        animationSteps: 60,

        // String - Animation easing effect
        animationEasing: "easeOutQuart",

        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: null,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        // Number - The scale starting value
        scaleStartValue: null,

        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",

        // Number - Pixel width of the scale line
        scaleLineWidth: 1,

        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: false,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 12,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: "#666",

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    }; 
})*/

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

      // An alert dialog
      $scope.showAlert = function(val, val1) {
        var alertPopup = $ionicPopup.alert({
          title: val,
          template: val1,
        });
        alertPopup.then(function(res) {
          //console.log('Thanks');
        });
      };

      // Confirm popup code
      $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Ionic Popup',
          template: 'This is confirm popup'
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You clicked on "OK" button');
          } else {
            console.log('You clicked on "Cancel" button');
          }
        });
      };

      // Prompt popup code
      $scope.showPrompt = function() {
        var promptPopup = $ionicPopup.prompt({
          title: 'Ionic Popup',
          template: 'This is prompt popup'
        });
        promptPopup.then(function(res) {
          if(res) {
            console.log('Your input is ',res);
          }
          else
          {
            console.log('Please enter input');
          }
        });
      };

      // showpopup method code
      $scope.showPopup = function() {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
          template: ' Enter Password<input type="password" ng-model="data.userPassword">   <br> Enter Confirm Password  <input type="password" ng-model="data.confirmPassword" > ',
          title: 'Enter Password',
          subTitle: 'Please use normal things',

          scope: $scope,
          buttons: [
            { text: 'Cancel' },
            {
              text: '<b>Save</b>',
              type: 'button-positive',
              onTap: function(e) {
                if (!$scope.data.userPassword) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  return $scope.data;
                }
              }
            },
          ]
        });
        myPopup.then(function(res) {

          if(res){

              if(res.userPassword==res.confirmPassword)
              {
                console.log('Password Is Ok');
              }
              else
              {
                console.log('Password not matched');
              }
          }
          else
          {
            console.log('Enter password');
          }


        });

      };

    });