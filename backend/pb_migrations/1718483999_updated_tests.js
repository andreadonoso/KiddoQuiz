/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od6hz58c95u0tla")

  // remove
  collection.schema.removeField("kjpa4ivn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwwumjiu",
    "name": "questions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1hep04vwbslwxm1",
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

  // remove
  collection.schema.removeField("dwwumjiu")

  return dao.saveCollection(collection)
})
