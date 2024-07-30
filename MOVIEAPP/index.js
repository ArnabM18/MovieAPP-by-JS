const userInput= prompt("Enter the movie name");

const movies=fetch("https://ghibliapi.vercel.app/films");
movies.then((res)=>res.json())
.then((allMovies)=>{
const matchingMovie=[];
allMovies.forEach((movie)=>{
if(movie.title.toLowerCase().includes(userInput.toLowerCase())){
   matchingMovie.push(movie);
   }
});
const moviesName=matchingMovie.reduce((acc,val,index)=>{
  return acc+`${index+1}:${val.title}\n`;
},'')
const input=parseInt(prompt(moviesName)-1)
alert(`Here are the details:Title:${matchingMovie[input].title}\n
description:${matchingMovie[input].description}\n
rating:${matchingMovie[input].rt_score}

`)

}).catch((err)=>{
  console.log(`something went wrong ${err}`);
})
