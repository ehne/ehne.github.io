<projects>
            <!-- is buttons (default) -->    
            
            <!-- is-desktop -->
            <a href="{link}" class="button blue-hover is-outset-4 is-outset-2-mobile {extras} is-big is-hidden-mobile is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
            <!-- is-mobile-->
            <a href="{link}" class="button blue-hover is-outset-4 is-outset-2-mobile {extras} is-shown-mobile is-100 is-big is-stack-4 is-hidden-print"  each={project} if={!opts.is_list}>{title}</a>
            
            <!-- is list -->
            <ul if={opts.is_list} class="is-hidden-print">
                <li each={project} class="hover-darcylf black {opts.spacing} "><a href="{link}" class="hover-darcylf black pr3" ><b>{title}</b></a></li>
            </ul>
            <div class="is-hidden-screen is-shown-print ">
                <ul>
                    <li each={project} class="hover-darcylf black"><a href="{link}" class="hover-darcylf black pr3"><b>{title}</b> <span class="is-underlined">{link}</span></a></li>
                </ul>
            </div>

            
  
    <script>

    this.project = [
      { title: 'integer.party', link:"https://github.com/ehne/numberfacts" },
      // {title: 'Zeke Butterworth\'s website, link: 'idk'},
      { title: 'Sun Weather App', link:"https://sun.darcylf.me" },
      { title: 'Is PTV late?', link:"https://ptvpwa.ehne.now.sh" },
      { title: 'Stellae De Crucis', link:"https://stellaedecrucis.space" },
      { title: 'Pongball', link:"https://github.com/Double-Fine-Game-Club/pongball" },
      { title: 'Is my Browser Internet Explorer?', link:"https://darcylf.me/isIE/"},
      { title: 'Collective Fullstack', link:"https://cf.darcylf.me" },
      { title: 'Shifting Weather', link:"https://github.com/ehne/shifting"},
      { title: 'darcylf.me', link:"https://github.com/ehne/ehne.github.io" },

    ]

    
  </script>
  <style type="text/css">

.is-underlined{
    text-decoration: underline;
    color:#05f
}

a.hover-darcylf:hover{
    color:#05f
}
 
 </style>
</projects>


