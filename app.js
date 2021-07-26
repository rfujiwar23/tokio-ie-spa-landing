var vm = new Vue({
  el: '#app',
  data: {
    items: [
      {name: 'ヘッドスパ シャンプー', size: "200ml", img:'img/shampoo200.jpeg', price: 2600, taxPrice: 2860, purchaseLink: 'https://ifing-beauty.com/products/detail/96', stock: true, sub: false },
      {name: 'ヘッドスパ シャンプー', size: "500ml", img:'img/shampoo500.jpeg', price: 4900, taxPrice: 5390, purchaseLink: 'https://ifing-beauty.com/products/detail/97', stock: true, sub: false },
      {name: 'ヘッドスパ シャンプー', size: "900ml", img:'img/shampoo900.png', price: 7200, taxPrice: 3920, purchaseLink: 'https://ifing-beauty.com/products/detail/98', stock: true, sub: false},
      {name: 'ヘッドスパ トリートメント', size: "200ml", img:'img/treatment200.jpeg', price: 2600, taxPrice: 2860, purchaseLink: 'https://ifing-beauty.com/products/detail/99', stock: true, sub: false},
      {name: 'ヘッドスパ トリートメント', size: "500ml", img:'img/treatment500.jpeg', price: 4900, taxPrice: 5390, purchaseLink: 'https://ifing-beauty.com/products/detail/100', stock: true, sub: false},
      {name: 'ヘッドスパ トリートメント', size: "900ml", img:'img/treatment900.png', price: 7200, taxPrice: 7920, purchaseLink: 'https://ifing-beauty.com/products/detail/101', stock: true, sub: false},
      // {name: 'ヘッドスパ エアートリートメント', size: "100ml", img:'img/product005-out.oil.jpeg', price: 2800, taxPrice: 3080, purchaseLink: 'https://ifing-beauty.com/products/detail/90', stock: true, sub: false},
      {name: '500サイズセット', size: "《初回特典有》", img:'img/set500.jpeg', price: 9310, taxPrice: 10241, purchaseLink: 'https://ifing-beauty.com/products/detail/136', stock: true, sub: true},
      {name: '900サイズセット', size: "《初回特典有》", img:'img/set900.png', price: 13680, taxPrice: 15048, purchaseLink: 'https://ifing-beauty.com/products/detail/137', stock: true, sub: true },
      // {name: 'プレミアム シャンプー', size: "500", img:'img/product001-pr500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
      // {name: 'プレミアム シャンプー', size: "500", img:'img/product001-pr500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
      // {name: 'TOKIO INKARAMI PR TR.OIL', img:'img/product001.png', price: 1800, taxPrice: 1980, purchaseLink: 'https://ifing-beauty.com/products/detail/91', stock: true},
    ]
  }
});


var vm = new Vue({
  el: '#subsc',
  data: {
    items: [
      {name: '500サイズセット《初回特典有》', img:'img/sub900.jpeg', price: 7800, taxPrice: 8580, purchaseLink: 'https://ifing-beauty.com/products/detail/89', stock: true },
      {name: '500サイズセット《初回特典有》', img:'img/sub500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
    ]
  }
});

var char = new Vue({
  el: "#characteristics",
  data: {
    substances: [
      {name: 'ナールスゲン', subtext: 'シャンプーに配合', about: 'コラーゲン、エラスチンの働きをよくするためのヒートショックプロテインや、ヒアルロン酸の産生も高める作用があります。これらの効果によって、皮膚のバリア機能を正常化し、保湿などの効果につながってきます。', img1: "img/tokio-pr-bg.png", text2: 'ナールスゲン 肌環境改善効果', img2: "img/tokio-pr-bg.png"},
      {name: 'アルガンオイル', subtext: 'トリートメントに配合', about: '肌のバリア機能をサポートし、保水機能を上げます。また、ターンオーバーを促進し、肌の新陳代謝を良くします。その他には、血行を促進して肌荒れやすくを防ぎます。この効果が老化防止に繋がります。', img1: "img/tokio-pr-bg.png", text2: 'アルガンオイル ビタミンE含有量比較', img2: "img/tokio-pr-bg.png"},
    ]
  }
})


var imglist = new Vue ({
  el: "#gridlist",
  data: {
    spaImages: [
      {number: 1, imagelink: 'img/gallery1.jpg'},
      {number: 2, imagelink: 'img/gallery2.jpg'},
      {number: 3, imagelink: 'img/gallery3.jpg'},
      {number: 4, imagelink: 'img/gallery4.jpg'},
      {number: 5, imagelink: 'img/gallery5.jpg'},
      {number: 6, imagelink: 'img/gallery6.jpg'},
      {number: 7, imagelink: 'img/gallery7.jpg'},
      {number: 8, imagelink: 'img/gallery8.jpg'},
      {number: 9, imagelink: 'img/gallery9.jpg'},
    ]
  }
})


var imglist = new Vue ({
  el: "#productChar",
  data: {
    types: [
      {name: 'TOKIO IE ヘッドスパ シャンプー', img: 'img/001-head-spa-shampoo.png', text: '天然由来成分高配合のノンシリコン・低刺激ベタイン系シャンプー。抗炎症作用によって、頭皮の環境改善を行い、優れた保湿効果で頭皮と髪に潤いを与えます。また、メントールを含んだ豊富な泡でスッキリと洗い上げます。'},
      {name: 'TOKIO IE ヘッドスパ トリートメント', img: 'img/002-head-spa-treatment.png', text: '頭皮から髪までケアするノンシリコン・スカルプ＆ヘアトリートメントです。豊富な保湿成分が頭皮と髪を柔軟化し、乾燥を防ぎます。また、3種類のケラチン(補修剤)によって、髪にコシと補修効果を与えてサラサラな髪へと、導きます。'},
    ]
  }
})


