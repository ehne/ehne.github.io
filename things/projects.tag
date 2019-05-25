<projects>
            <!-- is buttons (default) -->    
            
            <!-- is-desktop -->
            <a href="{link}" class="button blue-hover is-outset-4 is-outset-2-mobile {extras} is-big is-hidden-mobile is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
            <!-- is-mobile-->
            <a href="{link}" class="button blue-hover is-outset-4 is-outset-2-mobile {extras} is-shown-mobile is-100 is-big is-stack-4 is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
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
      { title: 'Shifting Weather', link:"https://github.com/ehne/shifting"},
      { title: 'darcylf.me', link:"https://github.com/ehne/ehne.github.io" },
      { title: 'My Resume', link:"https://github.com/ehne/resume" },

    ]

    
  </script>
  <style type="text/css">

.is-underlined{
    text-decoration: underline;
    color:#05f
}
   
 </style>
</projects>


