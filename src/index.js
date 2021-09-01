export default function attacher(field, processor) {
  return transformer
  function transformer(tree, file, next) {
    processor.run(tree, function done(err, node) {
      file.data[field] = processor.stringify(node)
      next(err)
    })
  }
}
