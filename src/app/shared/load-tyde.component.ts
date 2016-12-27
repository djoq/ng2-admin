import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'load-tyde',
    template: `
      <i id="tyde" class="fa fa-spinner fa-pulse fa-spin fa-2x fa-navy"></i>
    `,
    styles: [`
	    #tyde {
	      margin-top: 165px;
		  margin-left: 50%;
		  margin-bottom: 165px;
		}
       
    `]
})
export class LoadTyde {
	wave: any;

	errorMessage = null;
	navigated = false; // true if navigated here

	constructor() {
	// this.filterUpdated.emit("update the lists");
	}

	surf(self){
		  let colors = ["#ccfff2","#99ffe6","#66ffd9","#33ffcc","#00ffbf","#00cc99","#009973","#008060","#00664d","#004d39"]
		  let target = document.getElementById("tyde")

		  var i = 0;
		  function warp() {
		    function go() {
		      i++;
		      function play() {
		        if(i<=9 && !!target)  {
		          target.style.color = colors[i];
		        }
		      }
		      play();
		      setTimeout(go,200);
		    }
		    go();
		  };
		  warp();
		  if( !!target ){
		    self.wave = target.style;
		    self.wave.opacity = "1";
		  }
		  (function fade(){(self.wave.opacity-=.1)<0?self.wave.display="none":setTimeout(fade,200)})();
	};
	

	ngOnInit(){
		this.surf(this);
		console.log("spin!")

	}
}
