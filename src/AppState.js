import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  rooms: [
    {
      id: 0,
      name: 'Moving Truck',
      items: [
        { id: 1, name: 'bed', url: 'https://static.thenounproject.com/png/1072-200.png' },
        { id: 2, name: 'tv', url: 'https://static.thenounproject.com/png/3541697-200.png' },
        { id: 3, name: 'toilet', url: 'https://media.istockphoto.com/vectors/toilet-icon-isolated-logo-on-white-background-toilet-bowl-vector-id1219035172?k=20&m=1219035172&s=170667a&w=0&h=FuDnY51i3PcacciWHECEJLtW5d6dUcxtCxgzPQIOlSk=' },
        { id: 4, name: 'dishwasher', url: 'https://media.istockphoto.com/vectors/toilet-icon-isolated-logo-on-white-background-toilet-bowl-vector-id1219035172?k=20&m=1219035172&s=170667a&w=0&h=FuDnY51i3PcacciWHECEJLtW5d6dUcxtCxgzPQIOlSk=' },
        { id: 5, name: 'fan', url: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/computer-fan-2113155-1781340.png' },
        { id: 6, name: 'fridge', url: 'https://image.freepik.com/free-icon/refrigerator_318-10736.jpg' },
        { id: 7, name: 'lamp', url: 'https://www.creativefabrica.com/wp-content/uploads/2019/04/Lamp-icon-by-ahlangraphic-109-580x386.jpg' },
        { id: 8, name: 'microwave', url: 'https://thumbs.dreamstime.com/b/bowl-microwave-icon-outline-style-vector-web-design-isolated-white-background-190751776.jpg' },
        { id: 9, name: 'toaster', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVPgU_i7e_YbI8LheJa6tvLe6Jl9eLzOrvA&usqp=CAU' },
        { id: 10, name: 'washingmachine', url: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/washing-machine-2564180-2141341.png' }
      ]
    },
    { id: 1, name: 'Bedroom', items: [] },
    { id: 2, name: 'Living Room', items: [] },
    { id: 3, name: 'Kitchen', items: [] },
    { id: 4, name: 'Bathroom', items: [] },
    { id: 5, name: 'Garbage', items: [] }
  ],
  tempItem: {}
})
