module.exports = {
  persistence: {
    catalog: [
      {
        // supported attributes include NeDB options object
        // see https://github.com/louischatriot/nedb#creatingloading-a-database
        collectionName: "contacts",
        schema: "contacts/schema.json"
      }
    ]
  },
  resources: {
    i18n: "frontend/assets/locales"
  }
};
