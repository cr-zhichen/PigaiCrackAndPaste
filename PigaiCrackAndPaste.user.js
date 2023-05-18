// ==UserScript==
// @name        批改网去除禁止粘贴
// @namespace   Violentmonkey Scripts
// @match       http://www.pigai.org/*
// @match       https://www.pigai.org/*
// @grant       none
// @run-at      document-end
// ==/UserScript==

function disableOnPaste() {
    document.onpaste = e => { };
}

disableOnPaste();

// 配置观察选项:
const config = { attributes: true, childList: true, subtree: true };

// 当观察到DOM变化时，重新应用disableOnPaste
const callback = function (mutationsList, observer) {
    disableOnPaste();
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以配置的参数开始观察目标节点
observer.observe(document.body, config);
