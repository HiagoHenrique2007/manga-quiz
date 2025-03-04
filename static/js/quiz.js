const cards = document.querySelectorAll('div.card');

const handleClick = (event) => {
  const option = event.target; // Elemento <li> clicado

  const isCorrect = option.getAttribute("data-correct");

  if (isCorrect.toLowerCase() === "false") {
    option.classList.add("incorrect");
  }

  // Para de ouvir os eventos de clique nos <li> dentro do card
  const card = option.closest(".card"); // Pega o card pai
  const options = card.querySelectorAll("li.option"); // Pega todas as opções dentro desse card
  options.forEach(option => {
    const isCorrect = option.getAttribute('data-correct');
    if(isCorrect.toLowerCase() === 'true') option.classList.add('correct');

  })

  options.forEach((opt) => opt.removeEventListener("click", handleClick));
};

cards.forEach((card) => {
  const options = card.querySelectorAll("li.option");
  options.forEach((option) => {
    option.addEventListener("click", handleClick);
  });
});


cards.forEach((card) => {

  const options = card.querySelectorAll('li.option')
  options.forEach(option => {

    option.addEventListener('click', handleClick);

  })

})