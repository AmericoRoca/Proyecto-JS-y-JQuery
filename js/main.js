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

  //Theme Selector
  var theme = $('#theme');

  $('#to-green').click(function(){
    theme.attr("href", "css/green.css");
  });

  $('#to-red').click(function(){
    theme.attr("href", "css/red.css");
  });

  $('#to-blue').click(function(){
    theme.attr("href", "css/blue.css");
  });

  //Scroll
  $('.subir').click(function(e){

    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  //False login

  $("#login").submit(function(){
    var username = $("#username").val();
   

    localStorage.setItem("username", username);
   

  });

  
  var username = localStorage.getItem("username");


  if (username != null || username != "undefined") {
    var aboutp = $("#about p");

    aboutp.html("<strong>Welcome, "+ username+ "</strong>");
    aboutp.append("<a href='#' id='logout'>Logout</a>");

    $("#login").hide();

    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  }

  



});