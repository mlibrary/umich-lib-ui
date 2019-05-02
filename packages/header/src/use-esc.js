import { useEffect, useRef } from 'react'

/*
  # Why?

  Handles overlays, modals, dropown, etc logic for
  catchin on ESC keypress.

  ## Example

  function ShowAllOverlay() {
    const [ open, setOpen ] = useState('false')
    const [ node ] = useESC(handleESC)

    // Also close on ESC with help from useESC
    function handleESC() {
      setOpen(!open)
    }

    export (
      <div>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >Show all</button>
        {open && (
          <div ref={node}>
            <p>Showing all the things.</p>
          </div>
        )}
      </div>
    )
  }
  
*/
export default function useESC(onESC) {
  const node = useRef();

  const handleClick = e => {
    if (node.current && !node.current.contains(e.target)) {
      onESC()
    }
  };
  
  const handleKeydown = e => {
    if (e.keyCode === 27) {
      // ESC key
      onESC()
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClick);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("mouseup", handleClick);
      document.addEventListener("keydown", handleKeydown);
    };
  });

  return [node]
}