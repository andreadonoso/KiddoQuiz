/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm66q9k9vzm6xmg")

  collection.name = "classes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm66q9k9vzm6xmg")

  collection.name = "class"

  return dao.saveCollection(collection)
})
