module.exports = attacher

function attacher(field, processor) {
  return transformer
  async function transformer(tree, file) {
    const ast = await processor.run(tree)
    file.data[field] = processor.stringify(ast)
  }
}
