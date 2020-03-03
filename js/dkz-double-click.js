const double_click_allowed = window.localStorage.getItem('double-click');
console.log({double_click_allowed})

/*
console.log('window.location.search:', window.location.search)
let params = (new URL(document.location)).searchParams;
console.log('u:',params.get("u"));
*/

const style = document.createElement('style');
style.type = 'text/css'
style.appendChild(document.createTextNode(`
  .js-e3article {
    border:2px dashed transparent;
  }
`));

double_click_allowed &&
style.appendChild(document.createTextNode(`
  .js-e3article:hover {
    border:2px dashed red;
  }
`))

double_click_allowed &&
style.appendChild(document.createTextNode(`
  .js-e3article-hover {
    border:2px dashed red;
  }
`))


const head = document.getElementsByTagName('head')[0];
head.appendChild(style) // 3 declarations

$(document).ready(()=>{
  const _body = document.getElementsByTagName('body');
  _body[0].addEventListener('dblclick', (e)=>{
    //const target = e.target;
    //console.log('>> double-click ', e.target)
    let target = e.target;
    if (!target.classList.contains('js-e3article')) {
      target = target.closest('.js-e3article');
    }
    //console.log('>> double-click ', target)
    if (target) {
      const ai = $(target).attr('id')
      const xid = $(target).attr('xid') || $(target).attr('id');
      const sku = $(target).data('sku')
      //console.log({sku})
      //console.log('>> double-click id:', $(target).attr('id'))

      const xurl = (ai.startsWith('/'))?
        `editora.us/edit-article?fn=${location.hostname}/${ai.substring(1)}.md`
        : `http://ultimheat.co.th/editora/edit-article/${ai}?url=${document.location.host}${document.location.pathname}`;

      const url = `http://${document.location.host}/editora/article/${xid}?h=${document.location.hostname}&p=${document.location.pathname}`
//      const url = `http://${document.location.host}/editora/edit?xid=${xid}&h=${document.location.hostname}&p=${document.location.pathname}`
//      const url = `http://localhost:3000/edit?xid=${xid}&h=${document.location.hostname}&p=${document.location.pathname}`

      console.log({url});
      console.log(document.location)

//      window.open(url, '_blank')
//      window.open(url, 'http://localhost:3000/article/${xid}')
      const tab = window.open(url, url);
      tab.focus();
      return false;
    }
  })

  /*
  $('#submit').on('click', function(e) {
    console.log('intercepted submit.')
    $('input[name=success]').attr('type', 'text');
    return false;
  })*/


})
