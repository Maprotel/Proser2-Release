( function ( window ) {

  const host = 'http://172.16.1.129';
  const externalAssets = '/assets';

  window.__env = window.__env || {};
  window.__env.home = host + '/proser/proser_reports/dist/home/';
  window.__env.externalAssets = externalAssets;


  // API url
  window.__env.loopbackApiUrl = host + ':3151';
  window.__env.systemApiUrl = host + ":3152";
  window.__env.systemUser = host + ":3153";

  window.__env.callcenterName = "CMDLT";
  window.__env.callcenterSlogan = "Centro Médico Docente La Tinidad";
  window.__env.callcenterLogo = externalAssets + "/img/logos_client/client-logo.png";
  window.__env.callcenterSite = "http://www.cmdlt.edu.ve/";

  // Projects
  window.__env.auditLink = host + '/proser/proser_reports/dist/audit/'
  window.__env.crudLink = host + '/proser/proser_reports/dist/crud/'
  window.__env.dashboardLink = host + '/proser/proser_reports/dist/dashboard/'
  window.__env.displayLink = host + '/proser/proser_reports/dist/display/'
  window.__env.homeLink = host + '/proser/proser_reports/dist/home/'
  window.__env.reportsLink = host + '/proser/proser_reports/dist/reports/'
  window.__env.smsLink = host + '/proser/proser_reports/dist/sms/'
  window.__env.systemLink = host + '/proser/proser_reports/dist/system/'
  window.__env.userLink = host + '/proser/proser_reports/dist/user/'
  window.__env.viewLink = host + '/proser/proser_reports/dist/view/'


  window.__env.autoregister = true;

  window.__env.waitTime = 19.9;

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;

  console.log( 'Bienvenidos a ProSer - env loader' )
  // console.log( 'env - version 2.3.9', window.__env )


} )( this );
