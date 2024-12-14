document.addEventListener('DOMContentLoaded', () => {

    const addTipButton = document.getElementById('addTipButton') as HTMLButtonElement;
    const highlightTipsButton = document.getElementById('highlightTipsButton') as HTMLButtonElement;
    const tipsList = document.getElementById('rubiks-tips-list') as HTMLUListElement;
  
    // Function to add a new tip to the list
    const addNewTip = () => {
      const newTip = document.createElement('li');
      newTip.textContent = 'Practice solving the Rubik’s Cube regularly!';
      tipsList.appendChild(newTip);
    };
  
    const highlightTips = () => {
      const tipsItems = tipsList.getElementsByTagName('li');
      for (let i = 0; i < tipsItems.length; i++) {
        tipsItems[i].style.backgroundColor = 'yellow'; 
      }
    };
  
    if (addTipButton) {
      addTipButton.addEventListener('click', addNewTip);
    }
  
    if (highlightTipsButton) {
      highlightTipsButton.addEventListener('click', highlightTips);
    }
  });
  