<projects>
            <!-- is buttons (default) -->    
            
            <!-- is-desktop -->
            <a href="{link}" class="button is-outset-4 hover-bg-black hover-white white is-outset-2-mobile {extras} is-big is-hidden-mobile is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
            <!-- is-mobile-->
            <a href="{link}" class="button is-outset-4 hover-bg-black hover-white white is-outset-2-mobile {extras} is-shown-mobile is-100 is-big is-stack-4 is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
            <!-- is list -->
            <ul if={opts.is_list} class="is-hidden-print">
                <li each={project} class="hover-darcylf black {opts.spacing}"><a href="{link}" class="hover-darcylf black pr3" ><b>{title}</b></a></li>
            </ul>
            <div class="is-hidden-screen is-shown-print ">
                <ul>
                    <li each={project} class="hover-darcylf black"><a href="{link}" class="hover-darcylf black pr3"><b>{title}</b> <span class="is-underlined">{link}</span></a></li>
                </ul>
            </div>

            
  
    <script>

    this.project = [
      { title: 'integer.party', link:"https://github.com/ehne/numberfacts" },
      { title: 'Sun Weather App', link:"https://sun.darcylf.me" },
      { title: 'Is PTV late?', link:"https://ptv.darcylf.me" },
      { title: 'Stellae De Crucis', link:"https://stellaedecrucis.space" },
      { title: 'Navigate for Compass', link:"https://github.com/ehne/Navigate" },
      { title: 'Pongball', link:"https://github.com/Double-Fine-Game-Club/pongball" },
      { title: 'Hair Simulator', link:"https://lonepaperclip.itch.io/ohs" },
      { title: 'Octothorpe Shuffler', link:"https://lonepaperclip.itch.io/octothorpe" },
      { title: 'Is my Browser Internet Explorer?', link:"https://darcylf.me/isIE/"},
      { title: 'This Website', link:"https://github.com/ehne/ehne.github.io" },

    ]

    
  </script>
  <style type="text/css">
    @media screen {
      .is-hidden-screen {
        display: none;
      }
    }
  	span{word-wrap:normal;}
    .b--darcylf{border-color:#fa0;}
    .hover-bg-black:hover{background-color:#000;}
    .pt2{padding-top:.5rem;}
    .pr3{padding-right:1rem;}
    .darcylf,.hover-darcylf:hover,.hover-darcylf:focus{color:#fa0;}
    .bg-darcylf,.hover-bg-darcylf:hover,.hover-bg-darcylf:focus{background-color:#fa0;}
    .hover-black:hover,.black{color:#000;}
    .hover-white:hover,.white{color:#fff;}
    .is-underlined {
        text-decoration: underline;
        color:#05f
    }
 </style>
</projects>


