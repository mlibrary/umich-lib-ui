const findMarkdownEdge = (allMarkdownRemark, name) => {
  return allMarkdownRemark.edges.find(mdEdge => {
    const markdownName = mdEdge.node.fields.name
    return name === markdownName
  })
}

export default (data) => {
  const { allSideNavPagesYaml, allMarkdownRemark } = data

  return allSideNavPagesYaml.edges.reduce((acc, edge) => {
    const yamlName = edge.node.page
    const mdEdgeFound = findMarkdownEdge(allMarkdownRemark, yamlName)

    if (mdEdgeFound) {
      const items = edge.node.pages.reduce((itemsAcc, item) => {
        const mdEdgeItemFound = findMarkdownEdge(allMarkdownRemark, item)
        
        if (mdEdgeItemFound) {
          itemsAcc = itemsAcc.concat({
            title: mdEdgeItemFound.node.frontmatter.title,
            to: `/${yamlName}/${item}/`
          })
        }

        return itemsAcc
      }, [])

      const section = {
        title: mdEdgeFound.node.frontmatter.title,
        items: items
      }

      acc = acc.concat(section)
    }

    return acc
  }, [])
}