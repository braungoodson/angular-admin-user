'use strict';

angular.module('angularAdminUsersApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },{
      assign: {
        method: 'POST',
        url: '/users/:uid/clients/:cid',
        params: {
          uid: '@uid',
          cid: '@cid'
        }
      },
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
