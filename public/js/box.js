'use strict';

AFRAME.registerComponent('box', {
    schema: {
        duration: {type: 'number', default:20000.0},
      width: {type: 'number', default: 1},
      height: {type: 'number', default: 1},
      depth: {type: 'number', default: 1},
      color: {type: 'color', default: '#AAA'}
    },
  
    init: function () {
      var data = this.data;
      var el = this.el;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      //el.setObject3D('mesh', this.mesh); 
     //data.boxCreate = false;

      data.el.addEventListener('click', function() {

        el.setObject3D('mesh', this.mesh);


      });




    },

    remove: function () {
        this.el.removeObject3D('mesh');
      }
    });