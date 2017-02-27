//Thumbnail Generate -->
//<script type="text/javascript">

// Image List
var images = [
"a-whale-of-a-tale",
"bald-eagle-flying",
"barrel-racer",
"basset-hounds",
"beagles",
"call-of-thunder",
"cat-in-a-hat",
"cats",
"dancing-with-orca",
"dogs",
"dogs-playing-baseball",
"dogs-playing-basketball",
"dogs-playing-football",
"dogs-playing-golf",
"dogs-playing-hockey",
"dogs-playing-poker",
"dogs-playing-pool",
"dragon-maid",
"eagle-dance",
"early-morning-rose",
"exotic-safari",
"f15-fighter",
"f16-fighters",
"fairy-with-hummingbird",
"fighting-pegasus",
"flight",
"french-horn",
"frogs",
"growling-tiger",
"hes-wearin-red",
"howling-wolf",
"kiss-for-a-sailor",
"kitten-by-sunflower",
"kittens-in-window",
"lion-and-the-lamb",
"marine-life",
"mirror-image",
"moths-and-butterflies",
"number-1",
"old-timer",
"parrots",
"rodeo-ropin",
"sax",
"sharks",
"storyteller",
"talking-to-the-fish",
"team-roping",
"the-cat-whisperer",
"the-last-of-their-kind",
"the-winged-meadow",
"underwater-dragon",
"violin",
"white-buffalo",
"wild-deer",
"wonders-under-the-sea"
];

// Get Gallery ID
var gallery = document.getElementById('gallery');

// Loop through Image List
for (var t = 0, len = images.length; t < len; t++) {

    // Image Name
    var name = images[t];

    // Capitalize Title
    var title = name.replace(/-/g, ' '); //remove dash from filename
    title = title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); //capitalize

    // Gallery Grid Item
    /*var grid_item_layout = `
          <div class="grid-item">
              <a href="#` + name + `" data-featherlight="#` + name + `">
                  <img src="img/gallery/thumb/` + name + `.jpg" class="thumb" alt="` + title + `">
              </a>
              <div id="` + name + `" class="gallery-modal">
                    <img src="img/gallery/` + name + `.jpg" class="thumb" alt="` + title + `">
                    <div class="info">
                        <div class="title">` + title + `</div>
                        <div class="share"></div>
                        <!-- Clipboard -->
                        <input id="` + name + `" class="clipboard-link" value="http://www.danmcmans.com/#` + name + `">
                        <button class="btn-copy" data-clipboard-target="#` + name + `">
                          <img class="clippy" src="img/clippy.svg" alt="Copy link" width="13">
                        </button>
                    </div>
              </div>
          </div>
          `;*/


    var grid_item_layout = `
        <div class="grid-item" style="position: absolute; left: 0px; top: 0px;">
            <!-- DOM modal -->
            <a href="#` + name + `" class="` + name + `" data-featherlight="
                        <div id=&quot;` + name + `&quot;>
                            <img src=&quot;img/gallery/` + name + `.jpg&quot; alt=&quot;` + title + `&quot;>
                            <div class=&quot;info&quot;>
                                <div class=&quot;title&quot;>` + title + `</div>
                                <div class=&quot;share&quot;></div>
                                <!-- Clipboard -->
                                <input id=&quot;` + name + `-copy&quot; class=&quot;clipboard-link&quot; value=&quot;http://www.danmcmanis.com/#` + name + `&quot;>
                                <button class=&quot;btn-copy&quot; data-clipboard-target=&quot;#` + name + `-copy&quot; data-original-title=&quot;&quot; title=&quot;Copy Link&quot;>
                                  <img class=&quot;clippy&quot; src=&quot;img/clippy.svg&quot; alt=&quot;Copy link&quot; width=&quot;13&quot;>
                                </button>
                            </div>
                            <!-- pass image id to share function -->
                            <script type=&quot;text/javascript&quot;>
                                $(document).ready(function(){
                                    createShare(&quot;` + name + `&quot;);
                                });
                            </script>
                        </div>
                        ">
                <!-- thumb -->
                <img src="img/gallery/thumb/` + name + `.jpg" class="thumb" alt="` + title + `">
            </a>
        </div>
    `;

    // Append Grid Item to Gallery div
    gallery.innerHTML += grid_item_layout;
}
//</script>

//<!-- Share Buttons -->
//<script type="text/javascript">

// Share Footer Placeholder
//var share = '';

// Get All Modals
var modal = document.getElementsByClassName("gallery-modal"),
    m, len;

// loop through all elements having class name ".modal"
/*for (m = 0, len = modal.length; m < len; m++) {

    // Get Modal ID
    //var modal_id = document.getElementById(modal[m].id);
    //var modal_id = document.getElementsByClassName('modal')[0].id; //working 1
    //var modal_id = document.getElementById(modal[m])[0].id;
    //var modal_id = $(this).attr('id');

    var modal_id = modal[m].id;

    // Create Share Buttons with ID
    var share = `
    <!-- Sharingbutton Facebook -->
    <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `" target="_blank" aria-label="">
      <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
        </div>
      </div>
    </a>

    <!-- Sharingbutton Twitter -->
    <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Dan%20McManis%20Watercolor%20Art&amp;url=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `" target="_blank" aria-label="">
      <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
        </div>
      </div>
    </a>

    <!-- Sharingbutton Tumblr -->
    <a class="resp-sharing-button__link" href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Dan%20McManis%20Watercolor%20Art&amp;caption=Dan%20McManis%20Watercolor%20Art&amp;content=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `&amp;canonicalUrl=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `&amp;shareSource=tumblr_share_button" target="_blank" aria-label="">
      <div class="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"/></svg>
        </div>
      </div>
    </a>

    <!-- Sharingbutton Pinterest -->
    <a class="resp-sharing-button__link" href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `&amp;media=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `&amp;description=Dan%20McManis%20Watercolor%20Art" target="_blank" aria-label="">
      <div class="resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"/></svg>
        </div>
      </div>
    </a>

    <!-- Sharingbutton Reddit -->
    <a class="resp-sharing-button__link" href="https://reddit.com/submit/?url=http%3A%2F%2Fwww.danmcmanis.com/#` + modal_id + `" target="_blank" aria-label="">
      <div class="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"/></svg>
        </div>
      </div>
    </a>
    `;

    // Get Modal ID's Share div
    var modal_share = document.getElementById(modal_id).getElementsByClassName("share")[0];

    // Apply Share Buttons to Share div
    modal_share.innerHTML = share;
} 

                // Apply Share Buttons to Footer
                //var footer_share = document.getElementById('footer-share'); // get footer-share id
                //footer_share.innerHTML = share;


                //var items = document.getElementsByClassName("share"),
                //   i, len;

                // loop through all elements having class name ".share"
                //for (i = 0, len = items.length; i < len; i++) {
                //    items[i].innerHTML = share;
                //}     
            //</script>*/