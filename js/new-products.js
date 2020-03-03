const double_click_allowed = window.localStorage.getItem('double-click');
console.log({double_click_allowed})
console.log('window.location.search:', window.location.search)
let params = (new URL(document.location)).searchParams;
console.log('u:',params.get("u"));




const j1 = decodeURI(window.location.search)
  .replace('?', '')
  .split('&')
  .map(param => param.split('='))
  .reduce((values, [ key, value ]) => {
    values[ key ] = value
    return values
  }, {})

console.log({j1})

function iframeLoaded() {
      var iFrameID = document.getElementById('iFrame1');
      console.log({iFrameID})
      if(iFrameID) {
            // here you can make the height, I delete it first, then I make it again
            iFrameID.height = "";
            iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
            iFrameID.width = "100%"
      }
  }
/*
setTimeout(function() {
    document.getElementById('e3style').innerHTML += `
section#new-products article[data-sku]:hover {border:1px dashed green;}
    `;
  }, 5000);
  */

const style = document.createElement('style');
style.type = 'text/css'
style.appendChild(document.createTextNode(`
  .new-card h1 {
    margin: 15px 0px;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
  }
`));

double_click_allowed &&
style.appendChild(document.createTextNode(`
  section#new-products article.js-e3article:hover {
    border:2px dashed red;
  }
`))

const head = document.getElementsByTagName('head')[0];
head.appendChild(style)

/*
  Admin panel/menu.
*/
if (true || double_click_allowed) {
  const admin_panel = document.createElement('section');
  admin_panel.innerHTML = `
  <iframe id="iFrame1" src='./new-products-iframe.html' onload="iframeLoaded()"></iframe>
  `;
  const _body = document.getElementsByTagName('body')[0];
  _body.appendChild(admin_panel)
  console.log({admin_panel})
}
