import { useEffect } from 'react'
import './MilkDrops.css'

const MilkDrops = () => {
  useEffect(() => {
    const dropColors = ['#E8D4F2', '#F8F0FF', '#D4C5E8', '#FFFFFF']

    const createMilkDrop = () => {
      const container = document.getElementById('milk-drops-container')
      if (!container) return

      const drop = document.createElement('div')
      drop.className = 'milk-drop'

      const xPosition = Math.random() * window.innerWidth
      drop.style.left = xPosition + 'px'

      const color = dropColors[Math.floor(Math.random() * dropColors.length)]
      drop.style.background = color

      const size = Math.random() * 8 + 8
      drop.style.width = size + 'px'
      drop.style.height = size + 'px'

      const duration = Math.random() * 2 + 2
      drop.style.animationDuration = duration + 's'

      container.appendChild(drop)

      setTimeout(() => {
        drop.remove()
      }, duration * 1000)
    }

    const interval = setInterval(createMilkDrop, 300)

    return () => clearInterval(interval)
  }, [])

  return <div id="milk-drops-container" className="milk-drops-container"></div>
}

export default MilkDrops
