'use strict';

//this component will basically just toggle off/on the spinning of the walls
AFRAME.registerComponent('visible-effect', {
  schema: {
    duration: {type: 'number', default:20000.0},  //duration is in milliseconds
  },
  //multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.walls      = document.querySelector('#plane');
    Context_AF.invisible = false;
    
    //let's add the basic animation to teh walls entity
    //note that it is not enabled initially
    //Context_AF.walls.setAttribute('animation', {property:'rotation.y', to:360, loop:true, dur:Context_AF.data.duration, easing:'linear', enabled:false});
    Context_AF.walls.setAttribute('animation', {property:'visible', to:true});

    //listen on click
    Context_AF.el.addEventListener('click', function() {

      //Context_AF.walls.setAttribute('animation', {property:'visible', to:true});
      if (Context_AF.invisible === false) {
       console.log('invisible');
        Context_AF.walls.setAttribute('animation', {property:'visible', to:false});
        Context_AF.invisible = true;
      }
      else {
        console.log('visible');
        Context_AF.walls.setAttribute('animation', {property:'visible', to:true});
        Context_AF.invisible = false;
      }
    });
  },
  
  //component documentation: https://github.com/aframevr/aframe/blob/master/docs/core/component.md
  
  // update: function (oldData) {},
  // tick: function(time, timeDelta) {},
  // tock: function(time, timeDelta) {},
  // remove: function() {},
  // pause: function() {},
  // play: function() {},
  // updateScheme: function(data) {}
});
