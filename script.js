
const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');

noteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const noteText = noteInput.value;
  if (noteText.trim() !== '') {
    const noteItem = document.createElement('li');
    noteItem.textContent = noteText;
    noteList.appendChild(noteItem);
    noteInput.value = '';
    saveNoteToLocalStorage(noteText);
  } else {
    alert('Please enter a valid note');
  }
});

function saveNoteToLocalStorage(note) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
}
