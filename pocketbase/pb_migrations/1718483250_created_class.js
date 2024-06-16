/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sm66q9k9vzm6xmg",
    "created": "2024-06-15 20:27:30.739Z",
    "updated": "2024-06-15 20:27:30.739Z",
    "name": "class",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c9kaiy7d",
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
  const collection = dao.findCollectionByNameOrId("sm66q9k9vzm6xmg");

  return dao.deleteCollection(collection);
})
