import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      
    </>
  )
}
interface BlogPostProps {
  id: string;
  title: string;
}
export function Blog({ id, title }: BlogPostProps) {
  const blogPosts = document.querySelectorAll('.BlogPostBtn')
  const [blogList, setBlogList] = useState<BlogPostProps[]>([])
  const [error, setError] = useState('')
  const errorContainer = document.getElementById('errorContainer')

  useEffect(() => {
    async () => {
      const res = await fetch('/data/blogContent.json')
      const data = await res.json()
    setBlogList(data)
    if (!res.ok) {
      setError('Failed to load in blog content')
      errorContainer.classList.toggle('hidden')
    }}
  }, [])
  const handleClick = (id: string) => {
    useNavigate()( `blog/${id}`)
  } 
  return (
    <div className='blogContainer'>
      <h1>Our Stories</h1>
      <h5>Read about our journey and experiences</h5>
      <div className='BlogGrid'>
        {blogList.map(blog => 
          <button key={blog.id} className='BlogPostBtn' onClick={()=> handleClick(blog.id)}>
            <h2>{blog.title}</h2>
          </button>
        )}
      </div>
      <div id='errorContainer' className='hidden'>{error}</div>
      
    </div>
  )
}
