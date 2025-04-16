function showTooltip(event) {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) {
      tooltip.innerHTML = siiraTooltip;
      tooltip.style.display = 'block';
    }
}
function hideTooltip(event) {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) tooltip.style.display = 'none';
}