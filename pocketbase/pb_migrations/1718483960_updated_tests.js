/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od6hz58c95u0tla")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixt8g0oc",
    "name": "cover",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjpa4ivn",
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
  const collection = dao.findCollectionByNameOrId("od6hz58c95u0tla")

  // remove
  collection.schema.removeField("ixt8g0oc")

  // remove
  collection.schema.removeField("kjpa4ivn")

  return dao.saveCollection(collection)
})
