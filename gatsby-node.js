/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require("gatsby-source-filesystem")
const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  // fetch item metadata
  await fetch("https://cms.jadenswang.com/items/rnh_meta")
    .then(rawData => rawData.json())
    .then(fetchedData => {
      const siteMetadata = {
        images: [],
        metadata: {
          id: fetchedData.data.id,
          logoAssetId: fetchedData.data.logo,
          carouselAssetIds: fetchedData.data.carouselimages,
        },
      }

      const nodeContent = JSON.stringify(siteMetadata)

      const nodeMeta = {
        id: createNodeId(`my-data-metadata`),
        parent: null,
        children: [],
        internal: {
          type: `siteMetadata`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(siteMetadata),
        },
      }

      const node = Object.assign({}, siteMetadata, nodeMeta)
      createNode(node)
    })
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, cal   l createRemoteFileNode
  if (node.internal.type === "siteMetadata" && node.metadata.logoAssetId) {
    let fileNode = await createRemoteFileNode({
      url: `https://cms.jadenswang.com/assets/${node.metadata.logoAssetId}`, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.logoImage___NODE = fileNode.id
    }
  }
}
