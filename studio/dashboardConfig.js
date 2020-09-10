export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5aa9d9ba62172d5e8344da',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2abx8ay5',
                  apiId: 'aa593272-3877-47f7-b201-e2250dddab9c'
                },
                {
                  buildHookId: '5f5aa9d94d69d7344b0e0ea8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uuw47ubu',
                  apiId: 'f1df460a-9e14-4454-b671-b73a4f6984fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uuw47ubu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
