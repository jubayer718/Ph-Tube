function getTimeString(time) {
  const month = parseInt(time / (86400 * 30));
  const year = parseInt(time/(86400*365));
  const hour = parseInt(time / 3600);
    let second = parseInt(time % 3600);
    const minute =parseInt(second / 60);
  second = second % 60;
  return (`${year} year ${month} month,${hour} hour ${minute} minute ${second} second ago`)
}

// get fetch, load and categories 
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

const loadCategoriesVideo = (id) => {
  alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideos(data.category))
  .catch(error=>console.log(error))
}

// const carDemo = {
// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
// }

// get video categories from API
const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error));
}
// get displayVideos function
const displayVideos = (videos) => {

  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = "";
  videos.forEach(video => {
    console.log(video)
    const div = document.createElement('div');
    div.classList = "card card-compact";
    
  
    div.innerHTML =
     `
      <figure class=" h-[200px] relative">
    <img
      src=${video.thumbnail} class="w-full h-full object-cover" />
      ${video.others.posted_date?.length===0?"":` <span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white text-[8px]">${getTimeString(video.others.posted_date)}</span>`}
     
  </figure>
  <div class="px-0 py-2 flex gap-3  ">
    <div class="w-10 h-10 ">
    <img class=" w-full h-full rounded-full object-cover " src="${video.authors[0].profile_picture}"/>
    </div>
    <div>
    <h3 class="font-bold">${video.title}</h3>
    <div class="flex gap-4 items-center">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
   ${video.authors[0].verified===true? `<p><img class="w-8 " src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"/></p>`:""}
    </div>
    <p class="text-gray-400">${video.others.views} </p>
    </div>

    
  </div>

    `
    videoContainer.append(div);
  })
}

//show button on display
const displayCategories = (categories) => {
  const categoryContainer=document.getElementById('categories')
 categories.forEach((item) => {
   console.log(item)
   //  create button
   const buttonContainer = document.createElement('div');
  //  button.classList = "btn";
  //  button.innerText = item.category;
   // button.onclick=alert("hello")
   buttonContainer.innerHTML =
     `
     <button  onclick="loadCategoriesVideo(${item.category_id})" class="btn">${item.category}</button>
     `
    

   //  push button inside the categories nav
   categoryContainer.append(buttonContainer);


 });
}
loadCategories()
loadVideo()