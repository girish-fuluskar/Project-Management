'use strict';

angular.module('app.services', [])
.constant('apiUrl', '@@apiUrl')


.constant("server", "inmbz2239.in.dst.ibm.com")
.constant("port", "8090")
.constant("baseURL","/psd2api/")

//About Service
.service('chartData', function($state,$http, $q,$ionicPopup,$ionicLoading) {
      
    this.getEffortExtended = function() {
      return $q(function(resolve, reject) {
        var req = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/effort/extendedStats',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic dGFubWF5LmFtYnJlQGluLmlibS5jb206cGFzc3dvcmQwMQ==',                                        
              'fromDate' : '2016-01-01T00:00:00.000+0530', 
              'toDate' : '2016-07-15T00:00:00.000+0530'
            },
            params: {                    
                      projectId: 'CI002',
                      sprintId: 'CI0021'
                  }
        }
        $http(req)
          .then(function(effortExtendedData) {
            console.log(effortExtendedData);            
            // function to retrive the response
            if (effortExtendedData.status == 200) {
              resolve(effortExtendedData.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });        
      });
    };
    this.getEffortDate = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/spentEffort/dateHistogram',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic dGFubWF5LmFtYnJlQGluLmlibS5jb206cGFzc3dvcmQwMQ==',                                        
              'fromDate' : '2016-01-01T00:00:00.000+0530', 
              'toDate' : '2016-03-05T00:00:00.000+0530',
              'interval' : '1w'
            },
            params: {                    
                      projectId: 'CI002',
                      sprintId: 'CI0021'
                  }
        }
        $http(reqDate)
          .then(function(effortDateData) {
            console.log(effortDateData);            
            // function to retrive the response
            if (effortDateData.status == 200) {
              resolve(effortDateData.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };    
    this.getBurndownData = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/effort/burndown',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic dGFubWF5LmFtYnJlQGluLmlibS5jb206cGFzc3dvcmQwMQ==',                                        
              'fromDate' : '2016-01-01T00:00:00.000+0530', 
              'toDate' : '2016-04-12T00:00:00.000+0530',
              'interval' : '1w'
            },
            params: {                    
                      projectId: 'CI002',
                      sprintId: 'CI0021'
                  }
        }
        $http(reqDate)
          .then(function(burndownData) {
            console.log(burndownData);            
            // function to retrive the response
            if (burndownData.status == 200) {
              resolve(burndownData.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };
    this.getSpentEffortExtended = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/spentEffort/extendedStats',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic bWFuc2kuYmhpc2VAYmFyY2xheXMuY29tOnBhc3N3b3JkMDE=',                                        
              'fromDate' : '2015-06-01T00:00:00.000+0530', 
              'toDate' : '2016-07-15T00:00:00.000+0530'
            },
            params: {                    
                      projectId: 'CI002',
                      sprintId: 'CI0021'
                  }
        }
        $http(reqDate)
          .then(function(getSpentEffort) {
            console.log(getSpentEffort);            
            // function to retrive the response
            if (getSpentEffort.status == 200) {
              resolve(getSpentEffort.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };
})