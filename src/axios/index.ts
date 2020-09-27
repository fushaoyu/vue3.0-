var xmlhttp: any = null;
if (window.XMLHttpRequest) {
  //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
  xmlhttp = new XMLHttpRequest();
} else {
  // IE6, IE5 浏览器执行代码
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}

const http = function (method: String = 'post', url: string, data: Object) {
  return new Promise((resolve, reject) => {
    xmlhttp.open(method, url, true);
    xmlhttp.send(data);
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response: any = xmlhttp.response;
        if (response) {
          resolve(JSON.parse(response));
        } else {
          reject();
        }
      }
    };
  });
};

export default http;
