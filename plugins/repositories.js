import createRepository from '~/utils/repository'
// import createRepository from '~/utils/repositoryNested'

export default ({ $axios }, inject) => {
  const repositoryInjector = createRepository($axios)

  const repositories = {
    posts: repositoryInjector('posts'),
    users: repositoryInjector('users'),
    // userPosts: repositoryInjector('users/:userId/posts'),
    // userPosts: repositoryInjector('posts?userId=:userId'),
    // users: {
    //   ...repositoryInjector('users'),
    //   namespace: {
    //     posts: repositoryInjector('users/:id/posts'),
    //   },
    // },
  }

  inject('repositories', repositories)
}
