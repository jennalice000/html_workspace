document.addEventListener('DOMContentLoaded', function() {
    const notepad = document.getElementById('notepad');
    const saveButton = document.getElementById('saveButton');
    const noteList = document.getElementById('noteList');
  
    loadNotesFromLocalStorage();
  
    notepad.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowUp') {
        moveCursor('up');
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        moveCursor('down');
        e.preventDefault();
      }
    });
  
    saveButton.addEventListener('click', function() {
      const noteText = notepad.textContent.trim();
  
      if (noteText !== '') {
        const noteItem = createNoteItem(noteText);
        noteList.appendChild(noteItem);
        notepad.textContent = '';
  
        saveNotesToLocalStorage();
      }
    });
  
    function moveCursor(direction) {
      const selection = window.getSelection();
      const range = document.createRange();
      const selectedNode = selection.focusNode.parentNode;
  
      range.setStart(selectedNode[direction + 'Sibling'], 0);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function editNoteItem(noteItem) {
        const noteText = noteItem.textContent;
        notepad.textContent = noteText;
        notepad.focus();
        saveButton.removeEventListener('click', saveNewNote);
        saveButton.addEventListener('click', saveEditedNote.bind(null, noteItem));
      }
      
  
    function deleteNoteItem(noteItem) {
      noteList.removeChild(noteItem);
      saveNotesToLocalStorage();
    }
  
    function createNoteItem(noteText) {
      const noteItem = document.createElement('li');
      noteItem.classList.add('note-item');
      noteItem.textContent = noteText;
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', function() {
        editNoteItem(noteItem);
      });
      noteItem.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', function() {
        deleteNoteItem(noteItem);
      });
      noteItem.appendChild(deleteButton);
  
      return noteItem;
    }
  
    function loadNotesFromLocalStorage() {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        noteList.innerHTML = savedNotes;
      }
    }
  
    function saveNotesToLocalStorage() {
      localStorage.setItem('notes', noteList.innerHTML);
    }
  });
  