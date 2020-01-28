const author = {
  displayName: "Pseudocoder Kim",
  picUrl: "",
  introduction: "",
}

const tags = [
  {
    id: "40b7fb12-4f9b-478b-8485-869bb3f62c66",
    name: "productivity",
  },

  {
    id: "a46b435a-eae3-4982-9c9a-ea8b5a3e332c",
    name: "react",
  },

  {
    id: "8ec92a94-ed73-4366-a979-410f11237e87",
    name: "javascript",
  },

  {
    id: "8ec92a94-ed73-4366-a979-410f11237e87",
    name: "product review",
  },

  {
    id: "8ec92a94-ed73-4366-a979-410f11237e87",
    name: "tech geeks",
  },

  {
    id: "8ec92a94-ed73-4366-a979-410f11237e87",
    name: "web development",
  },
]

const posts = [
  {
    id: "f4872c1f-fb3d-4230-90b1-67666daef514",
    title: "This is post one",
    tags: [tags[0], tags[1]],
    createdAt: new Date("Tue Jan 28 2020 14:00:36 GMT+0900"),
    quote: "Short description one.",
    content:
      "I started building this blog site project for few weeks from now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam magni consectetur maiores, non, illo ex voluptatem animi quaerat dolorum veritatis obcaecati perferendis dolor dolores iste autem mollitia totam! Consectetur.",
  },

  {
    id: "61317626-ed40-4556-b7b8-d8e0be72b769 ",
    title: "Productivity requires tremendous efforts?",
    tags: [tags[1], tags[2]],
    createdAt: new Date("Tue Jan 23 2020 14:01:19 GMT+0900"),
    quote: "Short description two.",
    content:
      "I started building this blog site project for few weeks from now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam magni consectetur maiores, non, illo ex voluptatem animi quaerat dolorum veritatis obcaecati perferendis dolor dolores iste autem mollitia totam! Consectetur.",
  },

  {
    id: "978ad337-30f6-43a4-9347-9f813f6ee92a",
    title: "React is the one I use to develop this blog",
    tags: [tags[2], tags[3]],
    createdAt: new Date("Tue Jan 25 2020 14:03:36 GMT+0900"),
    quote: "Short description three.",
    content:
      "I started building this blog site project for few weeks from now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam magni consectetur maiores, non, illo ex voluptatem animi quaerat dolorum veritatis obcaecati perferendis dolor dolores iste autem mollitia totam! Consectetur.",
  },

  {
    id: "2300fa28-470e-426f-9888-19aeeee4bc10",
    title: "Hopefully I could finish this today?",
    tags: [tags[3], tags[4]],
    createdAt: new Date("Tue Jan 21 2020 14:06:36 GMT+0900"),
    quote: "Short description four.",
    content:
      "I started building this blog site project for few weeks from now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam magni consectetur maiores, non, illo ex voluptatem animi quaerat dolorum veritatis obcaecati perferendis dolor dolores iste autem mollitia totam! Consectetur.",
  },
]

const siteMeta = {
  banner: "Life in Pseudocode.",
  githubUrl: "https://www.github.com/digression99",
  linkedinUrl: "https://www.linkedin.com/in/ilsik-kim-64b6a1a7",
}

module.exports = {
  siteMeta,
  posts,
  tags,
  author,
}
