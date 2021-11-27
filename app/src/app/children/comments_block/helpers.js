import parse from 'html-react-parser'

export function getCaptionFromEdges (data) {
  return data.edges[0].node.text
}

export function getCommentsFromEdges (data) {
  return data.edges.map(edge => edge.node)
}

export function highlightHashtags (string) {
  if (typeof string === 'string') {
    return parse(string.replaceAll(/(?<!\w)#\w+/g, (match) => `<a href="/${match}" className="hashTag">${match}</a>`))
  }
}
