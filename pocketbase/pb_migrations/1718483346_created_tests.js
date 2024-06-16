/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "od6hz58c95u0tla",
    "created": "2024-06-15 20:29:06.921Z",
    "updated": "2024-06-15 20:29:06.921Z",
    "name": "tests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jpha5tak",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("od6hz58c95u0tla");

  return dao.deleteCollection(collection);
})
