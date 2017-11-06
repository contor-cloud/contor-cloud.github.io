import slugify from 'slugify'

export default (string, directory) => {
  const filename = slugify(string)

  return directory ? `/${directory}/${filename}` : filename
}
