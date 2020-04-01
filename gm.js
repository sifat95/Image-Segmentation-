// Include gm library 
var gm = require('gm'); 
  
// Import the image 
gm('ss.png') 
  
// Invoke segment function with 2, 0.2 
.segment(.0015, 1.5) 
  
// Process and Write the image 
.write("4.png", function (err) { 
  if (!err) console.log('done'); 
}); 
