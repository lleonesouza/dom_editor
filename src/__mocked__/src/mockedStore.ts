import Store from './interfaces/store'

const store = {
  components: [
    {
      id: "0",
      title: "classicNavbar",
      style: {
        position: "fixed"
      },
      component: null
    },
    {
      id: "1",
      title: "classicHome",
      style: {
        position: "fixed"
      },
      component: null
    },
  ],
  store: {
    title: "Raspiperry Caps",
    description: "a raspiperry story to create what you want",
    aboutText: "Hi, a store made by raspiperry lovers <3, we have a lot of projects, articles and videos teaching how widely use can be the uses of microcomputers, here you can find the lastest technology that you need to create any project you want",
    products:[
        {title: 'raspiperry pi 4'},

    ]
  }
}

export default store;
