const topCreators = {
  data() {
    return {
      creators: [
        { number: '1', name: 'Keepitreal', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20(4).png' },
        { number: '2', name: 'DigiLab', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(1).png' },
        { number: '3', name: 'GravityOne', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(2).png' },
        { number: '4', name: 'Juanie', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(3).png' },
        { number: '5', name: 'BlueWhale', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(4).png' },
        { number: '6', name: 'Mr Fox', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(5).png' },
        { number: '7', name: 'Shroomie', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(6).png' },
        { number: '8', name: 'Robotica', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(7).png' },
        { number: '9', name: 'RustyRobot', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(8).png' },
        { number: '10', name: 'Animakid', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(9).png' },
        { number: '11', name: 'Dotgu', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(10).png' },
        { number: '12', name: 'Ghiblier', sales: '34.53 ETH', image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Placeholder%20(11).png' },
      ],
    };
  },
};

const browseCategories = {
  data() {
    return {
      categories: [
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon.png', categories: 'Art' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (1).png', categories: 'Collectibles' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (2).png', categories: 'Music' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (3).png', categories: 'Photography' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (4).png', categories: 'Video' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (5).png', categories: 'Utility' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (6).png', categories: 'Sport' },
        { image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Category%20Icon (7).png', categories: 'Virtual Worlds' },
      ],
    };
  },
};

const discoverMore = {
  data() {
    return {
      discover: [
        {
          image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Image%20Discover.png',
          name: 'DistantGalaxy',
          creator: 'MoonDancer',
          avatar: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20MoonDancer.png',
          price: '1.63 ETH',
          highestBid: '0.33 wETH',
        },
        {
          image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Image%20Discover(1).png',
          name: 'Life On Edena',
          creator: 'NebulaKid',
          avatar: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20NebulaKid.png',
          price: '1.63 ETH',
          highestBid: '0.33 wETH',
        },
        {
          image: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Image%20Discover(2).png',
          name: 'AstroFiction',
          creator: 'Spaceone',
          avatar: 'file:///D:/Latihan/latihan/nft%20marketplace/img/Avatar%20Spaceone.png',
          price: '1.63 ETH',
          highestBid: '0.33 wETH',
        },
      ],
    };
  },
};

Vue.createApp(topCreators).mount('#top-creators');
Vue.createApp(browseCategories).mount('#browse-categories');
Vue.createApp(discoverMore).mount('#discover-more');
