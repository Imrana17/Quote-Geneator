let mainContent = document.querySelector('.main-content');
let quote = document.querySelector('.quote');
let header = document.querySelector('.header');
let textArea = document.querySelector('.text-area');
let author = document.querySelector('.author');

// List of quotes and authors
const quotes = [
    { quote: `"The only limit to our realization of tomorrow is our doubts of today."`, 
      author: "Franklin D. Roosevelt"},
    { quote: `"In the middle of every difficulty lies opportunity."`, 
      author: "Albert Einstein" },
    { quote: `"Success is not the key to happiness. Happiness is the key to success."`, 
      author: "Albert Schweitzer" },
    { quote: `"Don’t watch the clock; do what it does. Keep going."`, 
      author: "Sam Levenson" },
    { quote: `"The future belongs to those who believe in the beauty of their dreams."`, 
      author: "Eleanor Roosevelt" },
    { quote: `"Act as if what you do makes a difference. It does."`, 
      author: "William James" },
    { quote: `"Do what you can, with what you have, where you are."`, 
      author: "Theodore Roosevelt" },
    { quote: `"It is never too late to be what you might have been."`, 
      author: "George Eliot" },
    { quote: `"You miss 100% of the shots you don’t take."`, 
      author: "Wayne Gretzky" },
    { quote: `"The best way to predict the future is to invent it."`, 
      author: "Alan Kay" },
    { quote: `"Believe you can and you're halfway there."`, 
      author: "Theodore Roosevelt" },
    { quote: `"Happiness is not something ready-made. It comes from your own actions."`, 
      author: "Dalai Lama" },
    { quote: `"It always seems impossible until it’s done."`, 
      author: "Nelson Mandela" },
    { quote: `"Keep your face always toward the sunshine—and shadows will fall behind you."`, 
      author: "Walt Whitman" },
    { quote: `"What lies behind us and what lies before us are tiny matters compared to what lies within us."`, 
      author: "Ralph Waldo Emerson" },
    { quote: `"Opportunities don't happen. You create them."`, 
      author: "Chris Grosser" },
    { quote: `"Do what you feel in your heart to be right—for you’ll be criticized anyway."`, 
      author: "Eleanor Roosevelt" },
    { quote: `"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart."`, 
      author: "Roy T. Bennett" },
    { quote: `"I never dreamed about success. I worked for it."`, 
      author: "Estée Lauder" },
    { quote: `"Hardships often prepare ordinary people for an extraordinary destiny."`, 
      author: "C.S. Lewis" },
    { quote: `"Success is not how high you have climbed, but how you make a positive difference to the world."`, 
      author: "Roy T. Bennett" },
    { quote: `"Happiness is not by chance, but by choice."`, 
      author: "Jim Rohn" },
    { quote: `"Don’t count the days, make the days count."`, 
      author: "Muhammad Ali" },
    { quote: `"If you want to lift yourself up, lift up someone else."`, 
      author: "Booker T. Washington" },
    { quote: `"The only way to do great work is to love what you do."`, 
      author: "Steve Jobs" },
    { quote: `"Don’t let yesterday take up too much of today."`, 
      author: "Will Rogers" },
    { quote: `"It does not matter how slowly you go as long as you do not stop."`, 
      author: "Confucius" },
    { quote: `"Dream big and dare to fail."`, 
      author: "Norman Vaughan" },
    { quote: `"A journey of a thousand miles begins with a single step."`, 
      author: "Lao Tzu" },
    { quote: `"Everything you’ve ever wanted is on the other side of fear."`, 
      author: "George Addair" },

];

setInterval(

  function(){
     let random = Math.floor(Math.random() * quotes.length);
     quote.innerText = quotes[random].quote;
     author.innerText = quotes[random].author;
 
 
 }, 3000);


const headStyles = [

  {borderColor: "yellow", 
  textColor: "black", 
  bgColor: "Blender", 
  boxShadow: "0 0 15px yellow"},
  
  {borderColor: "mediumblue", 
  textColor: "black", 
  bgColor: "oldlace", 
  boxShadow: "0 0 15px mediumblue"},

  {borderColor: "navy", 
  textColor: "black", 
  bgColor: "snow", 
  boxShadow: "0 0 15px navy"},

  {borderColor: "lime", 
  textColor: "black", 
  bgColor: "#FFF8DC", 
  boxShadow: "0 0 15px lime"},
  
  {borderColor: "deeppink", 
  textColor: "white", 
  bgColor: "Silk", 
  boxShadow: "0 0 15px deeppink"},

  {borderColor: "chartreuse", 
  textColor: "black", 
  bgColor: "#F1FAEE", 
  boxShadow: " 0 0 15px chartreuse" },
  
  {borderColor: "indigo", 
  textColor: "True Black", 
  bgColor: "antiquewhite", 
  boxShadow: " 0 0 15px indigo"},
  
 
  {borderColor: "orchid", 
  textColor: "#FFCAD4", 
  bgColor: "#2B2D42", 
  boxShadow: " 0 0 15px orchid"},
  
  {borderColor: "hotpink", 
  textColor: "#F8F9FA",  
  bgColor: "gold", 
  boxShadow: " 0 0 15px hotpink"},

  {borderColor:"rgb(230, 182, 28)", 
  textColor: "#3B3B3B",  
  bgColor: "#F8F4E3", 
  boxShadow:"0 0 15px rgb(230, 182, 28)" },

  {borderColor:"purple", 
  textColor: "#FFFFFF",   
  bgColor: "#22223B", 
  boxShadow:"0 0 15px purple"},

  {borderColor:"saddlebrown", 
  textColor: "black", 	
  bgColor: "bisque", 
  boxShadow:" 0 0 15px saddlebrown"},
  
  {borderColor:"#EE4266", 
  textColor: "#FFEDDA", 	
  bgColor: "#540B0E", 
  boxShadow:" 0 0 15px #EE4266"},

  {borderColor:"Green", 
  textColor: "black",  
  bgColor: "khaki", 
  boxShadow:" 0 0 15px Green"},
  
  {borderColor:"blue", 
  textColor: "#FFDDD2", 	
  bgColor: "#83C5BE", 
  boxShadow:" 0 0 15px blue" },


 {borderColor:"#6A0572", 
  textColor: "#F2F2F2", 	
  bgColor: "#1B1B1B", 
  boxShadow:"0 0 15px #6A0572" },

  
  {borderColor:"#F77F00", 
  textColor: "black", 	
  bgColor: "#E5E5E5", 
  boxShadow:"0 0 15px #F77F00" },
  
 {borderColor:"lime", 
  textColor: "darkgreen", 	
  bgColor: "lightgreen", 
  boxShadow:"0 0 15px lime"},

  {borderColor:"darkmagenta", 
  textColor: "#F8F9FA", 	
  bgColor: "dodgerblue", 
  boxShadow:"0 0 15px darkmagenta"},

  {borderColor:"turquoise", 
  textColor: "black", 	
  bgColor: "white", 
  boxShadow:"0 0 15px turquoise"},
  
  {borderColor:"#1E3A8A", 
  textColor: "#E0F2FE", 	
  bgColor: "#0F172A", 
  boxShadow:"0 0 15px #1E3A8A" },

  
  {borderColor:"#00FFFF", 
  textColor: "black", 	
  bgColor: "#FFF5E1", 
  boxShadow:"0 0 15px #00FFFF"},

  {borderColor:"#39FF14", 
  textColor: "black", 	
  bgColor: "ivory", 
  boxShadow:"0 0 15px #39FF14"},

  {borderColor:"#FF10F0", 
   textColor: "#1E293B", 	
   bgColor: "#FEF3C7", 
   boxShadow:"0 0 15px #FF10F0"},

  {borderColor:"#16A34A", 
  textColor: "#FFFFFF", 	
  bgColor: "#1B4332", 
  boxShadow:"0 0 15px #16A34A"},
  
  {borderColor:"rgb(43, 255, 0)", 
  textColor: "#FFFFFF", 	
  bgColor: "#581C87", 
  boxShadow:"0 0 15px rgb(43, 255, 0)"},

  {borderColor:"darkmagenta", 
   textColor: "#FAFAFA", 	
   bgColor: "violet", 
   boxShadow:"0 0 15px darkmagenta"},
   
  {borderColor:" rgb(37, 230, 104)", 
   textColor: "#FFFBEB", 	
   bgColor: "#14532D", 
   boxShadow:"0 0 15px rgb(37, 230, 104)"},


  {borderColor:"rgb(148, 36, 247)", 
   textColor: "#E0E7FF", 	
   bgColor: "#4C1D95", 
   boxShadow:"0 0 15px rgb(148, 36, 247)"},

  
  {borderColor:"#0D9488", 
  textColor: "#FAFAFA", 	
  bgColor: "#164E63", 
  boxShadow:"0 0 15px #0D9488"},  
  
];



setInterval(
function(){
  let randomHead = Math.floor(Math.random() * headStyles.length);
    
  header.style.boxShadow = headStyles[randomHead].boxShadow;
      header.style.color = headStyles[randomHead].textColor;
      header.style.backgroundColor = headStyles[randomHead].bgColor;

      textArea.style.color = headStyles[randomHead].textColor;
     author.style.color = headStyles[randomHead].borderColor;
     mainContent.style.backgroundColor = headStyles[randomHead].bgColor;

     mainContent.style.boxShadow = headStyles[randomHead].boxShadow;
}, 3000

);
