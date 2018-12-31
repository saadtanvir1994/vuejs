<template>
	<div class="page-wrapper">
        <!-- ******Header****** -->
        <header id="header" class="header container-fluid">
            <div class="container">
                <div class="branding">
                    <h1 class="logo">
                        <router-link to="/">
                            <b-img alt="Vue logo" :src="require('../assets/TaxSlip-Logo2.png')" class="img-fluid "/>
                        </router-link>
                    </h1>
                </div><!--//branding-->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">T4 Guide</li>
                </ol>
            </div><!--//container-->
        </header><!--//header-->
        <div class="doc-wrapper">
            <div class="container">
                <div id="doc-header" class="doc-header text-center">
                    <h1 class="doc-title"><i class="icon fa fa-paper-plane mt-5"></i> T4 Filing Guide</h1>
                    <div class="meta"><i class="far fa-clock"></i> Year End Compliance</div>
                </div><!--//doc-header-->
                <div class="doc-body row">
                    <div class="doc-content col-md-9 col-12 order-1">
                        <div class="content-inner">
                            <section id="transmitter-setup" class="doc-section">
                                <h2 class="section-title">Transmitter Setup</h2>
                                <div class="section-block">
                                    <ol>
                                        <li>Transmitter must be setup before T4 Summary is generated. Transmitter is not imported from SimplePay.</li>
                                        <li>To create a Transmitter, go to <strong> Manage &gt;&nbsp;Setup </strong></li>
                                        <li><strong>Transmitter No:</strong> This is either provided by CRA to you, OR you can use the default transmitter # MM555555</li>
                                    </ol>
                                </div>
                            </section><!--//doc-section-->
                            <section id="adjustment-options" class="doc-section">
                                <h2 class="section-title">Adjustment Options</h2>
                                <div id="cpp-qpp-adjustment"  class="section-block">
                                    <h3 class="block-title">CPP/QPP Adjustments</h3>
                                    <ol class="level4">
                                        <li>Only one option can be selected i.e A or B</li>
                                        <li>Option A – Adjust CPP/QPP if over maximum/under minimum
                                            <ol class="alphabets" type="a">
                                                <li>CPP will be calculated within the range where the maximum CPP is the lesser of:(<br><code>CPP Pensionable Earnings x 4.95% (5.40% for QPP))</code><br/> OR <br/><code>Maximum employee contribution of $2,564.10 ($2,797.20 for QPP)</code></li>
                                                 <li>And the minimum CPP is the lesser of:<br>(<code>(CPP Pensionable Earnings – $3,500.00) x 4.95% % (5.40% for QPP))</code> <br/>OR<br/> <code>Maximum employee contribution of $2,564.10 ($2,797.20 for QPP)</code></li>
                                            </ol>
                                        </li>
                                        <li class="item3">Option B – Adjust CPP/QPP based on number of pensionable Pay Periods
                                            <ol class="alphabets" type="a">
                                                <li class="item1">CPP will be calculated as:<br><code>(CPP Pensionable Earnings – Prorated Deduction) x 4.95%</code></li>
                                                <li class="item2">QPP will be calculated as:<br><code>(QPP Pensionable Earnings – Prorated Deduction) x 5.40%</code></li>
                                                <li class="item3">The prorated deduction will be calculated as:<br/><code>(Number of pensionable Periods / maximum number of pensionable Periods) x $3,500.00M</code></li>
                                            </ol>
                                        </li>
                                    </ol>
                                     <div class="callout-block callout-success">
                                        <div class="icon-holder">
                                            <i class="fa fa-thumbs-up"></i>
                                        </div><!--//icon-holder-->
                                        <div class="content">
                                            <h4 class="callout-title">Useful Tip:</h4>
                                            <ul>
                                            <li>CPP/QPP discrepancies are adjusted to and from tax deducted as necessary. Option B is the default CPP/QPP adjustment option</li>
                                            <li>Pensionable periods are entered in each employee’s T4 slip</li>
                                            <li>Maximum number of pensionable periods are calculated from Pay Period type selected in Employee setup</li>
                                            <li>Example, in employee setup Pay period is selected as 12-Monthly, In T4 Slips, Pensionable Periods are selected as 10, Prorated deduction will be (10/ 12 * 3500) i.e. 2916.67 Instead of 3500</li>
                                        </ul>
                                        </div><!--//content-->
                                    </div>
                                   <!--//code-block-->
                                </div><!--//section-block-->
                                <div id="ei-adjustment"  class="section-block">
                                    <h3 class="block-title">E.I Adjustments</h3>
                                    <ol>
                                        <li class="item1"> Option A – Adjust EI premiums if over annual maximum (select alone or with option B or C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1"> If this option is selected, the EI will only be adjusted if it is greater than:<br> <code>(EI Insurable Earnings x 1.63% (1.27% in Québec))</code><br/>OR<br/><code>($836.19 ($651.51 in Québec))</code></li>
                                            </ol>
                                        </li>
                                        <li class="item2"> Option B – Adjust EI premiums based on Insurable Earnings (select only one of options B and C)</li>
                                        <li class="item1"> If this option is selected, the EI will be calculated as:<br><code>EI Insurable Earnings x 1.63% (1.27% in Québec)</code></li>
                                        <li class="item3"> Option C – Adjust insurable earnings based on EI premiums (select only one of options B and C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1"> This option assumes the entered amount for EI deducted is correct. When this option is selected, EI insurable earnings will be calculated as the minimum of:<br><code>(EI Deducted / 1.63% (1.27% in Québec)) Maximum $51300</code></li>
                                            </ol>
                                        </li>
                                    </ol>
                                     <div class="callout-block callout-success">
                                        <div class="icon-holder">
                                            <i class="fa fa-thumbs-up"></i>
                                        </div><!--//icon-holder-->
                                        <div class="content">
                                            <h4 class="callout-title">Useful Tip:</h4>
                                            <p>EI discrepancies are adjusted to and from tax deducted. Options A and B are the defaults.</p>
                                        </div><!--//content-->
                                    </div>
                                   <!--//code-block-->
                                </div>
                                   <div id="transfer-over-remittance"  class="section-block">
                                    <h3 class="block-title">Transfer Over-Remittance</h3>
                                    <ol>
                                        <li class="item1">Transfer employer’s over remittance to selected Employee(s)</li>
                                        <li class="item2">When adjustments reduce total deductions for the company, the <strong>employer’s portion </strong>of the over-remittance may be transferred to the tax of an owner or shareholder.</li>
                                        <li class="item3">You can select single/ multiple employees from drop list, any net overpayment of CPP/QPP, EI and PPIP/QPIP resulting from adjustments calculated by the program will be credited to the tax deducted on the T4 of the selected employee(s).</li>
                                    </ol>                           
                                   <!--//code-block-->
                                </div>
                               
                            </section><!--//doc-section-->

                            <section id="t4-adjustments" class="doc-section">
                                <h2 class="section-title">T4 Adjustments</h2>
                                <ol>
                                    <li class="item1">After Adjustment settings have been set, and T4 data is complete, you can adjust T4 data from following options:
                                        <ol class="alphabets" type="a">
                                            <li class="item1">On Individual Slips
                                                <ol class="roman" type="i">
                                                    <li class="item1">Apply adjustment button is available in each slip, you can switch it on to apply adjustment on the particular slip and then save the slip data</li>
                                                </ol>
                                            </li>
                                            <li class="item2">Bulk Adjustment
                                                <ol class="roman" type="i">
                                                    <li class="item1">Apply adjustment on all employees for T4 Slips in company</li>
                                                    <li class="item2">Go to <strong>Adjustment &gt; Adjustments&nbsp;</strong>and press <strong>Adjust Slips</strong> button in T4 Adjustment Panel</li>
                                                    <li class="item3">When all slips are adjusted, you can Transfer the over remittance to employee selected in adjustment options screen</li>
                                                </ol>
                                            </li>
                                            <li class="item3">You can view details of T4 Adjustment from reports i.e.<strong> Adjustment &gt; T4 Report</strong></li><li class="item4">You can un-adjust slips individually or in bulk same as adjusting slips</li>
                                        </ol>
                                    </li>
                                </ol>
                               <div class="callout-block callout-success">
                                        <div class="icon-holder">
                                            <i class="fa fa-thumbs-up"></i>
                                        </div><!--//icon-holder-->
                                        <div class="content">
                                            <h4 class="callout-title">Useful Tip:</h4>
                                            <p>Once over remittance is transferred to selected employee, you cannot update T4 data, to do that, you have to un-transfer over remittance</p>
                                        </div><!--//content-->
                                    </div>
                            </section><!--//doc-section-->


                            <section id="t4-xml-filing" class="doc-section">
                                <h2 class="section-title">T4 XML Filing</h2>
                                <ol>
                                    <li>Make sure all your T4 data is complete and all the adjustments have been done.</li>
                                    <li>Go to T4 Summary i.e. <strong><em><u>Compliance T4 &gt; Summary.</u></em></strong></li>
                                    <li>Select Transmitter, Issuer and Contact person.</li>
                                    <li>If Transmitter, Issuer and Contact person are not available in drop list, you can setup them in <u><em><strong>Manage &gt; Setup</strong></em></u><br>You can copy information for Contact Person to Issuer and from Issuer to Transmitter</li>
                                    <li>If you are a 1<sup>st</sup> time remitter , use default Transmitter # already populated. Otherwise Transmitter # is provided by CRA please get in touch with them to get it.</li>
                                    <li>Unmask sensitive information from <code>Unmask</code> link.</li>
                                    <li>Press <strong>Generate XML</strong> button, it will download XML file, please save the file.</li>
                                </ol>
                                <b-img :src="require('../assets/t4-filling.png')" class="img-fluid"/>
                                <ol>
                                    <li>Submit your file to CRA on following link.</li>
                                </ol>
                                <a href="https://apps.cra-arc.gc.ca/ebci/leb0/upload/pub/entry-e.do" target="_blank">https://apps.cra-arc.gc.ca/ebci/leb0/upload/pub/entry-e.do</a>                      
                            </section><!--//doc-section-->


                            <section id="t4-paper-filing" class="doc-section">
                                <h2 class="section-title">T4 Paper Filing</h2>
                                <ol>
                                    <li>Make sure all your T4 data is complete and all the adjustments have been done.</li>
                                    <li>Go to T4 Summary i.e. <em><span style="text-decoration: underline;"><strong>Compliance T4 &gt; Summary.</strong></span></em></li>
                                    <li>Select Issuer and Contact person.</li>
                                    <li>If Issuer and Contact person are not available in drop list, you can setup them in <strong><em><u> Manage &gt; Setup</u></em></strong>&nbsp;&nbsp;You can copy information for Contact Person to Issuer and from Issuer to Transmitter</li>
                                    <li>Unmask sensitive information from<strong>&nbsp; </strong><code>Unmask</code> link</li>
                                    <li>Press <strong>Print PDF&nbsp;</strong>button, it will print T4 Summary in PDF.</li>
                                    <li>Mail T4 Summary and T4 Slips to CRA.
                                        <ul>
                                            <li>Ottawa Technology Centre</li>
                                            <li>Canada Revenue Agency</li>
                                            <li>875 Heron Road</li>
                                            <li>Ottawa ON K1A 1G9</li>
                                        </ul>
                                    </li>
                                </ol>
                                <b-img :src="require('../assets/t4-pinting.png')" class="img-fluid"/>
                                <ol>
                                    <li>Submit your file to CRA on following link.</li>
                                </ol>                    
                            </section><!--//doc-section-->


                            <section id="distributing-t4slips" class="doc-section">
                                <h2 class="section-title">Distributing T4 Slips to Employees</h2>
                                <ol>
                                    <li>To print T4 Slips, go to <strong><span style="text-decoration: underline;"><em>Compliance &gt; T4 &gt; List.</em></span></strong></li>
                                    <li>Click on row to select employee(s), and press <strong>Print T4</strong> button, you can print CRA, Employer and Employee copy.</li>
                                </ol>
                                <b-img :src="require('../assets/t4-distribute-1.png')" class="img-fluid"/>
                                <ol>
                                    <li>Please make sure pop ups are enabled to print T4 Slips.</li>
                                    <li>You can send employees, their T4 copies through email, i.e. select employee record from list and press <strong>Email</strong> button.</li>
                                </ol>
                                <b-img :src="require('../assets/t4-distribute-2.png')" class="img-fluid"/>
                                <ol>
                                    <li>Mail T4 Summary and T4 Slips to CRA:</li>
                                </ol>
                                <ul>
                                    <li>Ottawa Technology Centre</li>
                                    <li>Canada Revenue Agency</li>
                                    <li>875 Heron Road</li>
                                    <li>Ottawa ON K1A 1G9</li>
                                </ul>

                            </section><!--//doc-section-->
                          
                        </div><!--//content-inner-->
                    </div><!--//doc-content-->
                    <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                        <div id="doc-nav" class="doc-nav">
	                        
	                            <nav id="doc-menu" class="nav doc-menu flex-column sticky">
	                                <a class="nav-link scrollto" href="#transmitter-setup">Transmitter Setup</a>
	                                <a class="nav-link scrollto" href="#adjustment-options">Adjustment Options</a>
                                    <nav class="doc-sub-menu nav flex-column">
                                        <a class="nav-link scrollto" href="#cpp-qpp-adjustment">CPP/QPP Adustments</a>
                                        <a class="nav-link scrollto" href="#ei-adjustment">EI Adjustments</a>
                                        <a class="nav-link scrollto" href="#transfer-over-remittance">Transfer Over-Remittance</a>
                                    </nav>
                                    <a class="nav-link scrollto" href="#t4-xml-filing">T4 Xml Filing</a>
                                    <a class="nav-link scrollto" href="#t4-paper-filing">T4 Paper Filing</a>
                                    <a class="nav-link scrollto" href="#distributing-t4slips">Distribute T4 Slips</a>
	                            </nav>
	                        
                        </div>
                    </div><!--//doc-sidebar-->
                </div><!--//doc-body-->              
            </div><!--//container-->
        </div><!--//doc-wrapper-->
        <footer class="doc-footer text-center">
        <div class="container">
            <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
            <small class="copyright">Designed by <a href="http://taxslips.ca/" target="_blank">TaxSlips</a></small>
            
        </div><!--//container-->
    </footer>
       
        
    </div><!--//page-wrapper-->
</template>


<script>
	export default{
		name: 't4guide',
         mounted(){
    $(document).ready(function(){
            $("a[href^='#']").click(function(e) {
  e.preventDefault();
  
  var position = $($(this).attr("href")).offset().top;
  var position = position - 10;
  $("body, html").animate({
    scrollTop: position
  } ,1000 );
});  
    });
	}
};
</script>
<style scoped>
    .header {
        border-top:5px solid #ef8410;
        background: #494d55;
        color: rgba(255, 255, 255, 0.85);
        padding: 30px 0;
    }
    .logo{
        padding:20px 10px;
    }
    .breadcrumb {
    background: none;
    margin-bottom: 0;
    padding: 0 30px;
    }
    .breadcrumb li{
         color: rgba(255, 255, 255, 0.85);
    }
    .doc-menu .nav-link {
    margin-bottom: 5px;
    display: block;
    padding: 5px 15px;
    color: #616670;
    }
    .doc-sub-menu .nav-link {
    margin-bottom: 10px;
    font-size: 14px;
    display: block;
    color: #616670;
    padding: 0;
    padding-left: 34px !important;
    background: none;
}
    .doc-title {
    padding-top:20px 0px;    
    color:  #ef8410;
    }
    .doc-header{
        padding-top:20px 0px;
    }
    .doc-body{
        margin-top:30px;
        line-height: 2;
    }
    ol,ul{
        padding-left:15px !important;
    }

.callout-block {
  padding: 30px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  position: relative;
  margin-bottom: 30px;
}

.callout-block a {
  color: rgba(0, 0, 0, 0.55) !important;
}

.callout-block a:hover {
  color: rgba(0, 0, 0, 0.65) !important;
}

.callout-block .icon-holder {
  font-size: 30px;
  position: absolute;
  left: 30px;
  top: 30px;
  color: rgba(0, 0, 0, 0.25);
}

.callout-block .content {
  margin-left: 60px;
}

.callout-block .content p:last-child {
  margin-bottom: 0;
}

.callout-block .callout-title {
  margin-top: 0;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.65);
}

.callout-info {
  background: #58bbee;
  color: #fff;
}

.callout-success {
  background: #75c181;
  color: #fff;
}

.callout-warning {
  background: #F88C30;
  color: #fff;
}

.callout-danger {
  background: #f77b6b;
  color: #fff;
}
.doc-section .section-title {
    font-size: 26px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(215, 214, 214);
}
.doc-section h3 {
    padding-top:20px;
    font-size: 20px;
    font-weight: bold;
}
.doc-footer {
    background: #26282c;
    color: rgba(255, 255, 255, 0.6);
    padding: 15px 0;
    height: 70px;
    font-size: 21px;
}
doc-sub-menu .nav-link:first-child {
    padding-top: 5px;
}
img{
    margin-top: 20px;
    margin-bottom: 20px;
}
a{
    color: #ef8410;
}
</style>