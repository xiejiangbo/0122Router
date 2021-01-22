const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("./view/home/index")
  },
    // 博客层级结构
  {
    path: "/blog",
    name: "blog",
    redirect: { name: "blogList" },
    component: () => import("./view/blog/index"),
    children: [
      {
        path: "list",
        name: "blogList",
        component: () => import("./view/blog/BlogList.vue"),
      },
      {
        path: "view/:id",
        name: "blogView",
        props:true,
        component: () => import("./view/blog/BlogDetail.vue"),
      }
    ]
  },
  // 问答层级结构
  {
    path: "/question",
    name: "questionList",
    redirect: { name: "questionList" },
    component: () => import("./view/question/index"),
    children: [
      {
        path: "list",
        name: "questionList",
        component: () => import("./view/question/QuestionList.vue"),
      },
      {
        path: "view/:id",
        name: "questionView",
        props:true,
        component: () => import("./view/question/QuestionDetail.vue"),
      }
    ]
  },
   // 个人信息层级结构
 
  {
    path: "/personal/:id",
    name: "personal",
    redirect: { name: "personalDetail" },
    component: () => import("./view/personal/index"),
    children: [
     
      {
        path: "view/:id",
        name: "personalDetail",
        props:true,
        component: () => import("./view/personal/PersonalDetail.vue"),
      }
    ]
  },
  // 商品
    {
        path: "/shop",
        name: "shop",
        component: () => import("./view/shop/index")
    },
  
   
];

export default routes;
