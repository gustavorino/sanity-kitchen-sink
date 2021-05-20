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
                  buildHookId: '60a5ae9ecd7de74a8b83c364',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mqfddxiv',
                  apiId: '7da5a873-3241-4b18-a5dd-d69bcbc22794'
                },
                {
                  buildHookId: '60a5ae9e6b4b0e3f48613b72',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sf8ao51g',
                  apiId: '25de5d63-7acf-4dd8-be2b-c6ceb2cd077a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gustavorino/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sf8ao51g.netlify.app', category: 'apps'}
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
