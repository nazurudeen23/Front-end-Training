const getBtn = document.getElementById('get-btn')

const getData = () => 
{
  const xhr = new XMLHttpRequest()
  xhr.open('GET','https://reqres.in/api/users/3')
  xhr.send()
  
}

getBtn.addEventListener('click',getBtn)

const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status ==200){
           document.getElementById('data').textContent=xhr.responseText
        }
        if(xhr.status == 404){
            console.log('file or resource not found')
        }
    }
}
xhr.open('GET','https://reqres.in/api/users?page=2',true )
xhr.send()




