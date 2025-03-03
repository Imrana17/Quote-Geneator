// Key Concept for the Project
/*
1. docoment.querySelector()
2. addEventListener()
3.Math Object()
4.innerText
*/

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let header = document.querySelector('.header');
let mainContent = document.querySelector('.main-content');
let button = document.querySelector('.new-quote');

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


const headStyles = [
  {borderColor: "#FF5733", textColor: "#FFFFFF", bgColor: "1C1C1C"},
  {borderColor: "#4A90E2", textColor: "#333333", bgColor: "#F5F5F5"},
  {borderColor: "#50C878", textColor: "#000000", bgColor: "#FFFFE0"},
  {borderColor: "#FFD700", textColor: "#2C2C2C", bgColor: "#FFF8DC"},
  {borderColor: "#6A0DAD", textColor: "#FFFFFF", bgColor: "#232323"},
  {borderColor: "#E63946", textColor: "#1D3557", bgColor: "#F1FAEE"},
  {borderColor: "#264653", textColor: "#E76F51", bgColor: "#F4A261"},
  {borderColor: "#D81159", textColor: "#FFCAD4", bgColor: "#2B2D42"},
  {borderColor: "#00A896", textColor: "#F8F9FA", bgColor: "#05668D"},
 {borderColor:"#C9A227", textColor: "#3B3B3B", 	bgColor: "#F8F4E3"},
 {borderColor:"#DB3A34", textColor: "#FFFFFF", 	bgColor: "#22223B"},
  {borderColor:"#2D6A4F", textColor: "#FFE8D6", 	bgColor: "#B5838D"},
  {borderColor:"#EE4266", textColor: "#FFEDDA", 	bgColor: "#540B0E"},
  {borderColor:"#1B998B", textColor: "#F8F1F1", 	bgColor: "#A4036F"},
  {borderColor:"#006D77", textColor: "#FFDDD2", 	bgColor: "#83C5BE"},
  {borderColor:"#6A0572", textColor: "#F2F2F2", 	bgColor: "#1B1B1B"},
  {borderColor:"#F77F00", textColor: "#03045E", 	bgColor: "#E5E5E5"},
  {borderColor:"#BC4749", textColor: "#FAF3E0", 	bgColor: "#386641"},
  {borderColor:"#7209B7", textColor: "#F8F9FA", 	bgColor: "#3A0CA3"},
  {borderColor:"#6F1D1B", textColor: "#D8B4A0", 	bgColor: "#F5F3E7"},
  {borderColor:"#1E3A8A", textColor: "#E0F2FE", 	bgColor: "#0F172A"},
  {borderColor:"#FF6F61", textColor: "#2E2E2E", 	bgColor: "#FFF5E1"},
  {borderColor:"#C084FC", textColor: "#312E81", 	bgColor: "#EDE9FE"},
  {borderColor:"#F59E0B", textColor: "#1E293B", 	bgColor: "#FEF3C7"},
  {borderColor:"#16A34A", textColor: "#FFFFFF", 	bgColor: "#1B4332"},
  {borderColor:"#9333EA", textColor: "#FDE68A", 	bgColor: "#581C87"},
  {borderColor:"#DC2626", textColor: "#FAFAFA", 	bgColor: "#7F1D1D"},
  {borderColor:"#15803D", textColor: "#FFFBEB", 	bgColor: "#14532D"},
  {borderColor:"#7E22CE", textColor: "#E0E7FF", 	bgColor: "#4C1D95"},
  {borderColor:"#0D9488", textColor: "#FAFAFA", 	bgColor: "#164E63"},  
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    let randomHead = Math.floor(Math.random() * headStyles.length);
    header.style.borderColor = headStyles[randomHead].borderColor;
    header.style.color = headStyles[randomHead].textColor;
    header.style.backgroundColor = headStyles[randomHead].bgColor;
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;

})