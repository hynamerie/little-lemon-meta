import { createServer, } from "miragejs"

createServer({
  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/dishes", () => {
      return {
        dishes: [
          {name: 'Greek Salad', price: '$ 12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
            image: "https://cdn.pixabay.com/photo/2014/12/28/13/18/feta-cheese-581848_960_720.jpg"
          },
          {name: 'Brushetta', price: '$ 7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
            image: 'https://cdn.pixabay.com/photo/2020/10/30/18/35/bruschetta-5699486_960_720.jpg'
          },
          {name: 'Lemon Dessert', price: '$ 5.99', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            image: 'https://cdn.pixabay.com/photo/2018/01/04/11/40/cake-3060458_1280.jpg'
          },
        ],
      }
    });
    
    this.get("/allmenu", () => {
      return {
        allmenu: {
          lunch: [
            {name: 'Brushetta', price: '$ 7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
              image: 'https://cdn.pixabay.com/photo/2020/10/30/18/35/bruschetta-5699486_960_720.jpg'
            },
          ],
          mains: [
            {name: 'Greek Salad', price: '$ 12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
              image: "https://cdn.pixabay.com/photo/2014/12/28/13/18/feta-cheese-581848_960_720.jpg"
            },
  
          ],
          diet: [
            {name: 'Greek Salad', price: '$ 12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
              image: "https://cdn.pixabay.com/photo/2014/12/28/13/18/feta-cheese-581848_960_720.jpg"
            },
  
          ]
        }
      }
    })
  },
})