import {MainController} from './controllers/main-controller.es6'
import {SecondaryController} from './controllers/secondary-controller.es6'
import {Computer} from './services/compute-service.es6'



angular.module('app', [])
    .controller('MainController', MainController)
    .controller('SecondaryController', SecondaryController)
    .service('computer', Computer);


