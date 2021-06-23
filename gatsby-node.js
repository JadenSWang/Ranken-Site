const fetch = require(`node-fetch`)
const { createRemoteFileNode } = require("gatsby-source-filesystem")

async function getSkewerCMSData(createNode, createNodeId, createContentDigest) {
  const data = await (
    await fetch("https://cms.jadenswang.com/items/rnh_menu_skewers")
  ).json().data

  const nodeContent = JSON.stringify(data)

  const nodeMeta = {
    id: createNodeId(`menu-skewers`),
    parent: null,
    children: [],
    internal: {
      type: `MenuSkewers`,
      mediaType: `json`,
      content: nodeContent,
      contentDigest: createContentDigest(data),
    },
  }
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type MenuItem implements Node {
//       data: MenuData
//       featuredImg: File @link(from: "featuredImg___NODE")
//     }

//     type MenuData {
//       title: String
//       price: Float
//       featuredImgUrl: String
//     }
//   `)
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.data.featuredImgUrl !== null
//   ) {
//     let fileNode = await createRemoteFileNode({
//       url: node.data.featuredImgUrl, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's Redux store
//     })

//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.featuredImg___NODE = fileNode.id
//     }
//   }
// }

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // getSkewerCMSData(createNode, createNodeId, createContentDigest)

  // Data can come from anywhere, but for now create it manually
  const myData = {
    data: {
      title: "Shrimp",
      price: 10.3,
      featuredImgUrl:
        "https://cms.jadenswang.com/assets/fee871aa-d8e7-425b-91ad-3e259785926d",
    },
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.title}`),
    parent: null,
    children: [],
    internal: {
      type: `MenuItem`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }

  const node = Object.assign({}, myData, nodeMeta)
  console.log(node)
  createNode(node)
}

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.frontmatter.featuredImgUrl !== null
//   ) {
//     let fileNode = await createRemoteFileNode({
//       url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's Redux store
//     })
//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.featuredImg___NODE = fileNode.id
//     }
//   }
// }

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`,
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // get data from GitHub API at build time
//   const result = await fetch(
//     `https://cms.jadenswang.com/items/rnh_menu_skewers`
//   )
//   const resultData = await result.json()
//   // create node for build time data example in the docs
//   createNode({
//     // nameWithOwner and url are arbitrary fields from the data
//     nameWithOwner: "skewers",
//     url: "skewers",
//     // required fields
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `Example`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
// }
