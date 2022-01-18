<template>
    <div>
    <div style="height:50px"></div>
    <h1 class="text-center">Locate Us</h1>
    <div style="height:50px"></div>
    <v-row>
        <v-col>
           <div class="text-center">
            <h1>Eldora Studios</h1>
            <h5>123 Street Street</h5>
            <h5>Melbourne VIC3000</h5>
            <h6>Phone : 0123456789</h6>
            </div>
        </v-col>
        <v-col>
            <div id="map"></div>
        </v-col>
    </v-row>
    <br>
    <br>
    
    </div>
    
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=<key>&amp;callback=vueGoogleMapsInit" async="" defer=""></script>
<script>
import $Scriptjs from 'scriptjs';

export default {
    name: "Map",

    data() {
        return {
        map: null,
        marker: null,
        DEFAULT_LAT: -37.814,
        DEFAULT_LNG: 144.9633,
        lastLat: null,
        lastLng: null
        }
    },

    mounted(){
        $Scriptjs("https://maps.googleapis.com/maps/api/js?key=AIzaSyAvLslRABlztKEgsxosGb86-umT8vTLsXo&libraries=geometry,places", () => {
      this.initMap();
    });
    },

    methods:{
        initMap() {
            this.geocoder = new google.maps.Geocoder();
            this.map = new google.maps.Map(document.getElementById("map"), {
                center: {
                lat: this.DEFAULT_LAT,
                lng: this.DEFAULT_LNG
                },
                zoom: 15,
                gestureHandling: "greedy"
            });
            google.maps.event.addListener(this.map, "click", (event) => {
                this.lastLat = event.latLng.lat();
                this.lastLng = event.latLng.lng();
                this.updateMarker(event.latLng);
            });
        },

        updateMarker(latLng) {
            if (!this.marker) {
                this.marker = new google.maps.Marker({
                map: this.map
                });
            }
            this.marker.setPosition(latLng);
        }


    }
}

</script>

<style>
#map {
  width: 20cm;
  height: 8cm;
}
</style>