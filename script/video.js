// get fetch, load and categories 
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};
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