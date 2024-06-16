/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5nnhngtmnqzvsy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmur24dg",
    "name": "choices",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5nnhngtmnqzvsy")

  // remove
  collection.schema.removeField("nmur24dg")

  return dao.saveCollection(collection)
})
