/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm66q9k9vzm6xmg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "orbkbw8k",
    "name": "tests",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "od6hz58c95u0tla",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm66q9k9vzm6xmg")

  // remove
  collection.schema.removeField("orbkbw8k")

  return dao.saveCollection(collection)
})
