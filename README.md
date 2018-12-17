# Deloitte South West Technology Hub

This is the code repository for [http://swth.deloittedigital.co.uk](http://swth.deloittedigital.co.uk).

## Development

It has been built with [Gatsby](https://gatsbyjs.org) so please refer to [its documentation](https://www.gatsbyjs.org/docs/) and familiarize yourself with its conventions before doing any development work.

If you're feeling ready, you can begin with the usual

```
yarn
yarn start
```

And then navigate to [http://localhost:8000](http://localhost:8000)

## Storybook

The majority of components here have been built using [Storybook](https://storybook.js.org).

You can run storybook with a simple

```
yarn storybook
```

And then navigate to [http://localhost:9001](http://localhost:9001)

## Deploying

The site is set to automatically deploy when merging a pull request to the following branches

|Branch|Status|Environment|
|-|-|-|
| `develop`|[![CircleCI](https://circleci.com/gh/DeloitteDigitalUK/swth.deloitte.co.uk/tree/develop.svg?style=svg&circle-token=fd7aadb9fca7ba505493ded1acbb21d7a2a99725)](https://circleci.com/gh/DeloitteDigitalUK/swth.deloitte.co.uk/tree/develop)| https://develop.swth.deloittedigital.co.uk.s3-website.eu-west-2.amazonaws.com|
|`master`|[![CircleCI](https://circleci.com/gh/DeloitteDigitalUK/swth.deloitte.co.uk/tree/master.svg?style=svg&circle-token=fd7aadb9fca7ba505493ded1acbb21d7a2a99725)](https://circleci.com/gh/DeloitteDigitalUK/swth.deloitte.co.uk/tree/master)| https://swth.deloittedigital.co.uk|

**Note that merging to master will deploy the live site!**

You can configure the deployment by looking at `.circleci/config.yml`.

## Updating content

Each section of the site should be content authorable by updating the Markdown files on the content folder. Each Markdown file has meta attributes at the top which align to a key, which is queried at build time. To update the content, simply edit the markdown file and save it. If the site is running locally, you will see the update immediately.

If you are unfamiliar with Markdown, [refer to this guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables).

If you would like to update content and don't have any experience with React or Github

* Ensure you have a Github account and are logged in
* Navigate to the file to update in Github, most likely in the `/src/content` folder
* Click the edit button
* Make your changes
* Commit changes by selecting "Create a new branch for this commit and start a pull request" against the develop branch
* Get someone to review and merge your changes to the develop branch
* Preview your changes on the [develop site](https://develop.swth.deloittedigital.co.uk.s3-website.eu-west-2.amazonaws.com) (takes roughly 2 minutes to update)
* Raise a pull request from the develop branch to the master branch
* Get someone to review and merge your changes to the master branch
* Once merged to master, **your changes will be [live](https://swth.deloittedigital.co.uk)!**  (takes roughly 2 minutes to update)