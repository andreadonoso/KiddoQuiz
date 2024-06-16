/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hep04vwbslwxm1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lr9s1nyd",
    "name": "answers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p5nnhngtmnqzvsy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hep04vwbslwxm1")

  // remove
  collection.schema.removeField("lr9s1nyd")

  return dao.saveCollection(collection)
})
