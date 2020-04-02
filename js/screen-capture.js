var system = require('system');

// Web Address (URL) of the page to capture
var url  = "https://www.google.com/search?q=image&sxsrf=ALeKk03hAvNS-4uHU538EwmWjy3NRw4PdA:1585811091732&source=lnms&tbm=isch&sa=X&ved=2ahUKEwivtbbWlsnoAhUi7HMBHSp7Cs8Q_AUoAXoECA4QAw&biw=1426&bih=680";
// File name of the captured image
var file = "website"  + ".png";

var page = require('webpage').create();
var w = screen.width;

var h = screen.height;
// Browser size - height and width in pixels
// Change the viewport to 480x320 to emulate the iPhone
page.viewportSize = { width: w, height : h };

// Set the User Agent String
// You can change it to iPad or Android for mobile screenshots
page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5";

// Render the screenshot image
page.open ( url, function ( status ) {
  if ( status !== "success") {
       console.log("Could not open web page : " + url);
       phantom.exit();
   } else {
       window.setTimeout ( function() {
          page.render(file);
          console.log("Download the screenshot : " + file);
          phantom.exit();
       }, 1000);
   }
});