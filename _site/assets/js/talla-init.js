var appID = "00c26be3-4421-41e6-bb00-1dee68740f67"; 
// token for anonymous profile
var token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODI4MDQzNDF9.RYf2x65FXvdDURzM h00i76KfUrYlsDLsw6mVuEv6zmE';
// -----
  Talla.config = Talla.init(
    appID,
    Talla.OptionJWTCredentials(token), 
    Talla.OptionBotName("Brightcove Doc Search"),
    Talla.OptionAnonymous(true),
    Talla.OptionThemeColor('rgb(239, 108, 42)'),
    Talla.OptionDisplayName('Search Brightcove Docs'),
    Talla.OptionKnowledgeGroups(['3811a860-2747-406d-a4a4-0d095d775a2d']),
    Talla.OptionWideBeacon(true),
    Talla.OptionBeaconCTA("Have a question?"),
    Talla.OptionOpenIcon('https://support.brightcove.com/site-assets/images/site/search.png'),
    Talla.OptionBotIcon('https://support.brightcove.com/site-assets/images/site/search.png'),
    Talla.OptionAutodetectSession,
    //---- NEW-----Redirects to portal
    Talla.OptionRequestSubmittedCallback( function(widget, data) {
      window.open("https://supportportal.brightcove.com/s/login/?language=en_US&startURL=%2Fs%2F&ec=302")
    })
  );
// configure to load up as custom placement
Talla.chat = Talla.config.configure(Talla.OptionLoadChat);
// function to load up the chat
 function displayChat() {
   Talla.chat.managedDisplay(Talla.OptionDetectParent(() => { return document.querySelector('#talla_chat')} ));
 }