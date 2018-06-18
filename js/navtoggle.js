   document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  $(document).ready(function(){
            $('#nav-toggle').click(function(){
                $('ul').slideToggle("slow").toggleClass('showing');
            });
        });