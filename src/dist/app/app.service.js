"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.tasks = [];
    }
    AppService.prototype.add = function (task) {
        if (this.tasks.indexOf(task) == -1) {
            this.tasks.push(task);
        }
    };
    AppService.prototype.delete = function (index) {
        this.tasks.splice(index, 1);
    };
    AppService.prototype.update = function (index, task) {
        if (this.tasks.indexOf(task) == -1) {
            this.tasks[index] = task;
        }
    };
    AppService.prototype.getDataWithObservable = function () {
        return Observable_1.Observable.of(this.tasks);
        // return Observable.throw<any>(new Error("error"));
    };
    AppService.prototype.getDataWithPromise = function () {
        return Promise.resolve(this.tasks);
        // return Promise.reject<any>(new Error("error"));
    };
    AppService.prototype.getData = function () {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    AppService.prototype.postData = function () {
        var _this = this;
        //First we define header before every http call.
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: '2018-08-20',
            title: 'another task',
            description: 'asdf',
            priority: 'high'
        };
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            alert("Something went wrong.");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.extractData = function (res) {
        var errMsg;
        var body = res.json();
        return body;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map