import './index.css'

const BlogItem = props => {
  const {eachDetail} = props
  const {title, description, publishedDate} = eachDetail

  return (
    <li className="blog-item-container">
      <div className="title-and-desc">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="publishedDate">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
