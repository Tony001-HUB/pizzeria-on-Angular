import { Product } from "../models/product";

export class Data {

  static product: Product[] = [
    {
      id: 1,
      title: "Пицца Грибная",
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
      title: "Пицца с ветчиной",
      description: "Пиццa c вeтчинoй и cыpoм — пpeкpacнo пoдoйдeт для xopoшeгo oбeдa. В пиццe дoлжны быть мoцapeллa и пapмeзaн, и вeтчинa.",
      isEnabled: true,
      photo: "https://e3.edimdoma.ru/data/recipes/0008/1905/81905-ed4_wide.jpg?1482942293",
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
      title: "Пицца Маргарита",
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
    }
  ];
}

