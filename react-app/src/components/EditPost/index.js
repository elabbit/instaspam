import { useState } from "react"
import { useDispatch } from "react-redux"



const EditPost = () => {
  const dispatch = useDispatch()
  const [caption, setCaption] = useState('');


  return (
    <form onSubmit={handleSubmit}>
      <div>

      </div>
      <div>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
    </form>
  )
}
