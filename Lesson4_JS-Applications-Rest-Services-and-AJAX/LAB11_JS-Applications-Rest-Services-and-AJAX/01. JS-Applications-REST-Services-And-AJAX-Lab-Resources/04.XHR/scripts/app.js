function loadRepos() {
   let gitHubUrl = 'https://api.github.com/users/cybre3/repos';
   const resultDiv = document.getElementById('res');
   const httpRequest = new XMLHttpRequest();

   // console.log(httpRequest)

   httpRequest.addEventListener('readystatechange', function(){
      // console.log(httpRequest) // shows each readyState
      if(httpRequest.readyState == 4 && httpRequest.status == 200) {
         console.log(JSON.parse(httpRequest.responseText));
         resultDiv.textContent = httpRequest.responseText;
      }
   });

   httpRequest.open('GET', gitHubUrl);
   httpRequest.send();
}