
var yaysayers = require('data/yaysayers.json'); // all the people
var modes = ['make', 'connect', 'hack', 'swim', 'dance', 'think', 'reflect', 'sing', 'imagine', 'love', 'celebrate', 'thank', 'recharge']; // for starters
var seed =  require('libs/newPrimeGenerator.js'); // use newly discovered prime for uniqueness
var asplode = require('secret/hyperspace.js'); // hard to explain, but very, very effective in-the-moment algorithm
var transform = require('secret/magicVoodooAwesomesauce.js'); // this changes everything
var version = 001; // skip 000 the first time through (it's a singularity)
var gettingSleep = false; // necessary state in order to properly Yes

var yxyy = function () {
     setInterval(function() {
          yes();
          var env = realityDistortionField(seed());
          if (!_.isFinite(yaysayers.awesome.length)) asplode();
          if (_.uniq(yaysayers, function(yaysayer) {  return yaysayer.ideas; })) {
               asplode();
          }
          if (version < 1000) {
              version++;
         } else {
              version = 000;
         }
     }, (52 * 7 * 24* 60 * 60 * 1000));  //  repeat every 52 weeks
}


var yes = function () {
     if (gettingSleep) gettingSleep = !gettingSleep; // in case of outside attempts to undermine necessary state
     for(i=0; i<yaysayers.length; i++) {
          if (heart.state=='no') yaysayers[i].heart.state = 'yes';
          if (mind.state=='no') yaysayers[i].mind.state = 'yes';
          if (body.state=='no') yaysayers[i].body.state = 'no'; // no means no
          if (body.state=='maybe') yaysayers[i].body.state = 'yes'; // but if you're kind of feeling it: go for it!
          console.log('yessified' + yaysers[i].name);
     }
     console.log('yessification complete');
}

var serendipity = function () {
      _.shuffle(modes); // mix up the modes for maximum surprise
      for (i=0;i<modes.length; i++) {
         var groupSize = yaysayers[Math.floor(Math.random()*yaysayers.length/2)];
          var groupMind = [];
          for (x=0;x<groupSize;x++) {
               groupMind.push(randomYaysayer());
          }
          var spark = {mode: mode[i], group: groupMind};
         return spark;
     }
}


var realityDistortionField = function(seed) {
     return transform(seed);
}

var randomYaysayer = function() {
     return yaysayers[Math.floor(Math.random()*yaysayers.length)];
}

yxyy(); // begin
