const ytpl = require('ytpl');


function fetchinfo(url)
{
    return ytpl(url);
}

module.exports=fetchinfo;
