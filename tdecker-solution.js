var fs = require('fs');

fs.readFile('./names.txt', function (err, buf) 
{
  if (err) 
  {
    console.log(err);
    process.exit(1);
  }


  var arr = buf.toString().replace(/"/g,"").split(',').sort();
  var total = 0;

  for (var i = 0; i < arr.length; i++) 
  {
    var sortVal = i+1;
    var alphaVal = 0;
    for (var j = 0; j < arr[i].length; j++)
    {
      alphaVal += arr[i].charCodeAt(j) - 64;
    }
    total += (alphaVal * sortVal);
  }

  
  console.log(total);
});
