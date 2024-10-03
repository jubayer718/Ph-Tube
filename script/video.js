// get fetch, load and categories 
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

// get video categories from API
const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error));
}
// get displayVideos function
const displayVideos = (videos) => {
  const videoContainer=document.getElementById('video-container')
  videos.forEach(videos => {
    const div = document.createElement('div');
    div.classList = "card card-compact";
    div.innerHTML =
     `
      <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
   const button = document.createElement('button');
   button.classList = "btn";
   button.innerText = item.category;
  

   //  push button inside the categories nav
   categoryContainer.append(button);


 });
}
loadCategories()
loadVideo()