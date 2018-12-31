<template>
  <div id="home">

    <b-navbar toggleable="md" type="light" class="fixed-top">
     <div class="container">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand href="#">
        <b-img alt="Vue logo" :src="require('../assets/TaxSlip-Logo.png')" class="white-logo"/>
        <b-img alt="Vue logo" :src="require('../assets/TaxSlip-Logo4.png')" class="scroll-logo"/>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">   
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item  class="h-link" href="#home">Home</b-nav-item>
          <b-nav-item class="h-link" href="#aboutus">About</b-nav-item>
          <b-nav-item class="h-link" href="#features">Features</b-nav-item>
          <b-nav-item class="h-link" href="#pricing">Pricing</b-nav-item>
          <b-nav-item class="h-link" href="#contactus">Contact</b-nav-item>
          <b-nav-item  class="btn btn-custom" href="https://app.taxslips.ca/#/accounts/Login" target="_self">Login</b-nav-item>
          <b-nav-item  class="btn btn-custom-2" href="https://app.taxslips.ca/#/accounts/Registration/" target="_self">SignUp</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>

  <!-- navbar-1.vue -->

</div>
</template>

<script>
export default {
  name: 'mainheader',
  mounted(){
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css({"background" : "#fff", "box-shadow" : "2px 5px 19px 1px rgba(0,0,0,0.05)", "padding-top" : "0px"});
          $(".navbar-nav").addClass("scroll-nav");
          $(".scroll-logo").css("display","block");
          $(".white-logo").css("display","none");
        }

        else{
         $(".navbar").css("padding-top","8px");
         $(".navbar-nav").removeClass("scroll-nav");
         $(".white-logo").css("display","block");
         $(".scroll-logo").css("display","none");
       }
     })
      // Href Scrolling
      $("a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;
        var position = position - 100;
        $("body, html").animate({
          scrollTop: position
        } ,1000 );
      });
    });
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
