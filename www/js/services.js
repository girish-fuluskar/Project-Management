'use strict';

angular.module('app.services', [])
.constant('apiUrl', '@@apiUrl')


.constant("server", "inmbz2239.in.dst.ibm.com")
.constant("port", "8090")
.constant("baseURL","/psd2api/")

//About Service
//Sign Up Data
.service('signUpData', function($state,$http, $q,$ionicPopup,$ionicLoading) {
    this.getSignedUp = function(signUpDataDtls){
       return $q(function(resolve, reject) {
        var req = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/signup',
            method:'POST',
            headers : {
              'Content-Type':'application/json'
            },
            data: signUpDataDtls
        }
        $http(req)
          .then(function(signedUpData) {
            $state.go('tabsController.dashboard');
            // function to retrive the response
            if (signedUpData.status == 200) {
              resolve(signedUpData);
            } else {
              reject('Sign Up Failed!');
            }
          },
          function(err) {
            reject(err);
          });        
      });
    };
})
//Sign in Service
.service('signInData', function($state,$http, $q,$ionicPopup,$ionicLoading) {
    this.getLoginAuthenticated = function(authTokenForLogin){
       return $q(function(resolve, reject) {
        var req = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/user?id=02689A',
            method:'GET',
            headers : {
              'Authorization' : 'Basic '+authTokenForLogin
            }
            
        }
        $http(req)
          .then(function(loginData) {
            $state.go('tabsController.dashboard');           
            // function to retrive the response
            if (loginData.status == 200) {
              window.localStorage.setItem('authToken', authTokenForLogin);
              resolve(loginData);
            } else {
              reject('Login Failed!');
            }
          },
          function(err) {
            reject(err);
          });        
      });
    };
})

//ChartData Service
.service('chartData', function($state,$http, $q,$ionicPopup,$ionicLoading) {
    var token = window.localStorage.getItem('authToken');  
    this.getEffortExtended = function() {
      return $q(function(resolve, reject) {
        var req = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/effort/extendedStats',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic ' + token,                                        
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
              'Authorization' : 'Basic ' + token,                                        
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
              'Authorization' : 'Basic ' + token,                                        
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
    this.getProductivityDate = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/productivity/dateHistogram',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic ' + token,                                        
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
          .then(function(getProdDate) {
            console.log(getProdDate);            
            // function to retrive the response
            if (getProdDate.status == 200) {
              resolve(getProdDate.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };
    this.getQualityDate = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/quality/dateHistogram',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic ' + token,                                        
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
          .then(function(getQualityDate) {
            console.log(getQualityDate);            
            // function to retrive the response
            if (getQualityDate.status == 200) {
              resolve(getQualityDate.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };
    this.getTeamDate = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/team/dateHistogram',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic ' + token,                                        
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
          .then(function(getTeamDate) {
            console.log(getTeamDate);            
            // function to retrive the response
            if (getTeamDate.status == 200) {
              resolve(getTeamDate.data.response);
            } else {
              reject('Update Expertise Failed!');
            }
          },
          function(err) {
            reject(err);
          });
      });
    };
    this.getProjects = function(){
      return $q(function(resolve, reject) {
        var reqDate = {
            url: 'http://inmbz2239.in.dst.ibm.com:8090/deliverydashboard/BARCA/UKAEDF/projects',
            method:'GET',
            headers : {
              'Accept' : 'application/json',
              'Content-Type':'application/json', 
              'Authorization' : 'Basic ' + token
            }
        }
        $http(reqDate)
          .then(function(getProjectList) {
            console.log(getProjectList);            
            // function to retrive the response
            if (getProjectList.status == 200) {
              resolve(getProjectList.data.response);
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