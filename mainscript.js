function showTooltip(event, key) {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) {
      tooltip.innerHTML = Tooltip[key];
      tooltip.style.display = 'block';
    }
}
function hideTooltip(event) {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) tooltip.style.display = 'none';
}


function copyChoice(button) {
  const parent = button.closest('.choice-option');
  const text = parent.innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert('선택지 복사 완료!'))
    .catch(() => alert('복사 실패'));  
}