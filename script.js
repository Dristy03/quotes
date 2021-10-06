
var quotes = [
    {
      content: "The ultimate inspiration is the deadline.",
      author: "Nolan Bushnell"},
      {
        content: "The greatest glory in living lives not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"},
        
    {
      content: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"},
      {
        content: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"},
        {
          content: "Life is what happens when you're busy making other plans.",
          author: "John Lennon"},
          {
            content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            author: "Mother Teresa"},
     {
          content: "When you reach the end of your rope, tie a knot in it and hang on.",
          author: "Franklin D. Roosevelt"},
      {
          content: "It is during our darkest moments that we must focus to see the light.",
          author: "Aristotle"},  
    {
      content: "Only show work you like, or you’ll end up being hired to do things you don’t like.",
      author: "Victoria Pater"},
    {
      content: "Designing with watermarked photos is like baking with fake sugar.",
      author: "Justin Giovanetti"},

      {
        content: "Whoever is happy will make others happy too.",
        author: "Anne Frank"},
  {
        content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"},
    {
      content: "Everybody’s a web designer until, you know, they actually try to do it.",
      author: "Gabe Boning"},
    {
      content: "We read best what we read most.",
      author: "Zuzana Licko"},
    {
      content: "Stop. I’m not going to take any more input until I’ve made something with what I got.",
      author: "Merlin Mann"},
    {
      content: "The grid system is an aid, not a guarantee.",
      author: "Josef Muller-Brockmann"},
    {
      content: "Design is the conscious effort to impose a meaningful order.",
      author: "Victor Papanek"},
    {
      content: "Copying one person is stealing. Copying ten is research.",
      author: "Chet Atkins"},
    {
      content: "There’s a difference between being obsessed and being motivated.",
      author: "Mark Zuckerburg"},
    {
      content: "If you never want to be criticized, for goodness’ sake don’t do anything new.",
      author: "Jeff Bezos"},
    {
      content: "Why expect spec work from a graphic designer when you don’t expect the same from a dentist?",
      author: "Samadara Ginige"},
    {
      content: "If design isn’t profitable, then it’s art.",
      author: "Henrik Fiskar"},
    {
      content: "Design has become the cover for unnecessary consumption.",
      author: "Peter Saville"},
    {
      content: "The enemy of art is the absence of limitations.",
      author: "Orson Welles"},
    {
      content: "You don’t get harmony if everyone sings the same note.",
      author: "Steve Honey"},
    {
      content: "Moderation in all things, including moderation.",
      author: "Petronius"},
    {
      content: "Any product that needs a manual to work is broken.",
      author: "Elon Musk"},  
    {
      content: "The sharpness of the sword is not in the edge of the blade, but in the hand of the warrior.",
      author: "Martin Aquino"},
    {
      content: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"},
    {
      content: "Here’s the world’s worst idea for a movie: Titanic. It did okay at the box office.",
      author: "Scott Adams"},
    {
      content: "IF YOU MAKE EVERYTHING BOLD, NOTHING IS BOLD.",
      author: "Art Webb"},
    {
      content: "Creativity is a habit. It’s not something that happens in the shower.",
      author: "Nick Law"},
    {
      content: "Clients are full of surprises. Design is what you make of the surprises.",
      author: "Dan Phillips"},
    {
      content: "Designing with watermarked photos is like baking with fake sugar.",
      author: "Justin Giovanetti"},
    {
      content: "I am always driven by the terror of humiliation.",
      author: "Judd Apatow"},
    {
      content: "A good designer may not have all the answers, but he knows which questions to ask.",
      author: "Rudy Duke"},
    {
      content: "A camel is a horse designed by a committee.",
      author: "Sir Alec Issigonis"},
    {
      content: "Beauty is the ultimate defense against complexity.",
      author: "David Gelernter"},
    {
      content: "The more uninteresting the letter, the more useful it is to the typographer.",
      author: "Piet Zwart"},
    {
      content: "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
      author: "Arthur Schopenhauer"},
    {
      content: "Everyone has a plan until they get punched in the face.",
      author: "Mike Tyson"}
  ];
  
    $("#get-quote").on("click",function(){
   
      var i=Math.floor(Math.random()*quotes.length); 
     
      $(".c-quote__content").html("<i class='fa fa-quote-left'></i> "
          + quotes[i].content 
          + " <i class='fa fa-quote-right'></i>");
   

       $(".c-quote__author").html("<i class='fa-regular fa-feather'></i>" + '- '
          + quotes[i].author);
  

    });

    $("#get-bg").on("click",function(){

      var i=Math.floor(Math.random()*10); 
      var s = "url(assets/sky" + i + ".jpg)";
    //  console.log(s);
      document.body.style.backgroundImage=s;
  

    });

    playlist  = [
      "assets/child.mp3",
      "assets/forest.mp3",
      "assets/nature.mp3",
      "assets/simplicity.mp3",
      "assets/warm.mp3",
    ];

 

    $("#change-audio").on("click",function(){

      document.getElementById('audio').remove();
      var i=Math.floor(Math.random()*5); 
     
      playSound(playlist[i]);
  

    });

    function playSound(url){
      var audio = document.createElement('audio');
      audio.style.display = "none";
      audio.src = url;
      audio.volume = 0.2;
      audio.autoplay = true;
      audio.onended = function(){
        audio.remove()
      };
      document.body.appendChild(audio);
    }


    playSound(playlist[0]);