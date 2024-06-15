/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5nnhngtmnqzvsy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tg78bxxg",
    "name": "is_correct",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5nnhngtmnqzvsy")

  // remove
  collection.schema.removeField("tg78bxxg")

  return dao.saveCollection(collection)
})
