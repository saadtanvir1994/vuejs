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
                    <li class="breadcrumb-item active">RL1 Guide</li>
                </ol>
            </div><!--//container-->
        </header><!--//header-->
        <div class="doc-wrapper">
            <div class="container">
                <div id="doc-header" class="doc-header text-center">
                    <h1 class="doc-title"><i class="icon fa fa-paper-plane mt-5"></i> RL1 Filing Guide</h1>
                    <div class="meta"><i class="far fa-clock"></i> Year End Compliance</div>
                </div><!--//doc-header-->
                <div class="doc-body row">
                    <div class="doc-content col-md-9 col-12 order-1">
                        <div class="content-inner">
                            <section id="transmitter-setup" class="doc-section">
                                <h2 class="section-title">Transmitter Setup</h2>
                                <div class="section-block">
                                    <ol>
                                        <li>Transmitter must be setup before generating RL-1 XML file. Transmitter is not imported from SimplePay.</li>
                                        <li>To create a Transmitter, go to <strong> Manage &gt;&nbsp;Setup </strong></li>
                                        <li class="item1">You must request a transmitter number (NP followed by six digits) from the Division de l’acquisition des données électroniques. To do so, complete the Transmitter Registration Form (form ED-430-V) and click Send at the bottom of the form to send it to us.<br>
                                            <a target="_blank" href="http://www.revenuquebec.ca/en/sepf/formulaires/ed/ed-430.aspx">http://www.revenuquebec.ca/en/sepf/formulaires/ed/ed-430.aspx</a></li>
                                    </ol>
                                </div>
                            </section><!--//doc-section-->
                            <section id="adjustment-options" class="doc-section">
                                <h2 class="section-title">Adjustment Options</h2>
                                <ol class="level2">
                                    <li class="item1">You can set your adjustment options from <strong>Adjustment &gt; Options </strong>screen.</li>
                                    <li class="item2">You can select from different methods of adjustment details are as below</li>
                                </ol>
                                <div id="cpp-qpp-adjustment"  class="section-block">
                                    <h3 class="block-title">CPP/QPP Adjustments</h3>
                                    <ol class="level4">
                                        <li>Only one option can be selected i.e A or B</li>
                                        <li>Option A – Adjust CPP/QPP if over maximum/under minimum
                                            <ol class="alphabets" type="a">
                                                <li>CPP will be calculated within the range where the maximum CPP is the lesser of:<br><code>(CPP Pensionable Earnings x 4.95% (5.40% for QPP))</code><br/> OR <br/><code>Maximum Employee Contribution of &nbsp;$2,564.10 ($2,797.20 for QPP)</code></li>
                                                <li>And the minimum CPP is the lesser of:<br><code>
                                                ((CPP Pensionable Earnings – $3,500.00) x 4.95% % (5.40% for QPP))</code><br/> OR<br/> <code>Maximum Employee Contribution of &nbsp;$2,564.10 ($2,797.20 for QPP)</code></li>
                                            </ol>
                                        </li>
                                        <li class="item3">Option B – Adjust CPP/QPP based on number of pensionable Pay Periods
                                            <ol class="alphabets" type="a">
                                                <li class="item1">CPP will be calculated as:<br><code>
                                                (CPP Pensionable Earnings – Prorated Deduction) x 4.95%</code>code></li>
                                                <li class="item2">QPP will be calculated as:<br><code>
                                                (QPP Pensionable Earnings – Prorated Deduction) x 5.40%</code></li>
                                                <li class="item3">The prorated deduction will be calculated as:<br/><code>(Number of pensionable Periods / maximum number of pensionable Periods) x $3,500.00</code></li>
                                            </ol>
                                        </li>
                                    </ol>
                                     <div class="callout-block callout-success">
                                        <div class="icon-holder">
                                            <i class="fa fa-thumbs-up"></i>
                                        </div><!--//icon-holder-->
                                        <div class="content">
                                            <h4 class="callout-title">Useful Tip:</h4>
                                            <ol class="notes_items">
                                                <li class="item1">CPP/QPP discrepancies are adjusted to and from tax deducted as necessary. Option B is the default CPP/QPP adjustment option</li>
                                                <li class="item2">Pensionable periods are entered in each employee’s RL-1 slip</li>
                                                <li class="item3">Maximum number of pensionable periods are calculated from Pay Period type selected in Employee setup</li>
                                                <li class="item4">Example, in employee setup Pay period is selected as 12-Monthly, In RL-1 Slips, Pensionable Periods are selected as 10, Prorated deduction will be (10/ 12 * 3500) i.e. 2916.67 Instead of 3500</li>
                                            </ol>
                                        </div><!--//content-->
                                    </div>
                                                                       
                                   <!--//code-block-->
                                </div><!--//section-block-->
                                <div id="ei-adjustment"  class="section-block">
                                    <h3 class="block-title">E.I Adjustments</h3>
                                    <ol>
                                        <li class="item1">Option A – Adjust EI premiums if over annual maximum (select alone or with option B or C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1">If this option is selected, the EI will only be adjusted if it is greater than:<br><code>
                                                (EI Insurable Earnings x 1.63% (1.27% in Québec))</code><br/> OR <br/> <code>($836.19 ($651.51&nbsp;in Québec))</code></li>
                                            </ol>
                                        </li>
                                        <li class="item2">Option B – Adjust EI premiums based on Insurable Earnings (select only one of options B and C)</li>
                                        <li class="item1">If this option is selected, the EI will be calculated as:<br><code>
                                        EI Insurable Earnings x 1.63% (1.27% in Québec)</code></li>
                                        <li class="item3">Option C – Adjust insurable earnings based on EI premiums (select only one of options B and C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1">This option assumes the entered amount for EI deducted is correct. When this option is selected, EI insurable earnings will be calculated as the minimum of:<br><code>
                                                (EI Deducted / 1.63% (1.27% in Québec)) Maximum $51300</code></li>
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
                                                <li>EI discrepancies are adjusted to and from tax deducted. Options A and B are the defaults.</li>
                                            </ul>
                                        </div><!--//content-->
                                    </div>
                                   <!--//code-block-->
                                </div>
                                <div id="qpip-adjustment"  class="section-block">
                                    <h3 class="block-title">QPIP Adjustments</h3>
                                    <ol>
                                        <li class="item1">Option A – Adjust QPIP/PPIP premiums if over annual maximum (select alone or with option B or C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1">If this option is selected, the QPIP/PPIP will only be adjusted if it is greater than:<br><code>
                                                $397.30, calculated as ($72500.00 x 0.548%)</code></li>
                                            </ol>
                                        </li>
                                        <li class="item2">Option B – Adjust QPIP/PPIP premiums based on Insurable Earnings (select only one of options B and C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1">If this option is selected, the EI will be calculated as:<br>
                                                <code>QPIP/PPIP Insurable Earnings x 0.548%</code></li>
                                            </ol>
                                        </li>
                                        <li class="item3">Option C – Adjust insurable earnings based on QPIP/PPIP deducted (select only one of options B and C)
                                            <ol class="alphabets" type="a">
                                                <li class="item1">This option assumes the entered amount for QPIP/PPIP deducted is correct. When this option is selected,QPIP/PPIP insurable earnings will be calculated as the minimum of:<br><code>
                                                (QPIP/PPIP deducted / 0.548%) Maximum $72500.00.</code></li>
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
                                                <li>PPIP/QPIP discrepancies are adjusted to and from tax deducted.</li>
                                            </ul>
                                        </div><!--//content-->
                                    </div>                      
                                   <!--//code-block-->
                                </div>
                                   <div id="transfer-over-remittance"  class="section-block">
                                    <h3 class="block-title">Transfer Over-Remittance</h3>
                                    <ol>
                                        <li class="item1">Transfer employer’s over remittance to selected Employee(s)</li>
                                        <li class="item2">When adjustments reduce total deductions for the company, the <strong>employer’s portion </strong>of the over-remittance may be transferred to the tax of an owner or shareholder.</li>
                                        <li class="item3">You can select single/ multiple employees from drop list, any net overpayment of CPP/QPP, EI and PPIP/QPIP resulting from adjustments calculated by the program will be credited to the tax deducted on the RL-1 of the selected employee(s).</li>
                                    </ol>                        
                                   <!--//code-block-->
                                </div>
                               
                            </section><!--//doc-section-->

                            <section id="rl1-adjustments" class="doc-section">
                                <h2 class="section-title">RL-1 Adjustments</h2>
                                <ol>
                                    <li class="item1">After Adjustment settings have been set, and RL-1 data is complete, you can adjust RL-1 data from following options
                                        <ol>
                                            <li class="item1">On individual slips
                                                <ol class="alphabets" type="a">
                                                    <li class="item1">Apply adjustment button is available in each slip, you can switch it on to apply adjustment on the particular slip and then save the slip data</li>
                                                </ol>
                                            </li>
                                            <li class="item2">Bulk Adjustment
                                                <ol class="alphabets" type="a">
                                                    <li class="item1">Apply adjustment on all employees for RL-1 slips in company</li>
                                                    <li class="item2">Go to <strong>Adjustment &gt; Adjustments&nbsp;</strong>and press <strong>Adjust Slips</strong> button in RL-1 Adjustment panel</li>
                                                    <li class="item3">When all slips are adjusted, you can Transfer the over remittance to employee selected in adjustment options screen</li>
                                                </ol>
                                            </li>
                                            <li class="item3">You can view details of RL-1 Adjustment from reports i.e. <strong> Adjustment &gt; RL-1 Report </strong></li>
                                            <li class="item4">You can un-adjust slips individually or in bulk same as adjusting slips</li>
                                        </ol>


                                    </li>
                                </ol>
                               <div class="callout-block callout-success">
                                        <div class="icon-holder">
                                            <i class="fa fa-thumbs-up"></i>
                                        </div><!--//icon-holder-->
                                        <div class="content">
                                            <h4 class="callout-title">Useful Tip:</h4>
                                            <p>Once over remittance is transferred to selected employee, you cannot update RL-1 data, to do that, you have to un-transfer over remittance</p>
                                        </div><!--//content-->
                                </div>
                            </section><!--//doc-section-->


                            <section id="rl1-xml-filing" class="doc-section">
                                <h2 class="section-title">RL-1 XML Filing (Internet file transfer)</h2>
                                <ol>
                                    <li>Make sure all your RL-1 data is complete and all the adjustments have been done.</li>
                                    <li>Go to RL-1 Settings i.e. <strong><em><u>Compliance &gt; RL-1 Settings.</u></em></strong></li>
                                    <li>Select correct year.</li>
                                    <li>You can copy RL-1 settings from previous year, i.e. select <strong>Copy from Previous Year</strong> button and Save the settings.<br/>
                                    <b-img :src="require('../assets/rl1-compliance.png')" class="img-fluid"/>
                                    </li>
                                    <li>Enter your sequential numbers given by Revenue Quebec.
                                        <p><strong>HOW TO OBTAIN SEQUENTIAL NUMBERS</strong></p>

                                        <ol class="level3 alphabets" type="a">
                                            <li class="item1">You must obtain a series of sequential numbers to identify every type of RL slip you are submitting online. These unique numbers are mandatory, non-repeating and assigned to the same filer number for all types of RL slip.</li>
                                            <li class="item2">Note that sequential numbers are different from the numbers pre-printed on the paper RL slips we provide and from those used for filing computer-generated RL slips.</li>
                                            <li class="item3">This series of sequential numbers is reused each year, provided there are enough numbers for the number of RL slips you must file and you begin with the first number in the series each year.</li>
                                            <li class="item4">To obtain a series of sequential numbers, contact the Division de l’acquisition des données électroniques.
                                                <ol class="level4 roman" type="i">
                                                    <li class="item1">By email at edi@revenuquebec.ca</li>
                                                    <li class="item2">By telephone at 418 659-1020 or 1 866 814-8392 (toll-free)</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>Select Transmitter, if Transmitter is not available in drop list, you can setup in&nbsp;<strong><em><u>Manage &gt;&nbsp;Setup.</u></em></strong><br>
                                        <strong>HOW TO OBTAIN TRANSMITTER NUMBER</strong>
                                        <p>&nbsp;</p>

                                        <ol class="level3 roman" type="i">
                                            <li class="item1">You must request a transmitter number (NP followed by six digits) from the Division de l’acquisition des données électroniques. To do so, complete the Transmitter Registration Form (form ED-430-V) and click Send at the bottom of the form to send it to us.<span class="Apple-converted-space">&nbsp;</span><br>
                                                <a target="_blank" href="http://www.revenuquebec.ca/en/sepf/formulaires/ed/ed-430.aspx">http://www.revenuquebec.ca/en/sepf/formulaires/ed/ed-430.aspx</a></li>
                                            </ol>
                                        </li>
                                        <li>Select submission method from <strong>XML</strong> or <strong>Paper.</strong></li>
                                        <li>Enter Quebec Identification number.</li>
                                        <li>Select source of RL slips used.</li>
                                        <li>Go to RL-1 list i.e. <strong><em><u>Compliance &gt; RL-1 List.</u></em></strong></li>
                                        <li>Unmask sensitive information from<strong>&nbsp;</strong><code>Unmask</code>
                                            <strong> </strong>&nbsp;link.</li>
                                            <li>Click on row to select employee(s) and press <strong>Generate XML</strong> button, it will generate XML file, please save the file.</li>
                                        </ol>
                                <b-img :src="require('../assets/rl1-img-1.png')" class="img-fluid"/>
                                <ol>
                                    <li>You can generate XML for Original, amended and cancelled.</li>
                                    <li>Submit your file to Revenu Quebec on following link.</li>
                                </ol>
                                <a href="https://apps.cra-arc.gc.ca/ebci/leb0/upload/pub/entry-e.do" target="_blank">http://www.revenuquebec.ca/en/sepf/services/sgp_rl_internet/default.aspx</a>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <ul class="guide_notes">
                                            <li>XML file is generated only for RL-1 Slips.</li>
                                            <li>RL-1 summary is submitted by mail (on paper) or online using the services available in My Account. RL-1.</li>
                                        </ul>         
                                    </div><!--//content-->
                                </div>            

                            </section><!--//doc-section-->


                            <section id="paper-filing" class="doc-section">
                                <h2 class="section-title">Paper Filing</h2>
                                <ol>
                                    <li>If you filing <strong>fewer than 51</strong> RL-1 Slips, you must send them to Revenu Québec either online (in an XML file) or by mail (on paper). In the case of paper RL slips, send us only copy 1 of each slip.</li>
                                    <li>Go to RL-1 Settings i.e. <strong><em><u>Compliance &gt; RL-1 Settings.</u></em></strong></li>
                                    <li>Select correct year.</li>
                                    <li>You can copy RL-1 settings from previous year, i.e. select <strong>Copy from Previous Year</strong> button and Save the settings.<br/>
                                    <b-img :src="require('../assets/rl1-compliance.png')" class="img-fluid"/>
                                    </li>
                                    <li>Enter your sequential numbers given by Revenue Quebec.</li>
                                    <li>Select Transmitter, if Transmitter is not available in drop list, you can setup in<strong><em><u> Manage &gt;&nbsp;Setup.</u></em></strong></li>
                                    <li>Select submission method from XML or Paper.</li>
                                    <li>Enter Quebec Identification number.</li>
                                    <li>Select source of RL slips used.</li>
                                    <li>Go to RL-1 list i.e. <strong><em><u>Compliance &gt; RL-1 List.</u></em></strong></li>
                                    <li>Unmask sensitive information from&nbsp;<strong> <code>Unmask</code></strong>&nbsp;link.</li>
                                    <li>Select records from Rl-1 list and press <strong>Print PDF</strong> button, it will print PDF files for selected employees, save these files.</li>
                                </ol>
                                <b-img :src="require('../assets/rl1-img-5.png')" class="img-fluid"/>
                                <ol>
                                    <li>Please make sure pop ups are enabled to print RL-1 Slips.</li>
                                    <li>Go to RL-1 Summary i.e. <em><span style="text-decoration: underline;"><strong>Compliance &gt; RL-1 &gt;Summary.</strong></span></em></li>
                                    <li>Enter number of slips filed on paper and filed online.</li>
                                    <li>Update any other information if required.</li>
                                    <li>Press save button.</li>
                                    <li>Press Print button, it will give you 2 options i.e. print in <strong>English</strong> or <strong>French</strong>.</li>
                                </ol>  
                                <b-img :src="require('../assets/rl1-img-6.jpg')" class="img-fluid"/>
                                <ol>
                                    <li>Select an option and print the file, please save the file.</li>
                                    <li>Details of filing RL-1 slips on paper are in following link.<br>
                                        <a href="http://www.revenuquebec.ca/en/sepf/production-transmission/poste.aspx">http://www.revenuquebec.ca/en/sepf/production-transmission/poste.aspx </a></li>
                                    </ol>
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
                                    <a class="nav-link scrollto" href="#rl1-adjustments">RL-1 Adjustments</a>
                                    <a class="nav-link scrollto" href="#rl1-xml-filing">RL-1 XML Filing (Internet file transfer)</a>
                                    <a class="nav-link scrollto" href="#rl1-xml-filing-web">RL-1 XML Filing (Web Services)</a>
                                    <a class="nav-link scrollto" href="#paper-filing">Paper Filing</a>
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