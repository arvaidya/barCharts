ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {
    width: 500,
    height: 35,
	
	width1: 0,
    height1: 35,
	width2: 0,
    height2: 35,
	width3: 0,
    height3: 35,
	percent1:0,
	percent2:0,
	percent3:0,
  }
});
/*
ractive.animate({ width: 300, height: 20 }, {
  easing: 'easeOut',
  duration: 800
});
*/
var selectedWidth='';
var percent = 0;
var width1=0;
var width2=0;
var width3=0;
var width=500;
var a = 0;
ractive.on({  min25: function ( event ) {
	
	
		changeBar(-4);
  },
   min10: function ( event ) {
	changeBar(-10);
  },
   plus10: function ( event ) {
 	changeBar(10);
  },
   plus25: function ( event ) {
	changeBar(4);
  }
});
var selectedBar='';
 // when the user makes a selection from the drop-down, update the chart
  ractive.observe( 'selectedIndex', function ( index ) {
    // Change `this.set()` to `this.animate()`
    selectedBar=index;
	
  });


var calculatedPercent=0;

  function changeBar(percent){
	//var percent = Math.round(percent);
if(selectedBar==='1'){
		calculatedPercent = width1 + (width/percent);
	
		if(calculatedPercent>=0){
			if(calculatedPercent<=500){
				width1 = calculatedPercent;
			}
			ractive.animate({ width1: width1,percent1:calculatedPercent/5}, {
		  easing: 'easeOut',
		  duration: 800
			});
		}
	}else if(selectedBar==='2'){
		calculatedPercent = width2 + (width/percent);
		if(calculatedPercent>=0){
				if(calculatedPercent<=500){
					width2 = calculatedPercent;
		
				}
			ractive.animate({ width2: width2,percent2:calculatedPercent/5}, {
			easing: 'easeOut',
			duration: 800
		});
		}
	}else if(selectedBar==='3'){
	calculatedPercent = width3 + (width/percent);
		if(calculatedPercent>=0){
				if(calculatedPercent<=500){
					width3 = calculatedPercent;
				}else{
		calculatedPercent = width3 + (width/percent);
				}
			ractive.animate({ width3: width3,percent3:calculatedPercent/5}, {
			easing: 'easeOut',
			duration: 800
		});
		}
	}
  }