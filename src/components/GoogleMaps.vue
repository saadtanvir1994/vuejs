<template>
  <div>
    
   
    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
       
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 43.6321242, lng: -79.6142191 },
      markers: [
      {
        position:{lat: 43.6321242, lng: -79.6142191}
      }
      ],
      places: [],
      currentPlace: '1550 S Gateway Rd 229, Mississauga, ON, Canada'
    };
  }
};
</script>