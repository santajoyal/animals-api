var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-5");
container.append(row);
document.body.append(container);
async function foo(){
    try {
        var res=await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10");
        var res1=await res.json();
        for(var i=0;i<res1.length;i++){
            row.innerHTML+=`<div class="col-md-4">
            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header"><b>${res1[i].name}</b></div>
            <div class="card-body">
            <img src="${res1[i].image_link}" class="card-img-top" alt="img">
            <h6 class="card-title">${res1[i].animal_type}</h6>
            <p class="card-text"><b>Latin name: </b>${res1[i].latin_name}</p>
            <p class="card-text"><b>Place: </b>${res1[i].geo_range}</p>
            <p class="card-text"><b>Habitat: </b>${res1[i].habitat}</p>
            <p class="card-text"><b>Food: </b>${res1[i].diet}</p>
            <p class="card-text"><b>length: </b>${res1[i].length_min}ft TO ${res1[i].length_max}ft</p>
            <p class="card-text"><b>weight: </b>${res1[i].weight_min}kg TO ${res1[i].weight_max}kg</p>
            <p class="card-text"><b>Life span: </b>${res1[i].lifespan} years</p>
            <p class="card-text"><b>Active time: </b>${res1[i].active_time}</p>
            </div>
            </div>
          </div>`;
        }
    } 
    catch (error) {
        console.log(error);
    }
}
foo();