//READ ME: This app uses Javascript, Rest API, and AJAX to generate baby names on the screen without having to reload.




document.querySelector('#generate-names').addEventListener('submit', loadNames);


//Execute Function to query the API
function loadNames(e){
    e.preventDefault();

    //read in the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //Build the url
    let url = 'http://uinames.com/api/?';
    //read origin and append to the url
    if(origin !== '')
    {
        url += `region=${origin}&`;
    }
    //read gender and append to the url
    if(genre !== '')
    {
        url += `gender=${genre}&`;
    }
    //read amount and append to the url
    if(amount !== '')
    {
      url += `amount=${amount}&`;
    }

    //AJAX CALL
    const xhr = new XMLHttpRequest();

    //OPEN CONNECTION
    xhr.open('GET', url, true);

    //execute the function
    xhr.onload = function(){
        if(this.status === 200)
        {
            const names = JSON.parse(this.responseText);
            
            //insert into the HTML
            let html = '<h2>Generated Names</h2>';
            html +='<ul class="list">';
            names.forEach(function(name){
                html += `
                    <li>${name.name}</li>
                `;
            });


            html +='</ul>';
            document.querySelector('#result').innerHTML = html;
        }
    }

    xhr.send();


}