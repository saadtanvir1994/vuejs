  <template>
  <div>
    <section id="contactus">
      <div class="container">
        <h1 class="text-center font-weight-700">Contact Us</h1>
        <p class="text-center gray-text mb-10">Please feel free to contact us using the form below or <br/>by calling <b>(905) 624-9559</b><br/> with your comments, questions, concerns, or to inquire about our products and services.</p>
        <div class="row">          
          <div class="col-md-8">
            <b-form @submit="onSubmit"  method="POST" >
              <b-form-group id="exampleInputGroup1"
                            label="Your Email*"
                            label-for="cemail">
                <b-form-input id="cemail"
                              v-model="form.email"
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <p class="hasemptyemail showerror">Email Required*</p>
              <p class="hasinvalemail showerror">Invalid Email</p>
              <b-form-group id="exampleInputGroup2"
                            label="Full Name*"
                            label-for="cname">
                  <b-form-input id="cname"
                                type="text"
                                v-model="form.name"                      
                                placeholder="Enter name">
                  </b-form-input>
              </b-form-group>
              <p class="hasemptyname showerror">Name Required*</p>
              <b-form-group id="exampleInputGroup3"
                            label="Your Phone"
                            label-for="cphone">
                <b-form-input id="cphone"
                              type="number"
                              v-model="form.phone"                      
                              placeholder="Enter Phone">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup4"
                            label="Your Message"
                            label-for="cmsg">
                <b-form-textarea id="cmsg"
                                 v-model="form.msg"
                                 placeholder="Enter something"
                                 :rows="4"
                                 :max-rows="6">
                </b-form-textarea>
              </b-form-group>
              <p class="sucessmsg showSuccess">Message Sent Successfully!</p>
<p>{{ rcapt_id }}</p>
              <b-button type="submit" class="btn btn-custom-2-f mb-5" id="btn-submit" variant="none" disabled>Submit</b-button>
            </b-form>
          </div>
          <div class="col-md-4 bg-white">    
            <div class="row mb-5" >
                <div class="col-md-2 text-center"><span class="ti-pin f-30 icon-gradient" ></span></div>
                <div class="col-md-10"><b>Hatchbox Inc. <br/>1550 South Gateway Rd., Suite 229 Mississauga, ON L4W 5G6</b></div>
            </div>
          <div class="row mb-5" >
            <div class="col-md-2 text-center"><span class="ti-mobile f-30 icon-gradient" ></span></div>
            <div class="col-md-10"><b>(905) 624-9559</b></div>
          </div>
          <div class="row mb-3" >
            <div class="col-md-2 text-center"><span class="ti-email f-30 icon-gradient" ></span></div>
            <div class="col-md-10"><b><a href="mailto:hello@taxslips.ca">hello@taxslips.ca</a></b></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

  <script>



  export default { 
    components: {
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone: ''
        
      },      
      haserror: false,
     
      rcapt_id: 0 // will be used later
      
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();     
      if (!this.form.name) {
        $('#cname').addClass("hascerror");
        $('.hasemptyname').css("display","block");

      }else{
       $('.hasemptyname').css("display","none");
     }
     if (!this.form.email) {
      $('#cemail').addClass("hascerror");
      $('.hasemptyemail').css("display","block");
    } else
    if (!this.validEmail(this.form.email)) {
      $('#cemail').addClass("hascerror");
      $('.hasinvalemail').css("display","block");
      $('.hasemptyemail').css("display","none");
    }else{
      $('#cemail').removeClass("hascerror");
      $('.hasinvalemail').css("display","none");

    }
    if(this.form.name && this.form.email){
      var bodymsg = "<b>Name: </b>" + JSON.stringify(this.form.name) + "<br/><br/>"
      + "<b>Email:</b> " +  this.form.email + "<br/><br/>" +
      "<b>Phone Number:</b>" + this.form.phone + "<br/><br/>" +
      "<b>Message:</b>" + this.form.msg;

      Email.send({
        SecureToken : "cf41349b-fa6c-4030-aab5-1cc50e81a841",
        To : 'zahid@technologyelement.com',
        From : "TaxSlips.ca <" + this.form.email  + ">",
        Subject : "Tax Slips Contact Form",
        Body : bodymsg
      }).then(
      message => $('.sucessmsg').css("display","block")  
      );
    }
  },
  validEmail: function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


    // let recaptchaScript = document.createElement('script')
    // recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js&render=explicit')
//     // document.head.appendChild(recaptchaScript)
//     var vm = this;
//   if (window.grecaptcha) {
//     vm.rcapt_id = grecaptcha.render( $('.g-recaptcha')[0], { sitekey : vm.rcapt_sig_key });
//   }
//   var g_recaptcha_response = grecaptcha.getResponse();
//   console.log(g_recaptcha_response);
// if (g_recaptcha_response.length == 0) {
//    this.error = "Compleate captcha challenge";
//    return
// }
  }
  };


  </script>
  <style lang="scss">
  #contactus .form-control {
  min-height: 42px;
  font-size: 12px;
  border: none;
  border-radius: 20px;
  padding: 12px 30px;
  box-shadow: 0 0 5px 0 rgba(170, 170, 170, 0.15);
  }
  #contactus .col-form-label, #contactus small{
  padding-left:19px;
  }

  #contactus  .hascerror {

  border: 1px solid #ff0000 !important;
  }
  .hasemptyemail,.hasinvalemail,.hasemptyname,.sucessmsg{
  display:none;
  }
  .showerror{
  font-size: 13px;
  color: #ff0000;
  padding-left: 19px;
  margin-top: -9px;
  }
  .showSuccess{
  font-size: 13px;
  font-weight:bold;
  color: #70b728;
  padding-left: 19px;
  margin-top: -9px;
  }
  </style>

