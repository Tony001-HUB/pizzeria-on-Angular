import { Product } from "../models/product";

export class Data {

  static product: Product[] = [
    {
      id: 1,
      title: "Грибная",
      description: "Томатный соус, ветчина говяжья, куриное филе, шампиньоны, чесночный соус, сыр моцарелла",
      isEnabled: true,
      photo: "https://pizza-luigi.kz/wa-data/public/shop/products/21/00/21/images/23/23.970.jpg",
      price: 12,
      weight: 12,
      category: {
        id: 1,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 1,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 2,
      title: "Ветчина",
      description: "Пиццa c вeтчинoй и cыpoм — пpeкpacнo пoдoйдeт для xopoшeгo oбeдa. В пиццe дoлжны быть мoцapeллa и пapмeзaн, и вeтчинa.",
      isEnabled: true,
      photo: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png",
      price: 15,
      weight: 30,
      category: {
        id: 2,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 2,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 3,
      title: "Маргарита",
      description: "сыр моцарелла, спелые помидоры и листья свежего базилика, которые придают ей неповторимый вкус и аромат.",
      isEnabled: true,
      photo: "https://static.1000.menu/img/content-v2/ef/27/10853/picca-margarita-v-domashnix-usloviyax_1608783820_4_max.jpg",
      price: 8,
      weight: 30,
      category: {
        id: 3,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 3,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 4,
      title: "Спайси",
      description: "Пепперони, Халапеньо, Сыр моцарелла, Томатный соус Domino's, Бекон, Томаты",
      isEnabled: true,
      photo: "https://static.1000.menu/img/content-v2/24/88/49769/meksikanskaya-picca-ostraya_1597786186_13_max.jpg",
      price: 18,
      weight: 30,
      category: {
        id: 4,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 4,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 5,
      title: "Мюнхенская",
      description: "Баварские колбаски, Томаты, Соус барбекю, Горчица, Сыр моцарелла, Мюнхенские колбаски, Ветчина",
      isEnabled: true,
      photo: "https://images.dominos.by/media/dominos/osg/api/2019/07/03/myunkhenskaya_small.png",
      price: 16,
      weight: 30,
      category: {
        id: 5,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 5,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 6,
      title: "Овощная",
      description: "Сладкий перец, Сыр моцарелла, Лук, Оливки, Томаты, Шампиньоны, Томатный соус Domino's",
      isEnabled: true,
      photo: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png",
      price: 9,
      weight: 30,
      category: {
        id: 6,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 6,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 7,
      title: "Гипнотика",
      description: "Бекон, Шпинат, Соус барбекю, Пепперони, Обжаренный лук, Крем фреш, Телятина, Сыр моцарелла",
      isEnabled: true,
      photo: "https://images.dominos.by/media/dominos/osg/api/2020/01/09/gipnotika_small.png",
      price: 9,
      weight: 30,
      category: {
        id: 7,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 7,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
    {
      id: 8,
      title: "Кантри",
      description: "Бекон, Огурцы, Соус Чесночный, Лук, Сыр моцарелла, Ветчина, Шампиньоны",
      isEnabled: true,
      photo: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/kantri.png",
      price: 9,
      weight: 30,
      category: {
        id: 8,
        title: "",
        isEnabled: true
      },
      ingredients: [{
        id: 8,
        title: "",
        isEnabled: true,
        photo: "",
        price: 50
      }]
    },
  ];
}

