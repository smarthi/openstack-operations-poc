/**
 * Created by davidsantamaria on 20/2/17.
 */

var app = angular.module('raw.logs.service', ['ngResource']);
app.factory('RawLogsService',[  '$http','$q', Service]);

function Service($http,$q) {
    var service = {};


    service.GetRawLogsBy = GetRawLogsBy;


    return service;

    function GetRawLogsBy(filters, pageState) {
        return $http({
            url: '/rawlogs/getrawlogsBy',
            method: "GET",
            params : {filters: filters, pageState: pageState}
        }).then(handleSuccess, handleError);


    }
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(res) {
        return $q.reject(res.data);
    }
}

