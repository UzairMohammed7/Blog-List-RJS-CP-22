import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list-container">
      {blogsList.map(eachListItem => (
        <BlogItem key={eachListItem.id} eachDetail={eachListItem} />
      ))}
    </ul>
  )
}

export default BlogList
