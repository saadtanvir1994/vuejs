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
                    <li class="breadcrumb-item active">Guide</li>
                </ol>
            </div><!--//container-->
        </header><!--//header-->
        <div class="doc-wrapper">
            <div class="container">
                <div id="doc-header" class="doc-header text-center">
                    <h1 class="doc-title"><i class="icon fa fa-paper-plane mt-5"></i> General Guide</h1>
                </div><!--//doc-header-->
                <div class="doc-body row">
                    <div class="doc-content col-md-9 col-12 order-1">
                        <div class="content-inner">

                            <section id="login" class="doc-section">
                                <h2 class="section-title">First Login after Signup</h2>
                                <div class="section-block">
                                    <ol>
                                        <li>After completing <b>Signup process</b>, click on the link emailed by TaxSlips.</li>
                                        <li>It will open a screen where you can:
                                            <ol class="alphabets" type="a">
                                                <li>Set your Account Password</li>
                                                <li>Enter your Phone Number</li>
                                                <li>Enter your Social Insurance Number</li>
                                            </ol>
                                        </li>
                                        <li>A request will be sent to TaxSlips administrator to verify and activate your account.</li>
                                        <li>On account activation, an email will be send to you.</li>
                                    </ol>
                                    <b-img alt="Signup" :src="require('../assets/login-signup.png')" class="img-fluid "/>
                                </div>
                            </section><!--//doc-section-->


                            <section id="create-client" class="doc-section">
                                <h2 class="section-title">Create a Client</h2>
                                <ol>
                                    <li>Once your account is active, login to your account, you will see Client list</li>
                                    <li>You can add multiple Clients under your account from <strong>Client Setup</strong> Screen</li>
                                    <li>After Client is created, it will be listed in Client list, click on <strong>Client Name</strong> in list to load client session</li>
                                </ol>
                                <b-img alt="Signup" :src="require('../assets/create-client.png')" class="img-fluid "/>

                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <p>In Operating Provinces you have to select all provinces for which you will have employees in your account.</p>
                                    </div><!--//content-->
                                </div>

                            </section><!--//doc-section-->

                            <section id="employee-setup" class="doc-section">
                                <h2 class="section-title">Employee Setup</h2>
                                <ol>
                                    <li>First thing you need after creating your client, is setup Employees</li>
                                    <li>Go to <strong><u>Employees &gt; Setup</u></strong>, to create employees</li>
                                    <li>You can also import employees in bulk from <strong><u>Employees &gt; Import</u></strong></li>
                                </ol>
                                <b-img alt="Signup" :src="require('../assets/employee-info.png')" class="img-fluid "/>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <ul class="guide_notes">
                                            <li>Employees are managed for each year in TaxSlips, if you have employees already in your account in previous year, you can simply copy employees from previous year to current from <strong><u>Employees &gt; Move Employees</u></strong></li>
                                            <li>If you have to import T4/ RL-1 XML or CSV file, you don’t need to create employees separately, system will auto create employees along with T4 and RL-1 data from file</li>
                                            <li>History log is maintained for each change in employee fields, you can view log from employees log report i.e. <strong><u>Employees &gt; Employees Log Report</u></strong>or by clicking the field label in Employee Setup page.</li>
                                        </ul>
                                    </div><!--//content-->
                                </div>
                            </section><!--//doc-section-->


                            <section id="transmitter-setup" class="doc-section">
                                <h2 class="section-title">Transmitter Setup</h2>
                                <ol>
                                    <li>You can setup Transmitter information for <strong>T4 and RL-1</strong> filing from <strong><u>Mange &gt;&nbsp;Setup</u></strong></li>
                                    <li>You can create Transmitter once and use it over the years</li>
                                </ol>                   
                            </section><!--//doc-section-->


                            <section id="issuer-setup" class="doc-section">
                                <h2 class="section-title">Issuer Setup</h2>
                                <ol>
                                    <li>You can setup Issuer information for <strong>T4</strong> filing from <strong><u>Mange &gt; Setup</u></strong></li>
                                    <li>You can create Issuer once and use it over the years</li>
                                </ol>                  
                            </section><!--//doc-section-->


                            <section id="contact-setup" class="doc-section">
                                <h2 class="section-title">Contact Setup</h2>
                                <ol>
                                    <li>You can setup Contact information for <strong>T4</strong> filing from <strong><u>Mange &gt; Setup</u></strong></li>
                                    <li>You can create Contact once and use it over the years</li>
                                </ol>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <p>If you have imported T4 XML file, Transmitter, issuer and Contact is auto created</p>
                                    </div><!--//content-->
                                </div>

                            </section><!--//doc-section-->


                            <section id="t4-rl1-data-setup" class="doc-section">
                                <h2 class="section-title">T4 / RL-1 Slip Data Setup</h2>
                                <ol>
                                    <li>After Employees have been created you can add T4 / RL-1 Slip data for them</li>
                                    <li>All employees for which T4 is selected in Slips Required field will be available in T4 /RL-1 List i.e. <strong><u>Compliance &gt; T4 / RL-1&gt;List</u></strong></li>
                                    <li>All employees with <strong>Province of Employment set as Quebec</strong>will be available in RL-1 List</li>
                                    <li>There will be <strong>+</strong>icon in last column against each employee in list for whom T4 / RL-1 is not yet created</li>
                                    <li>Click on this icon to load T4 / RL-1 Setup page to enter T4 /RL-1 information, you can also load T4 /RL-1 setup page directly from <strong><u>Compliance &gt; T4 / RL-1&gt; Setup</u></strong>and load employees from drop list.</li>
                                    <li>You can also update the employee setup information from T4 / RL-1 page</li>
                                    <li>You can set the status of T4 / RL-1 Slip as <strong>Draft or Complete</strong>, only completed Slips will be considered for T4 Summary and filing</li>
                                    <li>You can create <strong>Original, Amended, Cancelled</strong></li>
                                    <li>You can print T4/ RL-1 Slips from T4 list, i.e. select record and press Print T4 / RL-1</li>
                                    <li>You can generate <strong>XML</strong> file <strong>for RL-1 Slips</strong> from <strong>RL-1 List</strong>, i.e. select records and press Generate XML button</li>
                                    <li>For filing details, please check <a target="_blank" href="/t4-guide">T4 Guide</a> and <a target="_blank" href="/rl1-guide">RL-1 Guide</a></li>
                                </ol>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <ul class="guide_notes">
                                            <li>In T4 Slip, employment income is populated in E.I insurable earnings and CPP/QPP pensionable earnings; you can override this amount by selecting check box.</li>
                                            <li>You can also import T4 / RL-1data from CSV / XML files</li>
                                            <li>TaxSlips is integrated with SimplePay, you can import your employees and T4 data from SimplePay through seamless API</li>
                                            <li>Sensitive data must be unmasked before printing or generating XML</li>
                                            <li>Before generating RL-1 XML file RL-1 Settings must be saved for the year, i.e. <strong><u>Compliance &gt; RL-1 &gt; Settings</u></strong></li>
                                        </ul>
                                    </div><!--//content-->
                                </div>

                            </section><!--//doc-section-->



                            <section id="adjustment-options" class="doc-section">
                                <h2 class="section-title">Adjustment Options</h2>
                                <ol>
                                    <li>You can set your adjustment options from <strong><u>Adjustment &gt; Options</u></strong></li>
                                    <li>You can select from different methods of adjustment details are as below</li>
                                </ol>
                            </section><!--//doc-section-->

                           
                            <section id="cpp-qpp-adjustment" class="doc-section">
                                <h2 class="section-title">CPP/QPP Adjustments</h2>
                                <ul>
                                    <li>Only one option can be selected i.e A or B</li>
                                </ul>
                                <h5>Option A – Adjust CPP/QPP if over maximum/under minimum</h5>
                                <p>CPP will be calculated within the range where the maximum CPP is the lesser of:</p>
                                <p><code>(CPP Pensionable Earnings x 4.95% (5.40% for QPP)) </code> <br/>OR<br/><code> Maximum Employee Contribution of $2,564.10 ($2,797.20 for QPP)</code></p>
                                <p>And the minimum CPP is the lesser of:</p>
                                <p><code>((CPP Pensionable Earnings – $3,500.00) x 4.95% % (5.40% for QPP))</code><br/>OR<br/> <code>Maximum Employee contribution of $2,564.10 ($$2,797.20 for QPP)</code></p>
                                <h5>Option B – Adjust CPP/QPP based on number of pensionable Pay Periods</h5>
                                <p>CPP will be calculated as:</p>
                                <p><code>(CPP Pensionable Earnings – Prorated Deduction) x 4.95%</code></p>
                                <p>QPP will be calculated as:</p>
                                <p><code>(QPP Pensionable Earnings – Prorated Deduction) x 5.40%</code></p>
                                <p>The prorated deduction will be calculated as:</p>
                                <p><code>(Number of pensionable Periods / maximum number of pensionable Periods) x $3,500.00</code></p>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <ul class="guide_notes">
                                            <li>CPP/QPP discrepancies are adjusted to and from tax deducted as necessary. Option B is the default CPP/QPP adjustment option.
                                                <ol>
                                                    <li>Pensionable periods are entered in each employee’s T4 /RL-1 slip</li>
                                                    <li>Maximum number of pensionable periods are calculated from Pay Period type selected in Employee setup</li>
                                                </ol>
                                            </li>
                                            <li>Example, in employee setup Pay period is selected as 12-Monthly, In T4 Slips, Pensionable Periods are selected as 10, Prorated deduction will be (10/ 12 * 3500) i.e. 2916.67 Instead of 3500</li>
                                        </ul>
                                    </div><!--//content-->
                                </div>
                            </section><!--//doc-section-->

                            <section id="ei-adjustment" class="doc-section">
                                <h2 class="section-title">E.I Adjustments</h2>
                                <h5>Option A – Adjust EI premiums if over annual maximum (select alone or with option B or C)</h5>
                                <p>If this option is selected, the EI will only be adjusted if it is greater than:</p>
                                <p><code>(EI Insurable Earnings x 1.63% (1.27% in Québec))</code><br/>OR <br/> <code>($836.19($651.51 in Québec))</code></p>
                                <h5>Option B – Adjust EI premiums based on Insurable Earnings (select only one of options B and C)</h5>
                                <p>If this option is selected, the EI will be calculated as:</p>
                                <p><code>EI Insurable Earnings x 1.63% (1.27% in Québec)</code></p>
                                <h5>Option C – Adjust insurable earnings based on EI premiums (select only one of options B and C)</h5>
                                <p>This option assumes the entered amount for EI deducted is correct. When this option is selected, EI insurable earnings will be calculated as the minimum of:</p>
                                <p><code>(EI Deducted / 1.63% (1.27% in Québec)) Maximum $51300</code></p>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <p>EI discrepancies are adjusted to and from tax deducted. Options A and B are the defaults.</p>
                                    </div><!--//content-->
                                </div>
                            </section>

                             <section id="qpip-adjustment" class="doc-section">
                                <h2 class="section-title">QPIP Adjustments</h2>
                                <h5>Option A – Adjust QPIP/PPIP premiums if over annual maximum (select alone or with option B or C)</h5>
                                <p>If this option is selected, the QPIP/PPIP will only be adjusted if it is greater than:</p>
                                <p><code>$397.30, calculated as ($72500.00 x 0.548%)</code></p>
                                <h5>Option B – Adjust QPIP/PPIP premiums based on Insurable Earnings (select only one of options B and C)</h5>
                                <p>If this option is selected, the EI will be calculated as:</p>
                                <p><code>QPIP/PPIP Insurable Earnings x 0.548%</code></p>
                                <h5>Option C – Adjust insurable earnings based on QPIP/PPIP deducted (select only one of options B and C)</h5>
                                <p>This option assumes the entered amount for QPIP/PPIP deducted is correct. When this option is selected,QPIP/PPIP insurable earnings will be calculated as the minimum of:</p>
                                <p><code>(QPIP/PPIP deducted / 0.548%) Maximum $72500.00.</code></p>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <p>PPIP/QPIP discrepancies are adjusted to and from tax deducted.</p>
                                    </div><!--//content-->
                                </div>
                            </section>

                             <section id="transfer-over-remittance" class="doc-section">
                                <h2 class="section-title">Transfer Over-Remittance</h2>
                                <p><strong>Transfer employer’s over remittance to selected Employee(s)</strong></p>
                                <p>When adjustments reduce total deductions for the company, the <strong>employer’s portion</strong> of the over-remittance may be transferred to the tax of an owner or shareholder.</p>
                                <p>You can select single/ multiple employees from drop list, any net overpayment of CPP/QPP, EI and PPIP/QPIP resulting from adjustments calculated by the program will be credited to the tax deducted on the T4 of the selected employee(s).</p>
                            </section>

                            <section id="ta-rl1-adjustment" class="doc-section">
                                <h2 class="section-title">T4 / RL-1 Adjustments</h2>
                                <ol>
                                    <li>After Adjustment settings have been set, and T4/ RL-1 data is complete, you can adjust T4/ RL-1 data from following options
                                        <ol class="alphabets" type="a">
                                            <li>On individual slips
                                                <ol class="roman" type="i">
                                                    <li>Apply adjustment button is available in each slip, you can switch it on to apply adjustment on the particular slip and then save the slip data</li>
                                                </ol>
                                            </li>
                                            <li>Bulk Adjustment
                                                <ol class="roman" type="i">
                                                    <li>Apply adjustment on all employees for T4 Slip and RL-1 slips in company</li>
                                                    <li>Go to <strong><u>Adjustment &gt; T4 / Rl-1</u></strong>Adjustment and press <strong>Adjust Slips</strong> button</li>
                                                    <li>When all slips are adjusted, you can Transfer the over remittance to employee selected in adjustment options screen</li>
                                                </ol>
                                            </li>
                                            <li>You can view details of T4/ RL-1 Adjustment from reports i.e. <strong><u>Adjustment &gt; T4 Report</u></strong>&nbsp;and <strong><u>Adjustment &gt; RL-1 Report</u></strong></li>
                                            <li>You can un-adjust slips individually or in bulk same as adjusting slips</li>
                                        </ol>
                                    </li>
                                </ol>
                                 <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <p>Once over remittance is transferred to selected employee, you cannot update T4/Rl-1 data, to do that, you have to un-transfer over remittance</p>
                                    </div><!--//content-->
                                </div>
                            </section>


                            <section id="ta-summary" class="doc-section">
                                <h2 class="section-title">T4 Summary</h2>
                                <ol>
                                    <li>After you have completed the T4 slips, you can complete T4 Summary from <strong><u>Compliance &gt; T4 &gt; Summary</u></strong></li>
                                    <li>Information will be filled from T4 slips data, Select Transmitter, Issuer and Contact Person and Save the Summary</li>
                                    <li>You can Print the T4 Summary or generate XML for filing, (sensitive data must be unmasked before printing or generating XML)</li>
                                </ol>
                            </section>

                            <section id="rl1-summary" class="doc-section">
                                <h2 class="section-title">RL-1 Summary</h2>
                                <ol>
                                    <li>After you have completed the RL-1slips, you can complete RL-1 Summary from <strong><u>Compliance &gt; RL-1&gt; Summary</u></strong></li>
                                    <li>Information will be filled from RL-1 slips data</li>
                                    <li>You can Print the RL-1 Summary filing, (sensitive data must be unmasked before printing)</li>
                                </ol>
                                <div class="callout-block callout-success">
                                    <div class="icon-holder">
                                        <i class="fa fa-thumbs-up"></i>
                                    </div><!--//icon-holder-->
                                    <div class="content">
                                        <h4 class="callout-title">Useful Tip:</h4>
                                        <ul class="guide_notes">
                                            <li>XML file is only generated for Rl-1 Slips not for Summary, you have to submit RL-1 summary on paper.</li>
                                            <li>You can file Rl-1 Slips on paper or XML</li>
                                            <li>Once T4 / RL-1 Summaryis filed, and confirmation number is entered, you cannot edit Slips data, but you can always amend and submit T4 / Rl-1 slips.</li>
                                        </ul>
                                    </div><!--//content-->
                                </div>
                            </section>

                        </div><!--//content-inner-->
                    </div><!--//doc-content-->
                    <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                        <div id="doc-nav" class="doc-nav">

                           <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                               <a class="nav-link scrollto" href="#login">Login</a>
                               <a class="nav-link scrollto" href="#create-client">Create a Client</a>
                               <a class="nav-link scrollto" href="#employee-setup">Employee Setup</a>
                               <a class="nav-link scrollto" href="#transmitter-setup">Transmitter Setup</a>
                               <a class="nav-link scrollto" href="#issuer-setup">Issuer Setup</a>
                               <a class="nav-link scrollto" href="#contact-setup">Contact Setup</a>
                               <a class="nav-link scrollto" href="#t4-rl1-data-setup">T4 / RL-1 Slip Data Setup</a>
                               <a class="nav-link scrollto" href="#adjustment-options">Adjustment Options</a>
                               <a class="nav-link scrollto" href="#cpp-qpp-adjustment">CPP/QPP Adjustments</a>
                               <a class="nav-link scrollto" href="#ei-adjustment">E.I Adjustments</a>                              
                               <a class="nav-link scrollto" href="#qpip-adjustment">QPIP Adjustments</a>
                               <a class="nav-link scrollto" href="#transfer-over-remittance">Transfer Over-Remittance</a>
                               <a class="nav-link scrollto" href="#ta-rl1-adjustment">T4 / RL-1 Adjustments</a>
                               <a class="nav-link scrollto" href="#ta-summary">T4 Summary</a>
                               <a class="nav-link scrollto" href="#rl1-summary">RL-1 Summary</a>
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
  name: 'guide',
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
h5{
    margin-top:20px;
}
a{
    color: #ef8410;
}
</style>