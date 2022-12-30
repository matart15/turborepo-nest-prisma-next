module.exports = {
  schema: [
    {
      "http://localhost:4000/graphql": {
        headers: {
          // "x-hasura-admin-secret": "myadminsecretkey",
        },
      },
    },
  ],
  documents: ["graphql/queries/**/*.gql"],
  overwrite: true,
  generates: {
    "apps/web/types/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsConst: true,
      },
    },
    "apps/admin/types/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsConst: true,
      },
    },
  },
};
