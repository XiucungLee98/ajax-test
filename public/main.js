getCSS.onclick = function () {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = window.document.createElement("style");
      style.innerHTML = request.response;
      window.document.head.appendChild(style);
    }
  };

  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange=()=>{
      if(request.readyState===4 && request.status===200){
          const div = document.createElement('div')
          div.innerHTML = request.response
          document.body.appendChild(div)
      }
  }
  request.send()
};
getXML.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open("GET","/4.xml")
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}
getJSON.onclick=()=>{
  const request = new XMLHttpRequest
  request.open("GET","/5.json")
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
     try {
       const object = JSON.parse(request.response) 
       console.log(object)
     } catch (error) {
       console.log(error)
       object = {"id":undefined,"name":undefined}
       console.log(object)
     }
    }
  }
  request.send()
}
let n=1
getPage.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open("GET",`/page${n+1}`)
  request.onreadystatechange=()=>{
  if(request.readyState===4 && request.status===200){
    const array = JSON.parse(request.response)
    array.forEach(element => {
      const li = document.createElement('li')
      li.textContent = element.id
      xxx.appendChild(li);
    });
    n+=1
  }
  }
  request.send()
}