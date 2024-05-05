// Task 1: Iterate with `forEach`

function oscarmovies()
{
let oscar = [
    {
        "title": "Parasite",
        "year": 2020,
        "genre": "Thriller",
        "director" :"Bong Joon Ha"
    },
    {
        "title": "Green Book",
        "year": 2019,
        "genre": "Drama",
        "director" :"Peter Farelley"
          },
          {
            "title": "The Shape of Water",
            "year": 2018,
            "genre": "Fantasy",
            "director" :"Guillermo del Toro"
        }]


        oscar.forEach(function(oscarmovies){
            console.log("Title is : " + "["+ oscarmovies.title +"]" + "Year is :" + "["+ oscarmovies.year +"]" 
        +"Genre is :" + "["+ oscarmovies.genre +"]" + "Director is :" + "["+ oscarmovies.director +"]");
          });  
          
            oscar.forEach(function(item,index,arr){
            console.log(`ForEach= Index:[${index}],Title:[${item.title}], Director:[${item.director}]`)
        })

       }   
       
    
    export default oscarmovies;