// content.js
const removeAds = () => {
    // 选择所有具有 ad-status 属性的元素
    const ads = document.querySelectorAll('[ad-status]');
    ads.forEach(ad => ad.remove());
};

// 监听页面加载完成事件
window.addEventListener('load', removeAds);