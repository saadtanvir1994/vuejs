<template>
  <div class="home">    
    <main-header/>
    <jumbotron/>
    <!-- About Us --> 
    <section  id="aboutus">
    	<div class="container">
    	<h1 class="font-weight-700  text-center mt-5">About TaxSlips</h1>
      <p class="gray-text text-center pb-10">Here is a detail Introduction of what does TaxSlips do.</p>
    	<div class="row pb-10">
    		<div class="col-md-6">
    			<p>TaxSlips is cloud based Canadian software which takes the stress out of filing your TaxSlips.</p>
    			<p>It offers T4, T4A and RL-1, both electronic and paper filing.</p>
    			<p>One Click to adjust/unadjust slips individually/bulk.</p>
    			<p>It records complete change log of data with timestamp.</p>
    			<p>It gives security features like 2 Step Authentication and sensitive data masking.</p>
    			<p>TaxSlips integrates with market leading Payroll software <span class="text-orange"><a href="https://www.simplepay.ca/" target="_blank"><b>SimplePay</b></a></span>.</p>
    			<p>It gives you data import options in XML and CSV formats.</p>
    		</div>
    		<div class="col-md-6">
    			<b-img alt="Vue logo" :src="require('../assets/masking_mockup4.png')" class="img-fluid"/>
    		</div>
    	</div>
    </div>
    </section>
    <!-- Section 1 Starts  -->
    <section class=" text-center features-2" id="features">
    	<div class="container">
      <h1 class="font-weight-700 mt-10">TaxSlips Features</h1>
      <p class="gray-text">Here is a detail description of what does TaxSlips do.</p>
      <div class="row features mt-5">
        <div class="col-md-3">
          <div class="content">
            <span class="ti-cloud font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Cloud Based Software</h6 >
            <p class="gray-text"> TaxSlips is cloud based Canadian software which takes the stress out of filing your taxslips.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="content">
            <span class="ti-files font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Electronic Filing</h6 >
            <p class="gray-text">TaxSlips offers Electronic filing for T4, T4A and RL-1.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="content">
            <span class="ti-clipboard font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Paper Filing</h6 >
            <p class="gray-text">TaxSlips offers Paper filing for T4, T4A and RL-1.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="content">
            <span class="ti-reload font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Automated PIER</h6 >
            <p class="gray-text">TaxSlips provides you automated PIER.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="content">
            <span class="ti-hand-point-up font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Single Click</h6 >
            <p class="gray-text"> One Click to Adjust/Unadjust Slips Individually/Bulk.</p>
          </div>
        </div>
         <div class="col-md-3">
          <div class="content">
            <span class="ti-eye font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Eye on Change Log</h6 >
            <p class="gray-text">TaxSlips Keeps Record of Complete Change log of Data with Timestamp.</p>
          </div>
        </div> 
         <div class="col-md-3">
          <div class="content">
            <span class="ti-server font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Highly Secure</h6 >
            <p class="gray-text">TaxSlips gives security features like 2 Step Authentication and Sensitive Data Masking.</p>
          </div>
        </div> 
         <div class="col-md-3">
          <div class="content">
            <span class="ti-import font-60 text-center icon"></span>
            <h6 class="font-weight-600 mt-4" >Data Import</h6 >
            <p class="gray-text">TaxSlips gives you Data Import Options in XML and CSV formats.</p>
          </div>
        </div>    
         
        

      </div>
      </div>
    </section>

    <section class=" pricing-table" id="pricing">
    	<div class="container plr-0">
            <h1 class="text-center font-weight-700 mb-10">Pricing Table</h1>
            <div class="row pricing-wrapper">
            	<div class="col-md-4">
            		<div>
            			<h2 class="text-center pb-4">T4A</h2>
            			<hr/>
            			<p class="text-center pb-5"> 
            				<sup class="price-currency">$</sup><span class="price-value">25</span><br/><span class="text-center small-font">(T4A Summary Charges)</span>
            			</p>
            			<p class="text-center">
            				<span class="main-price">$3.00</span><br/>
            				<span class="text-center small-font">1-25 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.75</span><br/>
            				<span class="text-center small-font">26-50 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.50</span><br/>
            				<span class="text-center small-font">51-75 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.25</span><br/>
            				<span class="text-center small-font">76-100 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.00</span><br/>
            				<span class="text-center small-font">100 Above Slips</span>
            			</p>


            		</div>
            	</div>
            	<div class="col-md-4">
            		<div>
            			<h2 class="text-center pb-4">T4</h2>
            			<hr/>
            			<p class="text-center pb-5"> 
            				<sup class="price-currency">$</sup><span class="price-value">25</span><br/><span class="text-center small-font-2">(T4 Summary Charges)</span>
            			</p>
            			<p class="text-center">
            				<span class="main-price">$3.00</span><br/>
            				<span class="text-center small-font-2">1-25 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.75</span><br/>
            				<span class="text-center small-font-2">26-50 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.50</span><br/>
            				<span class="text-center small-font-2">51-75 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.25</span><br/>
            				<span class="text-center small-font-2">76-100 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.00</span><br/>
            				<span class="text-center small-font-2">100 Above Slips</span>
            			</p>


            		</div>
            	</div>
            	<div class="col-md-4">
            		<div>
            			<h2 class="text-center pb-4">RL-1</h2>
            			<hr/>
            			<p class="text-center pb-5"> 
            				<sup class="price-currency">$</sup><span class="price-value">25</span><br/><span class="text-center small-font">(RL-1 Summary Charges)</span>
            			</p>
            			<p class="text-center">
            				<span class="main-price">$3.00</span><br/>
            				<span class="text-center small-font">1-25 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.75</span><br/>
            				<span class="text-center small-font">26-50 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.50</span><br/>
            				<span class="text-center small-font">51-75 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.25</span><br/>
            				<span class="text-center small-font">76-100 Slips</span>
            			</p>
            			<hr/>
            			<p class="text-center">
            				<span class="main-price">$2.00</span><br/>
            				<span class="text-center small-font">100 Above Slips</span>
            			</p>


            		</div>
            	</div>

                   
            </div>
    </div>
    </section>
    <!-- Pricing Table Ends -->
    <!-- Contact Us Starts -->
    
    <contact-form></contact-form>

<!--     <invisible-captcha sitekey="6LeYdoQUAAAAACVDUn8bLf9e7Kt7TWxbCYeeSIU8"/>
 -->    <google-maps/>
    <main-footer/> 
    




  </div>
</template>

<script>
// @ is an alias to /src
import mainHeader from '@/components/Header.vue'
import mainFooter from '@/components/Footer.vue'

import jumbotron from '@/components/Jumbotron.vue'
import contactForm from '@/components/ContactForm.vue'
import GoogleMaps from '@/components/GoogleMaps.vue'
export default {
  name: 'home',
  components: {
    mainHeader,jumbotron,contactForm,GoogleMaps,mainFooter
  }
  };

</script>
