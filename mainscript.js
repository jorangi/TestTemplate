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