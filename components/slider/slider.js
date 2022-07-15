import slider from '../../styles/slider.module.css'
import Image from 'next/image'
import { Children, cloneElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Slider({ children }) {


  const PAGE_WIDTH = 450
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {

      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 450)
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {

      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH*(pages.length - 1))

      console.log(newOffset)

      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`
          }
        })
      })
    )
  }, [])


  return (
    <div className={slider.slider}>
      <FaChevronLeft className={slider.arrow} onClick={handleLeftArrowClick} />
      <div className={slider.image_box}>
        
        <div className={slider.items}

          style={{
            transform: `translatex(${offset}px)`

          }}>
          {pages}
        </div>
        
      </div>
      <FaChevronRight className={slider.arrow} onClick={handleRightArrowClick} />
    </div>
  )
}