'use strict';

/* Services */

angular.module('services', ['ngResource'])
    .factory('Service', function ($resource)
    {
        return $resource('service/:key', {},
            {
            });
    })
;