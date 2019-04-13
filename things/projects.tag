<projects>
            	<a href="{link}" class="button is-outset-4 hover-bg-black hover-white white"  each={project} if={!opts.is_list}>{title}</a>

            <ul if={opts.is_list}>
                <li each={project} class="hover-darcylf black"><a href="{link}" class="hover-darcylf black pr3" ><b>{title}</b></a></li>
            </ul>
            
  
    <script>

    this.project = [
      { title: 'integer.party', link:"https://integer.party" },
      { title: 'Sun Weather App', link:"https://sun.darcylf.me" },
      { title: 'Is PTV late?', link:"https://ptv.darcylf.me" },
      { title: 'Is my Browser Internet Explorer?', link:"https://darcylf.me/isIE/" },
      { title: 'Stellae De Crucis', link:"https://stellaedecrucis.space" },
      { title: 'Navigate for Compass', link:"https://github.com/ehne/Navigate" },
      { title: 'Pongball', link:"https://github.com/Double-Fine-Game-Club/pongball" },


    ]

    
  </script>
  <style type="text/css" media="screen">
  	span {
      	  word-wrap: normal;


  	}
  	.darcylf { color: #fa0; }
.bg-darcylf { background-color: #fa0; }
.b--darcylf { border-color: #fa0; }

.hover-darcylf:hover,
.hover-darcylf:focus { color: #fa0; }

.hover-bg-darcylf:hover,
.hover-bg-darcylf:focus { background-color: #fa0; }
.hover-black:hover {
    color:#000;
}
.hover-white:hover {
    color:#fff;
}
.white {
    color:#fff;
}
.hover-bg-black:hover {
    background-color:#000;
}
.black {
    color:#000
}
.pt2 {
    padding-top: .5rem
}
.pr3{
    padding-right: 1rem

}
  </style>
</projects>


