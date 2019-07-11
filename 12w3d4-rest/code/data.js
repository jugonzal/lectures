var db = [
  {
    "id": 0,
    "title": "The Aleph",
    "body": `On the back part of the step, toward the right, I saw a small iridescent sphere of almost unbearable brilliance. At first I thought it was revolving; then I realised that this movement was an illusion created by the dizzying world it bounded. The Aleph's diameter was probably little more than an inch, but all space was there, actual and undiminished. Each thing (a mirror's face, let us say) was infinite things, since I distinctly saw it from every angle of the universe. I saw the teeming sea; I saw daybreak and nightfall; I saw the multitudes of America; I saw a silvery cobweb in the center of a black pyramid; I saw a splintered labyrinth (it was London); I saw, close up, unending eyes watching themselves in me as in a mirror; I saw all the mirrors on earth and none of them reflected me; I saw in a backyard of Soler Street the same tiles that thirty years before I'd seen in the entrance of a house in Fray Bentos; I saw bunches of grapes, snow, tobacco, lodes of metal, steam; I saw convex equatorial deserts and each one of their grains of sand...[1] `
  },
  {
    "id": 1,
    "title": "The immortal",
    "body": "The story is an autobiographical tale told by a Roman soldier, Marcus Flaminius Rufus, during the reign of the emperor Diocletian. During a sleepless night in Thebes, Egypt, a mysterious man, exhausted and wounded, seeks refuge in his camp. Just before dying, he tells Rufus about a river whose waters bestow immortality on whoever drinks from it. The river is next to a place called the City of the Immortals. Determined to find it, Rufus sets out for Africa with his soldiers. The harsh conditions of the trip cause many of his men to desert. After hearing that the remaining soldiers are planning his death, Rufus flees and wanders through the desert. "
  },
  {
    "id": 2,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];

module.exports = {
  all: () => db,
  count: () => db.length,
  add: (obj) => db.push(Object.assign({id: db.length}, obj)),
  one: (id) => db.find(e => e.id == id),
  update: (id, obj) => Object.assign(db.find(e => e.id == id),obj),
  search: (query) => db.filter(e => e.title.includes(query))
}