// Funkcja dla strony głównej
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Przycisk kliknięty na Stronie Głównej!');
  });
  
  // Funkcja dla podstrony 1
  document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textToChange').innerText = 'Tekst został zmieniony!';
  });
  
  // Funkcja dla podstrony 2 - formularz komentarza
  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment').value;
    if (commentText) {
      const commentList = document.getElementById('commentsList');
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      document.getElementById('comment').value = ''; // Czyszczenie pola
    } else {
      alert('Proszę wpisać komentarz!');
    }
  });
  