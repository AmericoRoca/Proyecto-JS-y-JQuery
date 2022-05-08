$(document).ready(function(){

  //Slider 

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true
  });

  //Posts
  var post = [
     {
        title: 'Test title 1',
        date: "Published: " + new Date(),
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus tenetur deserunt nam reprehenderit? Ea iste suscipit, et iusto totam aliquid  earum vitae dolorum officia magni quos? Illo aut natus delectus."
     },
     {
      title: 'Test title 2',
      date:  "Published: " + new Date(),
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus tenetur deserunt nam reprehenderit? Ea iste suscipit, et iusto totam aliquid  earum vitae dolorum officia magni quos? Illo aut natus delectus."
     },
     { 
      title: 'Test title 3',
      date: "Published: " +  new Date(),
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus tenetur deserunt nam reprehenderit? Ea iste suscipit, et iusto totam aliquid  earum vitae dolorum officia magni quos? Illo aut natus delectus."
     },
     {
      title: 'Test title 4',
      date: "Published: " +  new Date(),
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus tenetur deserunt nam reprehenderit? Ea iste suscipit, et iusto totam aliquid  earum vitae dolorum officia magni quos? Illo aut natus delectus."
     },
     {
      title: 'Test title 5',
      date:  "Published: " + new Date(),
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus tenetur deserunt nam reprehenderit? Ea iste suscipit, et iusto totam aliquid  earum vitae dolorum officia magni quos? Illo aut natus delectus."
     }
  ];

  post.forEach((item, index) =>{
    var post = `
      <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>${item.content}
      </p>
      <a href="#" class="button-more">Read more</a>
    </article>
    <br>
    <br>
    <br>
    <br>

  `;
    
  $("#posts").append(post);

  });

});