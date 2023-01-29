const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const button = document.querySelector('.btn');

const quotes = [
  {
    quote:
      'Always remember that you are absolutely unique. Just like everyone else.',
    person: 'Margaret Mead',
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    person: 'Mother Teresa',
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    person: 'Anne Frank',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    person: 'Robert Louis Stevenson',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    person: 'Eleanor Roosevelt',
  },
];

button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
