function danceSushi(sushiName, parentElement) {
    const span = document.createElement('span');
    span.classList.add('part', sushiName);
    
    parentElement.appendChild(span);
    return parentElement.innerHTML;
}
export default danceSushi;