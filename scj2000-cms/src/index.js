'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    const extension = ({}) => ({
      typeDefs: `
        type Tag {
          articleCount: Int
        }
      `,
      resolvers: {
        Tag: {
          articleCount: async (parent, args) => {
            const count = await strapi.entityService.count('api::article.article', {
              filters: {
                tags: parent.id,
              },
            });
            return count;
          }
        }
      }
    })
    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
