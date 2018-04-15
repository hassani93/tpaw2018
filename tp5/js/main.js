var app;

window.onload = function () {

    app = new Vue({
        el: '#weatherApp',
        data: {
            loaded: false,
            formCityName: '',
            message: '',
            messageForm: '',
            cityList: [{
                name : 'Paris',
                temp : null
            }],
            cityWeather : null,
            cityWeatherLoading : false
        },

        // mounted est exécuté une fois l'application VUE totalement disponible
        mounted : function(){
            this.loaded = true;
            this.readData();
        },
        // define methods under the `methods` object
        methods: {
            readData: function (event) {
                console.log(JSON.stringify(this.cityList)); // va afficher la liste des villes
                // JSON.stringify permet transfomer une liste en chaine de caractère

                console.log('this.loaded:', this.loaded); // va afficher 'this.loaded: true'
            },
          addCity: function (event) {
              event.preventDefault(); // pour ne pas recharger la page à la soumission du formulaire
                if(this.isCityExist(this.formCityName)){
                    this.messageForm = 'existe déjà';
                }else{
                    this.cityList.push({name : this.formCityName, temp : null});
                    // `this` inside methods points to the Vue instance
                    this.messageForm = '';
                    this.formCityName = '';
                }
          },
          isCityExist: function (_cityName){

            // la méthode 'filter' retourne une liste contenant tous les items ayant un nom égale à _cityName
            // doc. sur filter : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
            if( this.cityList.filter(item => 
                                        item.name.toUpperCase() == _cityName.toUpperCase()
                                    ).length>0){
                return true;
            }else{
                return false;
            }
          },
          remove: function(_city){
            // on utilise 'filter' pour retourne une liste avec tous les items ayant un nom différent de _city.name
              this.cityList = this.cityList.filter(item => 
                item.name != _city.name
            );
          },
          meteo : function (_city){
              console.log('meteo',_city.name);

              this.cityWeatherLoading = true;

              fetch('https://demo.bilelz.fr/owmap/?q='+_city.name+'&units=metric&lang=fr&appid=0ada432b59deb9716c357092c5f79be6')
              .then(function(response) {
                return response.json();
              })
              .then(function(json) {
                app.cityWeatherLoading = false;

                // test du code retour
                // 200 = OK
                // 404 = city not found 
                if(json.cod === 200){
                    app.cityWeather = json;
                    app.message = null;
                }else{
                    app.cityWeather = null;
                    app.message = 'Météo introuvable pour ' + _city.name 
                                    + ' (' + json.message+ ')';
                }
                
              });
              
          }
        },
        computed : {
            cityWheaterDate: function(){
                if(this.cityWeather !== null){
                    var date = new Date(this.cityWeather.dt*1000);

                    // ici l'operateur ternaire pour tester si les minutes sont < à 10
                    // pour y ajouter un 0 
                    // 9 minutes deviendra 09
                    // 11 restera 11
                    var minutes = (date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes();
                    return date.getHours()+':'+minutes;
                }else{
                    return '';
                }
                
            },
            cityWheaterSunrise: function(){
                if(this.cityWeather !== null){
                    var date = new Date(this.cityWeather.sys.sunrise*1000);
                    var minutes = (date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes();
                    return date.getHours()+':'+minutes;
                }else{
                    return '';
                }


                
            },
            cityWheaterSunset: function(){
                if(this.cityWeather !== null){
                    var date = new Date(this.cityWeather.sys.sunset*1000);
                    var minutes = (date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes();
                    return date.getHours()+':'+minutes;
                }else{
                    return '';
                }
               
            }
        }
    });

}