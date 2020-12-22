clients = JSON.parse(localStorage.getItem('clients')) || []
ClientId=1234567
document.querySelector("#showForm").addEventListener('click', function(e){
    e.target.textContent == "Add New employee"? e.target.textContent="Hide Form": e.target.textContent="Add New employee";

    document.querySelector('#addTaskForm').classList.toggle('d-none')    
})
 document.querySelector("#addTaskData").addEventListener('submit',function(e){
   e.preventDefault()
    data = e.target.elements
    client ={ 
       id:ClientId
    }    
    
    for(i=0; i<data.length-1;i++){ 
       client[data[i].name] = data[i].value
   }
    clients.push(client)
    localStorage.setItem('clients', JSON.stringify(clients))
    e.target.reset()
    displayclients()
   document.querySelector('#table').classList.remove('d-none')  
   document.querySelector("#showForm").textContent="Add New employee"
   document.querySelector('#addTaskForm').classList.add('d-none')    
  
})
const displayclients = function(){
    document.querySelector('#tasks').innerHTML+=`
    <table class="table table-striped d-none"id="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Salary</th>
        <th scope="col">actions</th>
      </tr>
    </thead>
    <tbody>
   
      <tr>`
      clients.forEach((client,i) => {
         document.querySelector('#table').innerHTML+=`
         <td>${client.id}</td> 
        <td>${client.name}</td>
        <td>${client.salary}</td>
        <td><button  class="btn btn-info" id="info">Withdraw</button>
        <button  class="btn btn-danger" id="del">Delete</button></td>
      </tr>`
      document.querySelector('#del').addEventListener('click', function(){
        clients.splice(i,1)
        localStorage.setItem('clients',JSON.stringify(clients))
      })
})

}
