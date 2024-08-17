'use strict';

const beers = [
  {
    src: 'img/pilsnerurquell.jpg',
    alt: 'ピルスナー',
    category: 'LAGER',
    name: 'ピルスナー',
    modalId: 'modal001',
  },
  {
    src: 'img/dortmunder.jpg',
    alt: 'ドルトムンダー',
    category: 'LAGER',
    name: 'ドルトムンダー',
    modalId: 'modal002',
  },
  {
    src: 'img/helles.jpg',
    alt: 'ヘレス',
    category: 'LAGER',
    name: 'ヘレス',
    modalId: 'modal003',
  },
  {
    src: 'img/bock.jpg',
    alt: 'ボック',
    category: 'LAGER',
    name: 'ボック',
    modalId: 'modal004',
  },
  {
    src: 'img/paleale.jpg',
    alt: 'ペールエール',
    category: 'ALE',
    name: 'ペールエール',
    modalId: 'modal005',
  },
  {
    src: 'img/ipa.jpg',
    alt: 'IPA',
    category: 'ALE',
    name: 'IPA',
    modalId: 'modal006',
    discription: 'IPA',
  },
  {
    src: 'img/belgianwhite.jpg',
    alt: 'ベルジャンホワイト',
    category: 'ALE',
    name: 'ベルジャンホワイト',
    modalId: 'modal007',
  },
  {
    src: 'img/saison.jpg',
    alt: 'セゾン',
    category: 'ALE',
    name: 'セゾン',
    modalId: 'modal008',
  },
  {
    src: 'img/lambic.jpg',
    alt: 'ランビック',
    category: 'ALE',
    name: 'ランビック',
    modalId: 'modal009',
  },
  {
    src: 'img/kolsch.jpg',
    alt: 'ケルシュ',
    category: 'ALE',
    name: 'ケルシュ',
    modalId: 'modal010',
  },
  {
    src: 'img/weizen.jpg',
    alt: 'ヴァイツェン',
    category: 'ALE',
    name: 'ヴァイツェン',
    modalId: 'modal011',
  },
  {
    src: 'img/stout.jpg',
    alt: 'スタウト',
    category: 'ALE',
    name: 'スタウト',
    modalId: 'modal012',
  },
];

const beerList = document.getElementById('beerList');

beers.forEach((beer) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="#" class="" data-modal="${beer.modalId}">
      <img src="${beer.src}" alt="${beer.alt}" />
      <span>🍺${beer.category}: ${beer.name}</span>
    </a>
  `;
  beerList.appendChild(listItem);
});

// モーダルボタンを選択
const modalButtons = document.querySelectorAll('[data-modal^="modal"]');
const modalCloseBtns = document.querySelectorAll('[data-modal="close"]');

// モーダルを消す動作
modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', function () {
    document.querySelector('[data-modal="bg"]').classList.remove('is-active');
    document
      .querySelector('[data-modal="inner"]')
      .classList.remove('is-active');
    // アクティブなモーダルをすべて非アクティブにする
    modalButtons.forEach((btn) => {
      const modalId = btn.getAttribute('data-modal');
      document
        .querySelector(`[data-modal="box-${modalId}"]`)
        .classList.remove('is-active');
    });
  });
});

// モーダルを表示する動作
modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document
      .querySelector(`[data-modal="box-${modalId}"]`)
      .classList.add('is-active');
  });
});
